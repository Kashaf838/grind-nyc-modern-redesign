/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Page, MenuItem } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { ItemModal } from './components/ItemModal';
import { OrderRedirectModal } from './components/OrderRedirectModal';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { StoryPage } from './pages/StoryPage';
import { OrderPage } from './pages/OrderPage';
import { VisitPage } from './pages/VisitPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOrderWithItem = (item?: MenuItem) => {
    if (item) {
      setSelectedItem(item);
    }
    setOrderModalOpen(true);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--text-primary)] font-sans theme-transition antialiased selection:bg-[#E64A19] selection:text-white">
        {/* Sticky 3-Zone Header */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenOrderModal={() => handleOpenOrderWithItem()}
        />

        {/* Main Content Router */}
        <main className="flex-1 pb-16 md:pb-0">
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectItem={(item) => setSelectedItem(item)}
              onOpenOrderModal={() => handleOpenOrderWithItem()}
            />
          )}

          {currentPage === 'menu' && (
            <MenuPage
              onSelectItem={(item) => setSelectedItem(item)}
              onOpenOrderModal={() => handleOpenOrderWithItem()}
            />
          )}

          {currentPage === 'story' && (
            <StoryPage
              onNavigate={handleNavigate}
              onOpenOrderModal={() => handleOpenOrderWithItem()}
            />
          )}

          {currentPage === 'order' && (
            <OrderPage
              onOpenOrderModal={() => handleOpenOrderWithItem()}
            />
          )}

          {currentPage === 'visit' && (
            <VisitPage
              onOpenOrderModal={() => handleOpenOrderWithItem()}
            />
          )}
        </main>

        {/* Global Item Detail Modal */}
        <ItemModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onOrderNow={(item) => handleOpenOrderWithItem(item)}
        />

        {/* Global Transparent Order Platform Selector Modal */}
        <OrderRedirectModal
          isOpen={orderModalOpen}
          onClose={() => setOrderModalOpen(false)}
          selectedItem={selectedItem}
        />

        {/* Mobile Sticky Action Bar */}
        <MobileBottomBar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenOrderModal={() => handleOpenOrderWithItem()}
        />

        {/* Editorial Footer */}
        <Footer
          onNavigate={handleNavigate}
          onOpenOrderModal={() => handleOpenOrderWithItem()}
        />
      </div>
    </ThemeProvider>
  );
}
