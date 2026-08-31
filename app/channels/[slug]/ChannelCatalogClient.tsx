'use client';

import { useState, useMemo } from 'react';
import { ChannelCategory } from '@/lib/channels';
import { 
  Search, 
  Tv, 
  Wifi, 
  CheckCircle2, 
  PlayCircle, 
  Clock, 
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal
} from 'lucide-react';

const ITEMS_PER_PAGE = 18;

export default function ChannelCatalogClient({ category }: { category?: ChannelCategory }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuality, setSelectedQuality] = useState<string>('ALL');
  const [selectedGenre, setSelectedGenre] = useState<string>('ALL');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Safe fallback to prevent undefined errors
  const safeChannels = useMemo(() => category?.channels || [], [category]);

  // Extract unique genres for tag pills safely
  const uniqueGenres = useMemo(() => {
    if (!safeChannels.length) return ['ALL'];
    const genres = safeChannels.map((ch) => ch.genre?.split('/')[0]?.trim() || 'General');
    return ['ALL', ...Array.from(new Set(genres))];
  }, [safeChannels]);

  // Real-time filtering with safe accessors
  const filteredChannels = useMemo(() => {
    return safeChannels.filter((ch) => {
      const nameMatch = ch.name?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false;
      const genreMatch = ch.genre?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false;
      const progMatch = ch.currentProgram?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false;
      const langMatch = ch.language?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false;

      const matchesSearch = !searchQuery || nameMatch || genreMatch || progMatch || langMatch;
      const matchesQuality = selectedQuality === 'ALL' || ch.quality === selectedQuality;
      const matchesGenre = selectedGenre === 'ALL' || (ch.genre && ch.genre.toLowerCase().includes(selectedGenre.toLowerCase()));

      return matchesSearch && matchesQuality && matchesGenre;
    });
  }, [safeChannels, searchQuery, selectedQuality, selectedGenre]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredChannels.length / ITEMS_PER_PAGE) || 1;
  const paginatedChannels = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredChannels.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredChannels, currentPage]);

  const handleQualityChange = (quality: string) => {
    setSelectedQuality(quality);
    setCurrentPage(1);
  };

  const handleGenreChange = (genre: string) => {
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  if (!category) {
    return null;
  }

  return (
    <div className="w-full">
      {/* Search & Filter Controls */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 md:p-6 mb-8 shadow-2xl backdrop-blur-xl">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-5">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              type="text"
              placeholder={`Search across ${safeChannels.length} ${category.name || 'available'} channels (e.g. 4K, Sky, ESPN, HBO)...`}
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-12 py-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl text-white text-sm placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-white"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Quality Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {['ALL', '4K UHD', 'FHD 60FPS', 'HD'].map((quality) => (
              <button
                key={quality}
                onClick={() => handleQualityChange(quality)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedQuality === quality
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 border border-blue-400/40'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {quality}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Header Results Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 px-1">
        <p className="text-sm font-semibold text-slate-400">
          Showing <span className="text-white font-bold">{paginatedChannels.length}</span> of <span className="text-white font-bold">{filteredChannels.length}</span> channels (Total in Catalog: {safeChannels.length})
        </p>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl w-fit">
          <CheckCircle2 className="w-4 h-4" /> 100% Anti-Freeze 9.0 Streams
        </div>
      </div>

      {/* Channel Cards Grid */}
      {paginatedChannels.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginatedChannels.map((channel) => (
              <div
                key={channel.id}
                className="group relative bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_0_35px_rgba(37,99,235,0.18)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Row: Icon & Badges */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-sky-400 group-hover:bg-blue-600/20 transition-all shrink-0">
                      <PlayCircle className="w-6 h-6" />
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-black tracking-wider uppercase border ${
                        channel.quality === '4K UHD'
                          ? 'bg-blue-500/20 border-blue-400/40 text-sky-300'
                          : channel.quality === 'FHD 60FPS'
                          ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                          : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}>
                        {channel.quality}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold">{channel.bitrate}</span>
                    </div>
                  </div>

                  {/* Channel Name */}
                  <h3 className="text-base font-black text-white group-hover:text-sky-300 transition-colors duration-200 mb-1 leading-snug line-clamp-1">
                    {channel.name}
                  </h3>
                  
                  {/* Channel Category / Genre */}
                  <p className="text-xs font-semibold text-slate-400 mb-4 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    <span className="truncate">{channel.genre}</span>
                  </p>

                  {/* Live EPG Program Box */}
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-3 mb-4">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-sky-400 uppercase tracking-wider mb-0.5">
                      <Clock className="w-3 h-3 shrink-0" /> Now Playing:
                    </div>
                    <p className="text-xs text-slate-300 font-medium truncate">
                      {channel.currentProgram || 'Live 24/7 Broadcast'}
                    </p>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-semibold text-slate-300">Active Node</span>
                  </span>

                  <div className="flex items-center gap-2">
                    {channel.epg && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-bold text-slate-300 uppercase">
                        EPG
                      </span>
                    )}
                    <span className="text-[11px] text-slate-400 font-medium">{channel.language}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12 pt-6 border-t border-slate-800">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold transition-all ${
                      currentPage === page
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 border border-blue-400/40'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </>
      ) : (
        /* Empty State */
        <div className="text-center py-20 bg-slate-900/40 border border-slate-800 rounded-3xl p-8">
          <Tv className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-white mb-2">No channels match your query</h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-6">
            Try searching another channel name or reset your selected quality and genre filters.
          </p>
          <button
            onClick={() => {
              handleSearchChange('');
              handleQualityChange('ALL');
              handleGenreChange('ALL');
            }}
            className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-500 transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}