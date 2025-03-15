"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [captchaCode, setCaptchaCode] = useState("RX4F9Z")

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="logo-animation">
          <div className="logo-text text-4xl font-bold uppercase text-orange-600 animate-pulse">GTA SAMP Play</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-black/70 z-50 px-4 md:px-12 py-5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="logo text-2xl font-bold text-orange-600 uppercase">GTA SAMP Play</div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <Link href="#" className="uppercase font-medium hover:text-orange-600 transition-colors">
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
                <Link href="/dashboard" className="uppercase font-medium hover:text-orange-600 transition-colors">
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Banner */}
      <section className="main-banner h-screen flex flex-col justify-center items-center text-center px-4 bg-black/70 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-center bg-cover bg-blend-overlay">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase text-orange-600">GTA SAMP Play</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl">
          Погрузись в увлекательный мир GTA San Andreas с мультиплеером SAMP. Играй с друзьями, участвуй в событиях и
          стань частью нашего сообщества!
        </p>

        <div className="platforms flex flex-col md:flex-row gap-4 mb-8">
          <a
            href="#"
            className="platform-btn flex items-center bg-orange-600/20 border-2 border-orange-600 px-5 py-3 rounded-full text-white hover:bg-orange-600 transition-all hover:-translate-y-1"
          >
            <i className="fab fa-windows mr-2"></i> Windows
          </a>
          <a
            href="#"
            className="platform-btn flex items-center bg-orange-600/20 border-2 border-orange-600 px-5 py-3 rounded-full text-white hover:bg-orange-600 transition-all hover:-translate-y-1"
          >
            <i className="fab fa-apple mr-2"></i> MacOS
          </a>
          <a
            href="#"
            className="platform-btn flex items-center bg-orange-600/20 border-2 border-orange-600 px-5 py-3 rounded-full text-white hover:bg-orange-600 transition-all hover:-translate-y-1"
          >
            <i className="fab fa-android mr-2"></i> Android
          </a>
          <a
            href="#"
            className="platform-btn flex items-center bg-orange-600/20 border-2 border-orange-600 px-5 py-3 rounded-full text-white opacity-70 cursor-not-allowed"
          >
            <i className="fab fa-apple mr-2"></i> iOS (Скоро)
          </a>
        </div>

        <a
          href="#"
          className="download-btn bg-orange-600 text-white px-8 py-4 rounded-full text-lg uppercase font-bold hover:bg-orange-500 transition-all hover:-translate-y-1 shadow-lg shadow-orange-600/30"
        >
          Скачать игру
        </a>
      </section>

      {/* Login Section */}
      <section className="login-section py-20 bg-[#1A1A1A]/80 flex justify-center items-center px-4">
        <div className="login-form bg-white/5 backdrop-blur-md p-10 rounded-lg border border-white/10 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-orange-600 text-center">Вход в личный кабинет</h2>

          <div className="form-group mb-5">
            <label htmlFor="username" className="block mb-2 font-medium">
              Логин
            </label>
            <input
              type="text"
              id="username"
              placeholder="Введите логин"
              className="w-full p-3 rounded-md border border-white/10 bg-white/5 text-white"
            />
          </div>

          <div className="form-group mb-5">
            <label htmlFor="password" className="block mb-2 font-medium">
              Пароль
            </label>
            <input
              type="password"
              id="password"
              placeholder="Введите пароль"
              className="w-full p-3 rounded-md border border-white/10 bg-white/5 text-white"
            />
          </div>

          <div className="captcha mb-5">
            <div className="captcha-img w-full h-20 bg-white/20 rounded-md flex justify-center items-center text-xl tracking-widest text-yellow-400">
              {captchaCode}
            </div>
          </div>

          <button className="login-btn w-full py-4 bg-orange-600 text-white rounded-md font-bold uppercase hover:bg-orange-500 transition-colors">
            Войти
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 text-center px-4">
        <h2 className="section-title text-3xl font-bold mb-12 text-orange-600 uppercase">Особенности проекта</h2>

        <div className="features-container flex flex-wrap justify-center gap-8">
          <div className="feature-card bg-white/5 rounded-lg p-8 w-full max-w-xs border border-white/10 hover:-translate-y-2 transition-transform hover:shadow-lg hover:shadow-orange-600/20">
            <div className="feature-icon text-4xl mb-5 text-orange-600">
              <i className="fas fa-gamepad"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Уникальный игровой опыт</h3>
            <p className="text-white/80">
              Множество сервером с разнообразными режимами игры и возможностями для всех игроков.
            </p>
          </div>

          <div className="feature-card bg-white/5 rounded-lg p-8 w-full max-w-xs border border-white/10 hover:-translate-y-2 transition-transform hover:shadow-lg hover:shadow-orange-600/20">
            <div className="feature-icon text-4xl mb-5 text-orange-600">
              <i className="fas fa-coins"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Игровая валюта EXP</h3>
            <p className="text-white/80">
              Конвертируйте реальные деньги в игровую валюту и получайте преимущества в игре.
            </p>
          </div>

          <div className="feature-card bg-white/5 rounded-lg p-8 w-full max-w-xs border border-white/10 hover:-translate-y-2 transition-transform hover:shadow-lg hover:shadow-orange-600/20">
            <div className="feature-icon text-4xl mb-5 text-orange-600">
              <i className="fas fa-gift"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Рулетка с призами</h3>
            <p className="text-white/80">
              Испытайте удачу в нашей рулетке и выиграйте ценные призы: дома, машины и многое другое.
            </p>
          </div>

          <div className="feature-card bg-white/5 rounded-lg p-8 w-full max-w-xs border border-white/10 hover:-translate-y-2 transition-transform hover:shadow-lg hover:shadow-orange-600/20">
            <div className="feature-icon text-4xl mb-5 text-orange-600">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Безопасность</h3>
            <p className="text-white/80">
              Защита аккаунта с помощью двухфакторной аутентификации и дополнительные меры безопасности.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 py-8 text-center">
        <p className="text-white/60">© 2025 GTA SAMP Play. Все права защищены.</p>
      </footer>
    </div>
  )
}

