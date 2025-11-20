import React, { useEffect, useState, useMemo, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ProfileCard from './components/ProfileCard'
import ProfileModal from './components/ProfileModal'
import SearchBar from './components/SearchBar'
import profilesData from './data/profiles.json'

const ITEMS_PER_PAGE = 12

export default function App() {
  const [profiles, setProfiles] = useState([])
  const [query, setQuery] = useState('')
  const [filterArea, setFilterArea] = useState('')
  const [filterCity, setFilterCity] = useState('')
  const [filterTech, setFilterTech] = useState('')
  const [selected, setSelected] = useState(null)
  const [dark, setDark] = useState(false)
  const [favorites, setFavorites] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [showExplore, setShowExplore] = useState(false)
  const searchRef = useRef(null)

  // Initialize
  useEffect(() => {
    setProfiles(profilesData)
    const savedTheme = localStorage.getItem('theme')
    const savedFavorites = localStorage.getItem('favorites')
    if (savedTheme === 'dark') setDark(true)
    if (savedFavorites) setFavorites(JSON.parse(savedFavorites))
  }, [])

  // Persist theme
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  // Persist favorites
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])
 // Filter profiles
  const filtered = useMemo(() => {
    return profiles.filter(p => {
      const matchesQuery = (
        p.nome + ' ' +
        p.cargo + ' ' +
        p.habilidadesTecnicas.join(' ')
      ).toLowerCase().includes(query.toLowerCase())

      const matchesArea = filterArea ? p.area === filterArea : true
      const matchesCity = filterCity ? p.localizacao === filterCity : true
      const matchesTech = filterTech ? p.habilidadesTecnicas.includes(filterTech) : true

      return matchesQuery && matchesArea && matchesCity && matchesTech
    })
  }, [profiles, query, filterArea, filterCity, filterTech])

  // Pagination
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginatedProfiles = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filtered.slice(start, start + ITEMS_PER_PAGE)
  }, [filtered, currentPage])

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [query, filterArea, filterCity, filterTech])

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }
