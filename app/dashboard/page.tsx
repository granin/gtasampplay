"use client"

import { useState } from "react"
import { ShoppingCart, Dice1Icon as Dice, Settings, History, LogOut, User } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("account")
  const [assetTab, setAssetTab] = useState("homes")
  const [shopTab, setShopTab] = useState("roulette")
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [diceValues, setDiceValues] = useState([5, 3])
  const [betAmount, setBetAmount] = useState(1000)
  const [cashoutAmount, setCashoutAmount] = useState(0)

  const spinRoulette = () => {
    // Simulate roulette spinning
    alert("Рулетка запущена!")
  }

  const playDice = () => {
    // Simulate dice game
    const newDice = [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1]
    setDiceValues(newDice)
    setCashoutAmount((betAmount * (newDice[0] + newDice[1])) / 6)
  }

  const cashout = () => {
    if (cashoutAmount > 0) {
      alert(`Выведено ${cashoutAmount} EXP`)
      setCashoutAmount(0)
    }
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/70 z-50 px-4 md:px-12 py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="logo text-2xl font-bold text-orange-600 uppercase">GTA SAMP Play</div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <Link href="/" className="uppercase font-medium hover:text-orange-600 transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="#" className="uppercase font-medium hover:text-orange-600 transition-colors">
                  Скачать
                </Link>
              </li>
              <li>
                <Link href="#" className="uppercase font-medium hover:text-orange-600 transition-colors">
                  Магазин
                </Link>
              </li>
              <li>
                <Link href="#" className="uppercase font-medium hover:text-orange-600 transition-colors">
                  Форум
                </Link>
              </li>
              <li>
                <Link href="#" className="uppercase font-medium text-orange-600">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="bg-orange-600 text-white p-3 rounded-full shadow-lg"
        >
          {isMobileSidebarOpen ? <LogOut size={24} /> : <User size={24} />}
        </button>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-black/95 z-40 transform transition-transform duration-300 ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="h-full overflow-y-auto pt-20 pb-4 px-4">
          <div className="player-info text-center mb-8">
            <div className="avatar-container relative w-24 h-24 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-orange-600/20 border-3 border-orange-600 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Аватар игрока"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="status-indicator absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#1A1A1A]"></div>
            </div>
            <h2 className="text-xl font-bold">NikolayGamer</h2>
            <p className="text-white/70 text-sm">ID: 15483</p>
          </div>

          <ul className="space-y-1">
            <li>
              <button
                onClick={() => {
                  setActiveTab("account")
                  setIsMobileSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${activeTab === "account" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <User size={20} />
                <span>Об аккаунте</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab("shop")
                  setIsMobileSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${activeTab === "shop" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <ShoppingCart size={20} />
                <span>Магазин</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab("roulette")
                  setIsMobileSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${activeTab === "roulette" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <Dice size={20} />
                <span>Игровая рулетка</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab("settings")
                  setIsMobileSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${activeTab === "settings" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <Settings size={20} />
                <span>Настройки</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab("history")
                  setIsMobileSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${activeTab === "history" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <History size={20} />
                <span>История транзакций</span>
              </button>
            </li>
            <li className="pt-4 mt-4 border-t border-white/10">
              <Link
                href="/"
                className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-red-500 hover:bg-white/5 transition-colors"
              >
                <LogOut size={20} />
                <span>Выйти</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Account Container */}
      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] min-h-screen pt-20">
        {/* Sidebar - Desktop */}
        <div className="hidden md:block bg-black/50 border-r border-white/10 py-8">
          <div className="player-info text-center mb-8 px-4">
            <div className="avatar-container relative w-24 h-24 mx-auto mb-4">
              <div className="w-full h-full rounded-full bg-orange-600/20 border-3 border-orange-600 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=120&width=120"
                  alt="Аватар игрока"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="status-indicator absolute bottom-1 right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#1A1A1A]"></div>
            </div>
            <h2 className="text-xl font-bold">NikolayGamer</h2>
            <p className="text-white/70 text-sm">ID: 15483</p>
          </div>

          <ul className="sidebar-nav">
            <li>
              <button
                onClick={() => setActiveTab("account")}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${activeTab === "account" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <User size={20} />
                <span>Об аккаунте</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("shop")}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${activeTab === "shop" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <ShoppingCart size={20} />
                <span>Магазин</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("roulette")}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${activeTab === "roulette" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <Dice size={20} />
                <span>Игровая рулетка</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${activeTab === "settings" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <Settings size={20} />
                <span>Настройки</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("history")}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${activeTab === "history" ? "bg-orange-600/20 border-l-2 border-orange-600" : "hover:bg-white/5"}`}
              >
                <History size={20} />
                <span>История транзакций</span>
              </button>
            </li>
            <li className="mt-8">
              <Link
                href="/"
                className="w-full flex items-center gap-3 px-6 py-3 text-red-500 hover:bg-white/5 transition-colors"
              >
                <LogOut size={20} />
                <span>Выйти</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="p-6 md:p-8">
          {/* Account Tab */}
          {activeTab === "account" && (
            <div>
              <h1 className="text-2xl font-bold mb-8 pb-2 text-orange-600 border-b-2 border-orange-600">Об аккаунте</h1>

              {/* Stats Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10">
                  <h3 className="text-white/70 text-sm mb-2">Деньги</h3>
                  <div className="text-2xl font-bold text-orange-600">$2,458,920</div>
                </div>
                <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10">
                  <h3 className="text-white/70 text-sm mb-2">Часы игры</h3>
                  <div className="text-2xl font-bold text-orange-600">352 ч.</div>
                </div>
                <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10">
                  <h3 className="text-white/70 text-sm mb-2">Уровень</h3>
                  <div className="text-2xl font-bold text-orange-600">38</div>
                </div>
                <div className="bg-white/5 rounded-lg p-5 border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10">
                  <h3 className="text-white/70 text-sm mb-2">Репутация</h3>
                  <div className="text-2xl font-bold text-orange-600">+245</div>
                </div>
              </div>

              {/* Assets Section */}
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-6 pb-2 text-orange-600 border-b-2 border-orange-600">Мои активы</h2>

                <div className="flex border-b border-white/10 mb-6 overflow-x-auto">
                  <button
                    onClick={() => setAssetTab("homes")}
                    className={`px-4 py-2 whitespace-nowrap ${assetTab === "homes" ? "text-orange-600 border-b-2 border-orange-600" : "text-white"}`}
                  >
                    Дома (3)
                  </button>
                  <button
                    onClick={() => setAssetTab("cars")}
                    className={`px-4 py-2 whitespace-nowrap ${assetTab === "cars" ? "text-orange-600 border-b-2 border-orange-600" : "text-white"}`}
                  >
                    Машины (5)
                  </button>
                  <button
                    onClick={() => setAssetTab("businesses")}
                    className={`px-4 py-2 whitespace-nowrap ${assetTab === "businesses" ? "text-orange-600 border-b-2 border-orange-600" : "text-white"}`}
                  >
                    Бизнесы (1)
                  </button>
                  <button
                    onClick={() => setAssetTab("organizations")}
                    className={`px-4 py-2 whitespace-nowrap ${assetTab === "organizations" ? "text-orange-600 border-b-2 border-orange-600" : "text-white"}`}
                  >
                    Организации (1)
                  </button>
                </div>

                {assetTab === "homes" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: 1, name: "Дом #1", address: "ул. Грув, 25", price: "$450,000" },
                      { id: 2, name: "Дом #2", address: "пр. Центральный, 14", price: "$780,000" },
                      { id: 3, name: "Дом #3", address: "ул. Винвуд, 8", price: "$320,000" },
                    ].map((home) => (
                      <div
                        key={home.id}
                        className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10"
                      >
                        <div className="h-36 bg-white/10 flex items-center justify-center">
                          <i className="fas fa-home text-4xl text-orange-600"></i>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2">{home.name}</h3>
                          <p className="text-white/70 text-sm">Адрес: {home.address}</p>
                          <p className="text-white/70 text-sm">Стоимость: {home.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {assetTab === "cars" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { id: 1, name: "Infernus", location: "Гараж #1", price: "$350,000" },
                      { id: 2, name: "Sultan RS", location: "Гараж #2", price: "$280,000" },
                      { id: 3, name: "Banshee", location: "Гараж #1", price: "$220,000" },
                      { id: 4, name: "Turismo", location: "Гараж #3", price: "$330,000" },
                      { id: 5, name: "Comet", location: "Гараж #2", price: "$250,000" },
                    ].map((car) => (
                      <div
                        key={car.id}
                        className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10"
                      >
                        <div className="h-36 bg-white/10 flex items-center justify-center">
                          <i className="fas fa-car text-4xl text-orange-600"></i>
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2">{car.name}</h3>
                          <p className="text-white/70 text-sm">Локация: {car.location}</p>
                          <p className="text-white/70 text-sm">Стоимость: {car.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {assetTab === "businesses" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10">
                      <div className="h-36 bg-white/10 flex items-center justify-center">
                        <i className="fas fa-building text-4xl text-orange-600"></i>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Автосалон</h3>
                        <p className="text-white/70 text-sm">Адрес: пр. Винвуд, 12</p>
                        <p className="text-white/70 text-sm">Доход: $12,000/день</p>
                        <p className="text-white/70 text-sm">Стоимость: $1,200,000</p>
                      </div>
                    </div>
                  </div>
                )}

                {assetTab === "organizations" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:-translate-y-1 transition-transform hover:shadow-lg hover:shadow-orange-600/10">
                      <div className="h-36 bg-white/10 flex items-center justify-center">
                        <i className="fas fa-users text-4xl text-orange-600"></i>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">Мафия "Черный Дракон"</h3>
                        <p className="text-white/70 text-sm">Участников: 12</p>
                        <p className="text-white/70 text-sm">Ранг: Босс</p>
                        <p className="text-white/70 text-sm">Территорий: 3</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Balance Section */}
              <div className="mb-10">
                <h2 className="text-xl font-bold mb-6 pb-2 text-orange-600 border-b-2 border-orange-600">
                  Баланс магазина
                </h2>

                <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-xl p-6 max-w-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=300&width=500')] bg-center bg-cover opacity-10"></div>
                  <h3 className="text-lg mb-3 relative">Ваш баланс</h3>
                  <div className="text-3xl font-bold mb-5 relative">3,540 EXP</div>
                  <div className="flex gap-4 relative">
                    <button className="bg-[#1A1A1A] text-white px-5 py-2 rounded-full font-bold hover:bg-black transition-colors">
                      Пополнить
                    </button>
                    <button className="bg-white/20 text-white px-5 py-2 rounded-full font-bold hover:bg-white/30 transition-colors">
                      Конвертировать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Shop Tab */}
          {activeTab === "shop" && (
            <div>
              <h1 className="text-2xl font-bold mb-8 pb-2 text-orange-600 border-b-2 border-orange-600">Магазин</h1>

              <div className="flex gap-5 mb-8">
                <button
                  onClick={() => setShopTab("roulette")}
                  className={`px-5 py-2 rounded-full ${shopTab === "roulette" ? "bg-orange-600" : "bg-white/5 border border-white/10 hover:bg-white/10"}`}
                >
                  Рулетка
                </button>
                <button
                  onClick={() => setShopTab("inventory")}
                  className={`px-5 py-2 rounded-full ${shopTab === "inventory" ? "bg-orange-600" : "bg-white/5 border border-white/10 hover:bg-white/10"}`}
                >
                  Инвентарь
                </button>
              </div>

              {shopTab === "roulette" && (
                <div className="bg-white/5 rounded-xl p-8 border border-white/10 max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-5">Испытайте удачу</h3>

                  <div className="flex overflow-x-auto py-5 mb-6 gap-4 justify-center">
                    {[
                      { icon: "fa-home", rare: false },
                      { icon: "fa-car", rare: false },
                      { icon: "fa-coins", rare: true },
                      { icon: "fa-building", rare: false },
                      { icon: "fa-money-bill-wave", rare: false },
                      { icon: "fa-car-side", rare: true },
                      { icon: "fa-gem", rare: false },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-24 h-24 bg-white/10 rounded-lg flex items-center justify-center ${item.rare ? "border-2 border-yellow-400" : ""}`}
                      >
                        <i className={`fas ${item.icon} text-3xl text-orange-600`}></i>
                      </div>
                    ))}
                  </div>

                  <div className="text-lg mb-5">1 прокрут: 490 EXP</div>

                  <button
                    onClick={spinRoulette}
                    className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors transform hover:-translate-y-1 shadow-lg shadow-orange-600/30"
                  >
                    Крутить рулетку
                  </button>
                </div>
              )}

              {shopTab === "inventory" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 text-center hover:-translate-y-1 transition-transform">
                    <div className="text-3xl text-orange-600 mb-4">
                      <i className="fas fa-car"></i>
                    </div>
                    <div className="text-lg font-bold mb-1">Infernus</div>
                    <div className="text-white/70 text-sm mb-4">Транспорт</div>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-500 transition-colors">
                      Продать за 2,500 EXP
                    </button>
                  </div>

                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 text-center hover:-translate-y-1 transition-transform">
                    <div className="text-3xl text-orange-600 mb-4">
                      <i className="fas fa-home"></i>
                    </div>
                    <div className="text-lg font-bold mb-1">Дом в Вайнвуде</div>
                    <div className="text-white/70 text-sm mb-4">Недвижимость</div>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-500 transition-colors">
                      Продать за 3,200 EXP
                    </button>
                  </div>

                  <div className="bg-white/5 rounded-lg p-5 border border-white/10 text-center hover:-translate-y-1 transition-transform">
                    <div className="text-3xl text-orange-600 mb-4">
                      <i className="fas fa-tshirt"></i>
                    </div>
                    <div className="text-lg font-bold mb-1">VIP Скин</div>
                    <div className="text-white/70 text-sm mb-4">Персонаж</div>
                    <button className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-500 transition-colors">
                      Продать за 800 EXP
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Game Roulette Tab */}
          {activeTab === "roulette" && (
            <div>
              <h1 className="text-2xl font-bold mb-8 pb-2 text-orange-600 border-b-2 border-orange-600">
                Игровая рулетка
              </h1>

              <div className="bg-white/5 rounded-xl p-8 border border-white/10 max-w-3xl">
                <h3 className="text-2xl font-bold mb-4">Dice Game</h3>
                <p className="text-white/80 mb-8">
                  Сделайте ставку и выиграйте. Играйте против других игроков, получайте реальные деньги!
                </p>

                <div className="flex justify-center gap-6 mb-8">
                  {diceValues.map((value, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 bg-orange-600 rounded-lg flex items-center justify-center text-2xl font-bold shadow-lg"
                    >
                      {value}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                  <div className="flex items-center bg-white/5 rounded-md px-4 py-2">
                    <label className="font-bold mr-3">Ставка:</label>
                    <input
                      type="number"
                      value={betAmount}
                      onChange={(e) => setBetAmount(Number(e.target.value))}
                      min="100"
                      className="bg-transparent border-none w-24 text-white"
                    />
                  </div>

                  <button
                    onClick={playDice}
                    className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-500 transition-colors transform hover:-translate-y-1 shadow-lg shadow-orange-600/30"
                  >
                    Играть
                  </button>
                </div>

                <button
                  onClick={cashout}
                  className={`w-full bg-green-600 text-white px-8 py-3 rounded-full font-bold hover:bg-green-500 transition-colors transform hover:-translate-y-1 shadow-lg shadow-green-600/30 ${cashoutAmount === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                  disabled={cashoutAmount === 0}
                >
                  Вывести выигрыш ({cashoutAmount} EXP)
                </button>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div>
              <h1 className="text-2xl font-bold mb-8 pb-2 text-orange-600 border-b-2 border-orange-600">
                Настройки аккаунта
              </h1>

              <div className="max-w-2xl">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-orange-600">Двухфакторная аутентификация</h3>
                  <p className="text-white/80 mb-6">
                    Добавьте дополнительный уровень защиты для вашего аккаунта с помощью Google Authenticator.
                  </p>

                  <div className="flex justify-between items-center mb-6">
                    <span className="font-medium">Включить двухфакторную аутентификацию</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-600"></div>
                    </label>
                  </div>

                  <button className="bg-orange-600 text-white px-5 py-2 rounded font-medium hover:bg-orange-500 transition-colors">
                    Настроить Google Authenticator
                  </button>
                </div>

                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-orange-600">Изменение пароля</h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Текущий пароль</label>
                      <input
                        type="password"
                        className="w-full p-3 rounded-md border border-white/10 bg-white/5 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Новый пароль</label>
                      <input
                        type="password"
                        className="w-full p-3 rounded-md border border-white/10 bg-white/5 text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Подтвердите новый пароль</label>
                      <input
                        type="password"
                        className="w-full p-3 rounded-md border border-white/10 bg-white/5 text-white"
                      />
                    </div>

                    <button className="bg-orange-600 text-white px-5 py-2 rounded font-medium hover:bg-orange-500 transition-colors mt-2">
                      Сохранить изменения
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* History Tab */}
          {activeTab === "history" && (
            <div>
              <h1 className="text-2xl font-bold mb-8 pb-2 text-orange-600 border-b-2 border-orange-600">
                История транзакций
              </h1>

              <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-black/30">
                        <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase">Дата</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase">Операция</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase">Сумма</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white/70 uppercase">Статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          date: "12.03.2025",
                          operation: "Пополнение баланса",
                          amount: "+1000 EXP",
                          status: "Выполнено",
                        },
                        {
                          date: "10.03.2025",
                          operation: "Покупка в магазине",
                          amount: "-490 EXP",
                          status: "Выполнено",
                        },
                        {
                          date: "08.03.2025",
                          operation: "Выигрыш в рулетке",
                          amount: "+1200 EXP",
                          status: "Выполнено",
                        },
                        { date: "05.03.2025", operation: "Продажа предмета", amount: "+800 EXP", status: "Выполнено" },
                        {
                          date: "01.03.2025",
                          operation: "Пополнение баланса",
                          amount: "+2000 EXP",
                          status: "Выполнено",
                        },
                      ].map((transaction, index) => (
                        <tr key={index} className="border-t border-white/10 hover:bg-white/5">
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">{transaction.operation}</td>
                          <td
                            className={`px-6 py-4 whitespace-nowrap text-sm ${transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}
                          >
                            {transaction.amount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-500">
                              {transaction.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/80 py-5 text-center text-white/60 text-sm">
        <p>© 2025 GTA SAMP Play. Все права защищены.</p>
      </footer>
    </div>
  )
}

