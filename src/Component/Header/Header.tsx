import './Header.css'
import logo from "../../static/image/logo.png"
import Card from '../Card/Card'
import { useEffect, useRef, useState } from 'react';

function Header() {


  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      container.scrollLeft += e.deltaX;
      container.scrollTop += e.deltaY;
      e.preventDefault();
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setStartX(clientX - (containerRef.current?.offsetLeft || 0));
    setStartY(clientY - (containerRef.current?.offsetTop || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    setScrollTop(containerRef.current?.scrollTop || 0);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    const x = clientX - containerRef.current.offsetLeft;
    const y = clientY - containerRef.current.offsetTop;

    const walkX = x - startX;
    const walkY = y - startY;

    containerRef.current.scrollLeft = scrollLeft - walkX;
    containerRef.current.scrollTop = scrollTop - walkY;
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMouseDown(e);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMouseMove(e);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header-container'>

      <div className='header-menu'>

      <button className={'header-menu-toggle ' +( isMenuOpen? " active" : "")} onClick={toggleMenu}>  
        <span></span> 
        <span></span>
        <span></span>
      </button>

      <img className='header-menu-logo' alt="logo company" src={logo} />
        <div className={"header-menu-items"}>
          <a href='https://google.com' className='header-menu-item'>Ev</a>
          <a href='https://google.com' className='header-menu-item'>Taşıma seçeneği</a>
          <a href='https://google.com' className='header-menu-item'>Sıkça sorulan sorular</a>
          <a href='https://google.com' className='header-menu-item'>İletişim</a>
        </div>
      </div>
        <div className={"header-menu-items-mobile" +( isMenuOpen? " active" : "")}>
          <a href='https://google.com' className='header-menu-item'>Ev</a>
          <a href='https://google.com' className='header-menu-item'>Taşıma seçeneği</a>
          <a href='https://google.com' className='header-menu-item'>Sıkça sorulan sorular</a>
          <a href='https://google.com' className='header-menu-item'>İletişim</a>
        </div>
      <div className='header-text'>
        <div className='heder-first-text'>
          Evcil hayvanınızla bir yolculuğa hazırlanmak
        </div>
        <div className='heder-second-text'>
        Evcil hayvanla seyahat etmek, tüm yolcuların konforunu ve güvenliğini sağlamak için dikkatli bir hazırlık gerektirir. Bu bölümde hazırlığın püf noktaları açıklanmaktadır.
        </div>
      </div>

      <div 
        className='header-cards-container'
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}>
        <div className='header-cards'>
          <Card lable='Rota planlama' text='Seyahate çıkmadan önce evcil hayvanlara izin verilen yer ve işletmeleri araştırın. Detaylı bir güzergah belirleyin ve yakınınızda veteriner kliniği olup olmadığını kontrol edin.'></Card>
          <Card lable='Gerekli belgeler' text="Türkiye'de evcil hayvanlarla seyahat için veteriner pasaportu ve aşı belgesi gerekebilir. Önemli belgelerinizin kopyalarını her zaman yanınızda taşıyın."></Card>
          <Card lable='Bir şeyler hazırlamak' text='Evcil hayvanınızın konforunu sağlayacak tüm gerekli eşyaların bulunduğu bir çanta hazırlayın: mama, su, kaplar, tasma, en sevdiği oyuncaklar, ilaçlar ve diğer eşyalar.'></Card>
        </div>
      </div>
    </div>
  )
}

export default Header
