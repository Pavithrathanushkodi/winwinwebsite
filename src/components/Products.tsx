import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS_DATA } from '../data';
import { Product, ProductColor } from '../types';
import { 
  Search, SlidersHorizontal, Info, Globe2, Sparkles, 
  ChevronRight, Phone, Send, X, ArrowLeft, Layers, ShieldCheck, 
  MapPin, Check, Truck, BadgePercent
} from 'lucide-react';

interface ProductsProps {
  darkMode: boolean;
  featuredOnly?: boolean;
  onSeeAllClick?: () => void;
  selectedProductIdFromHero?: string | null;
  setSelectedProductIdFromHero?: (id: string | null) => void;
}

export default function Products({ 
  darkMode, 
  featuredOnly = false, 
  onSeeAllClick,
  selectedProductIdFromHero,
  setSelectedProductIdFromHero
}: ProductsProps) {
  // States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<string>('All');
  const [selectedStorage, setSelectedStorage] = useState<string>('All');
  const [selectedCondition, setSelectedCondition] = useState<string>('All');
  const [maxPrice, setMaxPrice] = useState<number>(6000);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<ProductColor | null>(null);
  const [selectedStorageSize, setSelectedStorageSize] = useState<string | null>(null);
  const [selectedSimSpec, setSelectedSimSpec] = useState<string | null>(null);
  const [selectedDetailCondition, setSelectedDetailCondition] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);

  // Helper to open product details and initialize all choices
  const openProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setActiveImageIndex(0);
    
    // Initialize storage
    const defaultStorage = product.storage;
    setSelectedStorageSize(defaultStorage);
    
    // Initialize color
    if (product.colors && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    } else {
      setSelectedColor(null);
    }

    // Initialize Sim Spec if available
    if (product.variants) {
      const specs = product.variants
        .map(v => v.simSpec)
        .filter((spec): spec is string => typeof spec === 'string' && spec !== '');
      const uniqueSpecs = Array.from(new Set(specs));
      if (uniqueSpecs.length > 0) {
        setSelectedSimSpec(uniqueSpecs[0]);
      } else {
        setSelectedSimSpec(null);
      }

      // Initialize Condition
      const conds = product.variants
        .map(v => v.condition)
        .filter((c): c is string => typeof c === 'string' && c !== '');
      const uniqueConds = Array.from(new Set(conds));
      if (uniqueConds.length > 0) {
        setSelectedDetailCondition(uniqueConds[0]);
      } else {
        setSelectedDetailCondition(product.condition);
      }
    } else {
      setSelectedSimSpec(null);
      setSelectedDetailCondition(product.condition);
    }
  };

  // Deep linking or state synchronization from Hero
  useEffect(() => {
    if (selectedProductIdFromHero) {
      const prod = PRODUCTS_DATA.find(p => p.id === selectedProductIdFromHero);
      if (prod) {
        openProductDetails(prod);
      }
      if (setSelectedProductIdFromHero) {
        setSelectedProductIdFromHero(null);
      }
    }
  }, [selectedProductIdFromHero, setSelectedProductIdFromHero]);

  // Options for filters
  const seriesOptions = ['All', 'iPhone 17 Series', 'iPhone 16 Series', 'iPhone 15 Series', 'iPhone 14 Series', 'iPhone 13 Series'];
  const storageOptions = ['All', '128GB', '256GB', '512GB', '1TB'];
  const conditionOptions = ['All', 'Brand New', 'Demo'];

  // Currency Converter helper (approximate visual context)
  const formatAED = (val: number) => {
    return new Intl.NumberFormat('en-AE', { style: 'currency', currency: 'AED', maximumFractionDigits: 0 }).format(val);
  };
  const formatINR = (val: number) => {
    return '₹' + new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(val);
  };

  // Filter Products
  const filteredProducts = useMemo(() => {
    let result = PRODUCTS_DATA;

    // If featured only, filter down to the exact four premium items requested:
    // iPhone 17 Pro, iPhone 17 Pro Max, iPhone 16 Pro, iPhone 16 Pro Max
    if (featuredOnly) {
      return result.filter(p => 
        p.id === 'iphone-17-pro-max' || 
        p.id === 'iphone-17-pro' || 
        p.id === 'iphone-16-pro-max' || 
        p.id === 'iphone-16-pro'
      );
    }

    // Search Query Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.series.toLowerCase().includes(q) || 
        p.specs.chip.toLowerCase().includes(q)
      );
    }

    // Series Filter
    if (selectedSeries !== 'All') {
      result = result.filter(p => p.series === selectedSeries);
    }

    // Storage Filter
    if (selectedStorage !== 'All') {
      result = result.filter(p => p.storage === selectedStorage);
    }

    // Condition Filter
    if (selectedCondition !== 'All') {
      result = result.filter(p => p.condition === selectedCondition);
    }

    // Price Filter
    result = result.filter(p => p.priceAED <= maxPrice);

    return result;
  }, [featuredOnly, searchQuery, selectedSeries, selectedStorage, selectedCondition, maxPrice]);

  // Dynamic calculations for selected color and storage variant
  const matchingVariant = useMemo(() => {
    if (!selectedProduct) return null;
    if (!selectedProduct.variants || selectedProduct.variants.length === 0) return null;

    const colorName = selectedColor?.name || '';
    const storageSize = selectedStorageSize || selectedProduct.storage;
    const simSpec = selectedSimSpec;
    const condition = selectedDetailCondition;

    let candidates = selectedProduct.variants;

    // 1. Try matching storage
    let temp = candidates.filter(v => v.storage.toLowerCase() === storageSize.toLowerCase());
    if (temp.length > 0) candidates = temp;

    // 2. Try matching color
    temp = candidates.filter(v => v.color.toLowerCase() === colorName.toLowerCase());
    if (temp.length > 0) candidates = temp;

    // 3. Try matching simSpec if relevant
    if (simSpec) {
      temp = candidates.filter(v => v.simSpec && v.simSpec.toLowerCase() === simSpec.toLowerCase());
      if (temp.length > 0) candidates = temp;
    }

    // 4. Try matching condition if relevant
    if (condition) {
      temp = candidates.filter(v => v.condition && v.condition.toLowerCase() === condition.toLowerCase());
      if (temp.length > 0) candidates = temp;
    }

    return candidates[0] || selectedProduct.variants[0];
  }, [selectedProduct, selectedColor, selectedStorageSize, selectedSimSpec, selectedDetailCondition]);

  const availableStorages = useMemo(() => {
    if (!selectedProduct) return [];
    if (!selectedProduct.variants) return [selectedProduct.storage];
    const sizes = selectedProduct.variants.map(v => v.storage);
    return Array.from(new Set(sizes));
  }, [selectedProduct]);

  const availableSimSpecs = useMemo(() => {
    if (!selectedProduct || !selectedProduct.variants) return [];
    const specs = selectedProduct.variants
      .map(v => v.simSpec)
      .filter((spec): spec is string => typeof spec === 'string' && spec !== '');
    return Array.from(new Set(specs));
  }, [selectedProduct]);

  const availableConditions = useMemo(() => {
    if (!selectedProduct) return [];
    if (!selectedProduct.variants) return [selectedProduct.condition];
    const conds = selectedProduct.variants
      .map(v => v.condition)
      .filter((c): c is string => typeof c === 'string' && c !== '');
    if (conds.length === 0) return [selectedProduct.condition];
    return Array.from(new Set(conds));
  }, [selectedProduct]);

  // Check if there is an exact variant that matches ALL current attribute selections.
  // This tells us if this exact combination is in stock/available.
  const exactVariant = useMemo(() => {
    if (!selectedProduct) return null;
    if (!selectedProduct.variants || selectedProduct.variants.length === 0) return null;

    const colorName = selectedColor?.name || '';
    const storageSize = selectedStorageSize || selectedProduct.storage;
    const simSpec = selectedSimSpec;
    const condition = selectedDetailCondition;

    return selectedProduct.variants.find(v => {
      const matchColor = v.color.toLowerCase() === colorName.toLowerCase();
      const matchStorage = v.storage.toLowerCase() === storageSize.toLowerCase();
      
      const matchSimSpec = availableSimSpecs.length > 0
        ? (v.simSpec && simSpec && v.simSpec.toLowerCase() === simSpec.toLowerCase())
        : true;
        
      const matchCondition = availableConditions.length > 1
        ? (v.condition && condition && v.condition.toLowerCase() === condition.toLowerCase())
        : true;

      return matchColor && matchStorage && matchSimSpec && matchCondition;
    });
  }, [selectedProduct, selectedColor, selectedStorageSize, selectedSimSpec, selectedDetailCondition, availableSimSpecs, availableConditions]);

  const isOutOfStock = useMemo(() => {
    if (!selectedProduct) return false;
    if (!selectedProduct.variants || selectedProduct.variants.length === 0) return false;
    return !exactVariant;
  }, [selectedProduct, exactVariant]);

  // Sync active image with matching variant or color
  useEffect(() => {
    if (exactVariant && typeof exactVariant.imageIndex === 'number') {
      setActiveImageIndex(exactVariant.imageIndex);
    } else if (matchingVariant && typeof matchingVariant.imageIndex === 'number') {
      setActiveImageIndex(matchingVariant.imageIndex);
    } else if (selectedColor && typeof selectedColor.imageIndex === 'number') {
      setActiveImageIndex(selectedColor.imageIndex);
    }
  }, [exactVariant, matchingVariant, selectedColor]);

  // Open WhatsApp Link Generator
  const handleWhatsAppOrder = (
    product: Product, 
    colorName?: string, 
    storageName?: string,
    simSpec?: string | null,
    condition?: string | null,
    outOfStock: boolean = false
  ) => {
    const phone = '971567451002';
    const colorString = colorName ? ` (Color: ${colorName})` : '';
    const storageString = storageName ? ` [${storageName}]` : ` [${product.storage}]`;
    const simSpecString = simSpec ? ` (${simSpec})` : '';
    const actualCondition = condition || product.condition;
    
    let message = '';
    if (outOfStock) {
      message = `Hello Win Win Wireless,
I am interested in checking availability for:
Device: ${product.name}${storageString}${simSpecString}
Condition: ${actualCondition}${colorString}
Is this currently available or when will it be back in stock?`;
    } else {
      message = `Hello Win Win Wireless,
I would like to order the ${product.name}${storageString}${simSpecString} - ${actualCondition}${colorString}.
Please send me today's best price.`;
    }
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+971567451002', '_self');
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left">
          <div>
            <span className="text-xs font-mono font-bold text-brand-gold tracking-widest bg-brand-gold/10 px-3 py-1 rounded-full uppercase">
              {featuredOnly ? 'Curated Collection' : 'Live Inventory'}
            </span>
            <h2 className={`font-display text-3xl md:text-5xl font-black tracking-tight mt-4 mb-2 ${
              darkMode ? 'text-white' : 'text-zinc-950'
            }`}>
              {featuredOnly ? 'Featured Premium iPhones' : 'Explore Certified Stock'}
            </h2>
            <p className={`text-sm md:text-base max-w-xl ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Select models below to view comprehensive gallery, detailed specs, wholesale access terms, and secure instant ordering.
            </p>
          </div>

          {featuredOnly && (
            <button
              id="see-all-products-btn"
              onClick={onSeeAllClick}
              className="flex items-center gap-2 text-brand-gold font-bold text-sm hover:text-amber-500 mt-4 md:mt-0 transition-colors duration-200 cursor-pointer"
            >
              <span>See All Products</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* 1. FILTER CONTROLS (Only visible on full products tab) */}
        {!featuredOnly && (
          <div className="mb-8 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Bar */}
              <div className="relative flex-grow">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                  id="product-search-input"
                  type="text"
                  placeholder="Search model, series, e.g. '17 Pro'..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-medium transition-all outline-none ${
                    darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold/50' 
                      : 'bg-white border-zinc-200 text-zinc-950 focus:border-brand-gold/50'
                  }`}
                />
              </div>

              {/* Filters Toggle Mobile */}
              <button
                id="toggle-filters-btn"
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                  showFilters 
                    ? 'bg-brand-gold text-zinc-950 border-brand-gold' 
                    : darkMode 
                      ? 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-850' 
                      : 'bg-white border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                }`}
              >
                <SlidersHorizontal className="h-4.5 w-4.5" />
                <span>Filters {showFilters ? 'Active' : ''}</span>
              </button>
            </div>

            {/* Filter Drawer / Panel */}
            <AnimatePresence>
              {(showFilters || window.innerWidth > 768) && (
                <motion.div
                  id="filters-drawer-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-hidden pt-2 pb-4 border-b border-zinc-800/20`}
                >
                  {/* Series Select */}
                  <div className="text-left">
                    <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Series Selection
                    </label>
                    <select
                      id="series-filter"
                      value={selectedSeries}
                      onChange={(e) => setSelectedSeries(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                        darkMode 
                          ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                          : 'bg-white border-zinc-200 text-zinc-950 focus:border-brand-gold'
                      }`}
                    >
                      {seriesOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  {/* Storage Select */}
                  <div className="text-left">
                    <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Storage Capacity
                    </label>
                    <select
                      id="storage-filter"
                      value={selectedStorage}
                      onChange={(e) => setSelectedStorage(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                        darkMode 
                          ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                          : 'bg-white border-zinc-200 text-zinc-950 focus:border-brand-gold'
                      }`}
                    >
                      {storageOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  {/* Condition Select */}
                  <div className="text-left">
                    <label className={`block text-xs font-mono font-bold uppercase tracking-wider mb-2 ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      Device Condition
                    </label>
                    <select
                      id="condition-filter"
                      value={selectedCondition}
                      onChange={(e) => setSelectedCondition(e.target.value)}
                      className={`w-full p-3 rounded-xl border text-xs font-semibold outline-none transition-colors ${
                        darkMode 
                          ? 'bg-zinc-900 border-zinc-800 text-white focus:border-brand-gold' 
                          : 'bg-white border-zinc-200 text-zinc-950 focus:border-brand-gold'
                      }`}
                    >
                      {conditionOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>

                  {/* Price Slider */}
                  <div className="text-left flex flex-col justify-end pb-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${darkMode ? 'text-zinc-500' : 'text-zinc-500'}`}>
                        Max Budget
                      </span>
                      <span className="text-xs font-bold text-brand-gold">
                        {formatAED(maxPrice)}
                      </span>
                    </div>
                    <input
                      id="price-range-slider"
                      type="range"
                      min="1500"
                      max="6000"
                      step="100"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                      className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* 2. INVENTORY GRID */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 px-4 border border-dashed border-zinc-800 rounded-3xl">
            <Layers className="h-10 w-10 text-zinc-600 mx-auto mb-4" />
            <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-660'}`}>
              No devices match your selected search filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSeries('All');
                setSelectedStorage('All');
                setSelectedCondition('All');
                setMaxPrice(6000);
              }}
              className="text-brand-gold font-bold text-xs mt-3 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              return (
                <motion.div
                  id={`product-card-${product.id}`}
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className={`group relative rounded-[20px] overflow-hidden flex flex-col justify-between ${
                    darkMode 
                      ? 'bg-zinc-950/40 border border-zinc-850 hover:bg-zinc-900/45 hover:border-brand-gold/35' 
                      : 'bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-brand-gold/30 shadow-xs hover:shadow-lg'
                  } transition-all duration-300`}
                >
                  <div>
                    {/* Tags Layer */}
                    <div className="absolute top-3 left-3 right-3 z-10 flex flex-wrap gap-1.5 justify-between">
                      {/* Condition badge */}
                      <span className={`text-[9px] font-bold font-mono tracking-wider uppercase px-2 py-0.5 rounded shadow-sm ${
                        product.condition === 'Brand New' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'
                      }`}>
                        {product.condition}
                      </span>

                      <div className="flex gap-1">
                        {product.wholesaleAvailable && (
                          <span className="text-[9px] font-bold font-mono tracking-wider bg-zinc-900 text-zinc-300 px-1.5 py-0.5 rounded border border-zinc-800">
                            B2B
                          </span>
                        )}
                        {product.indiaDelivery && (
                          <span className="text-[9px] font-bold font-mono tracking-wider bg-brand-gold/10 text-brand-gold px-1.5 py-0.5 rounded border border-brand-gold/25">
                            IN
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Image Box */}
                    <div 
                      onClick={() => openProductDetails(product)}
                      className="relative h-56 w-full bg-gradient-to-b from-zinc-900/5 to-zinc-950/5 dark:from-zinc-900/30 dark:to-zinc-950/40 border-b border-zinc-800/5 dark:border-zinc-850 overflow-hidden cursor-pointer flex items-center justify-center p-6"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Meta info */}
                    <div className="p-5 text-left">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className={`text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase`}>
                            {product.series}
                          </p>
                          <h3 className={`font-display text-lg font-bold tracking-tight mt-0.5 ${
                            darkMode ? 'text-white' : 'text-zinc-950'
                          }`}>
                            {product.name}
                          </h3>
                        </div>
                        <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                          darkMode ? 'bg-zinc-900 text-zinc-400' : 'bg-zinc-100 text-zinc-700'
                        }`}>
                          {product.storage}
                        </span>
                      </div>

                      {/* Specification summary list */}
                      <p className={`text-[11px] leading-relaxed mb-4 line-clamp-2 h-8 ${
                        darkMode ? 'text-zinc-400' : 'text-zinc-650'
                      }`}>
                        {product.specs.display} • {product.specs.chip}
                      </p>

                      {/* Pricing block */}
                      <div className="flex justify-between items-end pt-3 border-t border-zinc-800/10 dark:border-zinc-800/40">
                        <div>
                          <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                            Market Price
                          </p>
                          <p className="text-lg font-extrabold text-brand-gold mt-0.5">
                            {formatAED(product.priceAED)}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                            Indian Rupees
                          </p>
                          <p className={`text-sm font-bold font-mono ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}>
                            {formatINR(product.priceINR)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-5 pt-0 flex gap-2 w-full">
                    <button
                      onClick={() => openProductDetails(product)}
                      className={`flex-grow py-2.5 px-4 rounded-xl text-xs font-bold border transition-all ${
                        darkMode 
                          ? 'bg-zinc-900 border-zinc-850 hover:bg-zinc-850 text-white' 
                          : 'bg-zinc-100 border-zinc-200 hover:bg-zinc-200 text-zinc-900'
                      } cursor-pointer text-center`}
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleWhatsAppOrder(product)}
                      className="bg-brand-gold hover:bg-amber-500 text-zinc-950 p-2.5 rounded-xl transition-all shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/30 cursor-pointer"
                      title="Order on WhatsApp"
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>

      {/* 3. PRODUCT DETAIL OVERLAY MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              id="product-detail-modal"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`relative w-full max-w-4xl rounded-[24px] overflow-hidden border shadow-2xl z-10 flex flex-col md:flex-row h-full max-h-[85vh] md:h-auto md:max-h-[80vh] ${
                darkMode 
                  ? 'bg-zinc-950 border-zinc-800 text-white' 
                  : 'bg-white border-zinc-200 text-zinc-900'
              }`}
            >
              {/* Close Button */}
              <button
                id="close-modal-btn"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 border border-zinc-800/50 backdrop-blur-md cursor-pointer transition-colors"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              {/* Left Side: Images Gallery */}
              <div className={`md:w-1/2 p-6 flex flex-col justify-between bg-zinc-900/5 dark:bg-zinc-900/20 border-b md:border-b-0 md:border-r ${darkMode ? 'border-zinc-850' : 'border-zinc-150'}`}>
                
                {/* Active Image Render */}
                <div className="flex-grow flex items-center justify-center min-h-[220px] max-h-[280px] p-6">
                  <img
                    src={selectedProduct.images[activeImageIndex]}
                    alt={selectedProduct.name}
                    className="max-h-full max-w-full object-contain hover:scale-[1.02] transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Thumbnails list */}
                <div className="flex gap-2.5 justify-center mt-4">
                  {selectedProduct.images.map((img, idx) => {
                    const isActive = activeImageIndex === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveImageIndex(idx);
                          if (selectedProduct.colors) {
                            const matchingColor = selectedProduct.colors.find(c => c.imageIndex === idx);
                            if (matchingColor) {
                              setSelectedColor(matchingColor);
                            }
                          }
                        }}
                        className={`h-14 w-14 rounded-lg overflow-hidden border p-1 transition-all ${
                          isActive 
                            ? 'border-brand-gold bg-brand-gold/5 ring-2 ring-brand-gold/30' 
                            : 'border-zinc-800 bg-zinc-900/25 hover:border-zinc-700'
                        }`}
                      >
                        <img src={img} alt="" className="h-full w-full object-contain" referrerPolicy="no-referrer" />
                      </button>
                    );
                  })}
                </div>

                {/* Trust footer summary inside gallery */}
                <div className="hidden md:flex items-center gap-3 justify-center text-[10px] font-mono text-zinc-500 uppercase mt-6 pt-4 border-t border-zinc-800/10 dark:border-zinc-800/40">
                  <span className="flex items-center gap-1"><ShieldCheck className="h-3 w-3 text-emerald-500" /> shop warranty</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Truck className="h-3 w-3 text-brand-gold" /> insured delivery</span>
                </div>
              </div>

              {/* Right Side: Specifications & Actions */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto custom-scrollbar text-left">
                
                {/* Content Block */}
                <div>
                  {/* Badges block */}
                  <div className="flex flex-wrap gap-2 items-center mb-3">
                    <span className={`text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded ${
                      isOutOfStock 
                        ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                        : selectedDetailCondition === 'Brand New' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                          : 'bg-brand-gold/10 text-brand-gold border border-brand-gold/20'
                    }`}>
                      {isOutOfStock ? 'Not Available Now' : (selectedDetailCondition || selectedProduct.condition)}
                    </span>
                    <span className="text-[10px] font-bold font-mono tracking-wider bg-zinc-900 text-zinc-300 px-2 py-1 rounded border border-zinc-800 uppercase">
                      Storage: {selectedStorageSize || selectedProduct.storage}
                    </span>
                    {selectedSimSpec && (
                      <span className="text-[10px] font-bold font-mono tracking-wider bg-zinc-900 text-zinc-300 px-2 py-1 rounded border border-zinc-800 uppercase">
                        Spec: {selectedSimSpec}
                      </span>
                    )}
                  </div>

                  {/* Title & Series */}
                  <h3 className="font-display text-2xl md:text-3xl font-black tracking-tight leading-none">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest mt-1.5 mb-5">
                    {selectedProduct.series}
                  </p>

                  {/* Color Selector */}
                  {selectedProduct.colors && selectedProduct.colors.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Select Color (Price varies by color)
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.colors.map((color) => {
                          const isSelected = selectedColor?.name === color.name;
                          return (
                            <button
                              key={color.name}
                              onClick={() => {
                                setSelectedColor(color);
                                // Set image index to the color's specific index
                                setActiveImageIndex(color.imageIndex);
                              }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold cursor-pointer transition-all ${
                                isSelected 
                                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold ring-2 ring-brand-gold/20' 
                                  : darkMode 
                                    ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700' 
                                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300'
                              }`}
                            >
                              <span 
                                className="h-3.5 w-3.5 rounded-full border border-black/10 shadow-sm" 
                                style={{ backgroundColor: color.value }}
                              />
                              <span>{color.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Storage Size Selector */}
                  {availableStorages.length > 1 && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Select Storage Capacity
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {availableStorages.map((size) => {
                          const isSelected = selectedStorageSize === size;
                          return (
                            <button
                              key={size}
                              onClick={() => {
                                setSelectedStorageSize(size);
                              }}
                              className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                                isSelected 
                                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold ring-2 ring-brand-gold/20' 
                                  : darkMode 
                                    ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700' 
                                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300'
                              }`}
                            >
                              {size}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* SIM Specification Selector */}
                  {availableSimSpecs.length > 0 && (
                    <div className="mb-5">
                      <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Select SIM Specification
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {availableSimSpecs.map((spec) => {
                          const isSelected = selectedSimSpec === spec;
                          return (
                            <button
                              key={spec}
                              onClick={() => setSelectedSimSpec(spec)}
                              className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                                isSelected 
                                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold ring-2 ring-brand-gold/20' 
                                  : darkMode 
                                    ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700' 
                                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300'
                              }`}
                            >
                              {spec}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Device Condition Selector */}
                  {availableConditions.length > 1 && (
                    <div className="mb-6">
                      <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider mb-2">
                        Select Device Condition
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {availableConditions.map((cond) => {
                          const isSelected = selectedDetailCondition === cond;
                          return (
                            <button
                              key={cond}
                              onClick={() => setSelectedDetailCondition(cond)}
                              className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                                isSelected 
                                  ? 'border-brand-gold bg-brand-gold/10 text-brand-gold ring-2 ring-brand-gold/20' 
                                  : darkMode 
                                    ? 'border-zinc-800 bg-zinc-900/40 text-zinc-300 hover:border-zinc-700' 
                                    : 'border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300'
                              }`}
                            >
                              {cond}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Technical Specifications Grid */}
                  <div className="space-y-3.5 mb-8">
                    <h4 className="text-[11px] font-mono font-bold text-zinc-500 uppercase tracking-wider border-b border-zinc-800/20 pb-1">
                      Technical Specifications
                    </h4>
                    
                    <div className="grid grid-cols-12 text-xs gap-y-1.5 hover:bg-zinc-900/10 py-1 px-1 rounded transition-colors">
                      <span className="col-span-4 text-zinc-500 font-medium">Display:</span>
                      <span className={`col-span-8 font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{selectedProduct.specs.display}</span>
                    </div>
                    <div className="grid grid-cols-12 text-xs gap-y-1.5 hover:bg-zinc-900/10 py-1 px-1 rounded transition-colors">
                      <span className="col-span-4 text-zinc-500 font-medium">Core Chip:</span>
                      <span className={`col-span-8 font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{selectedProduct.specs.chip}</span>
                    </div>
                    <div className="grid grid-cols-12 text-xs gap-y-1.5 hover:bg-zinc-900/10 py-1 px-1 rounded transition-colors">
                      <span className="col-span-4 text-zinc-500 font-medium">Camera:</span>
                      <span className={`col-span-8 font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{selectedProduct.specs.camera}</span>
                    </div>
                    <div className="grid grid-cols-12 text-xs gap-y-1.5 hover:bg-zinc-900/10 py-1 px-1 rounded transition-colors">
                      <span className="col-span-4 text-zinc-500 font-medium">Battery:</span>
                      <span className={`col-span-8 font-semibold ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>{selectedProduct.specs.battery}</span>
                    </div>
                  </div>

                  {/* Pricing Matrix */}
                  {(() => {
                    const displayPriceAED = exactVariant 
                      ? exactVariant.priceAED 
                      : (selectedColor && selectedColor.priceAED ? selectedColor.priceAED : selectedProduct.priceAED);

                    const displayPriceINR = exactVariant 
                      ? exactVariant.priceINR 
                      : (selectedColor && selectedColor.priceINR ? selectedColor.priceINR : selectedProduct.priceINR);

                    const displayWholesalePriceAED = exactVariant 
                      ? exactVariant.wholesalePriceAED 
                      : (selectedColor && selectedColor.wholesalePriceAED ? selectedColor.wholesalePriceAED : selectedProduct.wholesalePriceAED);

                    if (isOutOfStock) {
                      return (
                        <div className={`p-4 rounded-2xl border mb-6 text-center ${
                          darkMode ? 'bg-red-500/10 border-red-500/20' : 'bg-red-50 border-red-200'
                        }`}>
                          <p className="text-xs font-mono font-bold text-red-500 uppercase tracking-wider mb-1">
                            Current Stock Status
                          </p>
                          <p className={`text-lg font-extrabold ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                            Not Available Now
                          </p>
                          <p className="text-xs text-zinc-400 mt-1">
                            We restock daily! Tap the button below to ask our team for live updates or reserve this spec.
                          </p>
                        </div>
                      );
                    }

                    return (
                      <div className={`p-4 rounded-2xl border mb-6 ${
                        darkMode ? 'bg-zinc-900/40 border-zinc-850' : 'bg-zinc-50 border-zinc-200'
                      }`}>
                        <div className="grid grid-cols-2 gap-4 divide-x divide-zinc-800/20">
                          <div>
                            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                              Dubai Price
                            </p>
                            <p className="text-xl font-black text-brand-gold mt-0.5">
                              {formatAED(displayPriceAED)}
                            </p>
                            <p className="text-[9px] text-zinc-400 font-mono mt-0.5">Cash / Transfer</p>
                          </div>
                          <div className="pl-4">
                            <p className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                              Indian Price
                            </p>
                            <p className={`text-xl font-black font-mono mt-0.5 ${darkMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                              {formatINR(displayPriceINR)}
                            </p>
                            <p className="text-[9px] text-zinc-400 font-mono mt-0.5">Insured door delivery</p>
                          </div>
                        </div>

                        {/* Wholesale pricing note if B2B is active */}
                        {displayWholesalePriceAED && (
                          <div className="mt-3 pt-3 border-t border-zinc-800/10 dark:border-zinc-800/40 flex justify-between items-center text-xs">
                            <span className="flex items-center gap-1 text-zinc-400 font-medium">
                              <BadgePercent className="h-3.5 w-3.5 text-brand-gold" /> Wholesale Price (AED)
                            </span>
                            <span className="font-bold text-emerald-400">
                              {formatAED(displayWholesalePriceAED)} <span className="text-[9px] text-zinc-500">(Min. 5 units)</span>
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>

                {/* Sticky CTA Order Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800/10 dark:border-zinc-800/40">
                  <button
                    onClick={() => handleWhatsAppOrder(selectedProduct, selectedColor?.name, selectedStorageSize || selectedProduct.storage, selectedSimSpec, selectedDetailCondition, isOutOfStock)}
                    className={`flex-grow flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold transition-all duration-200 cursor-pointer text-center ${
                      isOutOfStock 
                        ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700' 
                        : 'bg-brand-gold hover:bg-amber-500 text-zinc-950'
                    }`}
                  >
                    <Send className="h-4.5 w-4.5" />
                    <span>{isOutOfStock ? 'Inquire Stock on WhatsApp' : 'Order on WhatsApp'}</span>
                  </button>
                  <button
                    onClick={handleCall}
                    className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold border transition-all ${
                      darkMode 
                        ? 'bg-zinc-900 border-zinc-850 text-white hover:bg-zinc-850' 
                        : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50'
                    } cursor-pointer text-center`}
                  >
                    <Phone className="h-4.5 w-4.5 text-brand-gold" />
                    <span>Call Live Support</span>
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
