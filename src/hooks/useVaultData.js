import { useState, useEffect } from 'react';
import { vaultAPI } from '../api/api';
//quan ly vault, goi api,xu lý tim kiem, loc ds
export function useVaultData() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fetchItems = async () => {
    try {
      const res = await vaultAPI.getAll();
      setItems(res.data);
    } catch (error) {
      console.error("Error fetching items", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const categories = [...new Set(items.map(i => i.category).filter(Boolean))];//htdm

  const filteredItems = items.filter(item => {
    const matchesSearch = item.websiteName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (item.username && item.username.toLowerCase().includes(searchTerm.toLowerCase()));
    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'Favorites') return matchesSearch && item.favorite;
    return matchesSearch && item.category === selectedCategory;
  });

  return {
    items,
    fetchItems,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    categories,
    filteredItems
  };
}
