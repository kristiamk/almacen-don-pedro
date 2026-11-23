document.addEventListener('DOMContentLoaded', () => {
    const WHATSAPP_NUMBER = '56931000743';

    // Sincronizar botón flotante de WhatsApp con el número configurado
    const floatingWhatsappBtn = document.getElementById('floatingWhatsappBtn');
    if (floatingWhatsappBtn) {
        const greeting = encodeURIComponent('Hola Almacén Don Pedro, tengo una consulta sobre sus productos.');
        floatingWhatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${greeting}`;
    }

    const products = [
        { id: 1, name: "ACEITE 900 ML", price: 2800, image: "art/im1.jpg" },
        { id: 2, name: "AGUA BIDON 20 LITROS AGUA SODA CHOAPA", price: 3000, image: "art/im2.jpg" },
        { id: 3, name: "AGUA GARRAFA 6 LITROS MANANTIAL", price: 2200, image: "art/im3.jpg" },
        { id: 4, name: "AGUA MAS+", price: 1600, image: "art/im4.jpg" },
        { id: 5, name: "AJI EN POTE", price: 1800, image: "art/im5.jpg" },
        { id: 6, name: "AJO", price: 400, image: "art/im6.jpg" },
        { id: 7, name: "ALKA BARRA", price: 500, image: "art/im7.jpg" },
        { id: 8, name: "DETERGENTE LIQUIDO OMO 800 ML", price: 1700, image: "art/im8.jpg" },
        { id: 9, name: "DETERGENTE LIQUIDO OMO PIEL SENSIBLE 800 ML", price: 1700, image: "art/im9.jpg" },
        { id: 10, name: "ARROZ MEDIO KILO", price: 1300, image: "art/im10.jpg" },
        { id: 11, name: "ARVEJA TARRO", price: 1500, image: "art/im11.jpg" },
        { id: 12, name: "ARVEJAS KILO", price: 3000, image: "art/im12.jpg" },
        { id: 13, name: "ARVERJA-LENTEJA", price: 3000, image: "art/im13.jpg" },
        { id: 14, name: "ATUN ACEITE", price: 1700, image: "art/im14.jpg" },
        { id: 15, name: "ATUN AGUA", price: 1700, image: "art/im15.jpg" },
        { id: 16, name: "AZUCAR IANZA 400GR", price: 1500, image: "art/im16.jpg" },
        { id: 17, name: "BALSAMO", price: 300, image: "art/im17.jpg" },
        { id: 18, name: "BEBIDA LATA", price: 1000, image: "art/im18.jpg" },
        { id: 19, name: "BEBIDAS 2 1/2 LITROS CCU", price: 2800, image: "art/im19.jpg" },
        { id: 20, name: "BEBIDAS 2 LITROS COCA COLA", price: 1900, image: "art/im20.jpg" },
        { id: 21, name: "BEBIDAS 2 LITROS ZERO CCU", price: 1900, image: "art/im21.jpg" },
        { id: 22, name: "BEBIDAS 3 LITROS CCU DESECHABLE", price: 2600, image: "art/im22.jpg" },
        { id: 23, name: "BEBIDAS 600ML CCU", price: 1500, image: "art/im23.jpg" },
        { id: 24, name: "BEBIDAS FRUNA", price: 800, image: "art/im24.jpg" },
        { id: 25, name: "BEBIDA LITRO 1,25 DESECHABLE CCU", price: 1000, image: "art/im25.jpg" },
        { id: 26, name: "BEBIDAS LITRO 1/4", price: 1400, image: "art/im26.jpg" },
        { id: 27, name: "BIGTIME", price: 500, image: "art/im27.jpg" },
        { id: 28, name: "BOLSA DE BASURA MAS GRANDES", price: 600, image: "art/im28.jpg" },
        { id: 29, name: "BOLSA DE TE", price: 70, image: "art/im29.jpg" },
        { id: 30, name: "BON-O-BON", price: 500, image: "art/im30.jpg" },
        { id: 31, name: "CACHANTUN 600ML", price: 1000, image: "art/im31.jpg" },
        { id: 32, name: "CACHANTUN 1.5 LTS", price: 1400, image: "art/im32.jpg" },
        { id: 33, name: "CAFÉ SOBRE", price: 300, image: "art/im33.jpg" },
        { id: 34, name: "CAJA TÉ CHICA", price: 1600, image: "art/im34.jpg" },
        { id: 35, name: "CALDO MAGGIE", price: 300, image: "art/im35.jpg" },
        { id: 36, name: "CARBON", price: 3000, image: "art/im36.jpg" },
        { id: 37, name: "CLOROX + POET 950 G", price: 2200, image: "art/im37.jpg" },
        { id: 38, name: "CEBOLLA 1kg", price: 1700, image: "art/im38.jpg" },
        { id: 39, name: "CHANCACA", price: 2000, image: "art/im39.jpg" },
        { id: 40, name: "GROSO", price: 300, image: "art/im40.jpg" },
        { id: 41, name: "CHORITO AGUA/ACEITE", price: 1600, image: "art/im41.jpg" },
        { id: 42, name: "CHORIZO", price: 1500, image: "art/im42.jpg" },
        { id: 43, name: "CHUBI", price: 350, image: "art/im43.jpg" },
        { id: 44, name: "CLOREX ROPA COLOR 370G", price: 1900, image: "art/im44.jpg" },
        { id: 45, name: "CHUPETE", price: 200, image: "art/im45.jpg" },
        { id: 46, name: "COMIDA GATO", price: 2000, image: "art/im46.jpg" },
        { id: 47, name: "CLORINDA 500 G", price: 1900, image: "art/im47.jpg" },
        { id: 48, name: "COMIDA PERRO KG", price: 3000, image: "art/im48.jpg" },
        { id: 49, name: "CONFOR UNIDAD", price: 500, image: "art/im49.jpg" },
        { id: 50, name: "CONFORT FAVORITA", price: 1700, image: "art/im50.jpg" },
        { id: 51, name: "CONFORT NOBLE", price: 1700, image: "art/im51.jpg" },
        { id: 52, name: "CONFORT SCOTT", price: 1700, image: "art/im52.jpg" },
        { id: 53, name: "CONGELADO VERDURA", price: 1200, image: "art/im53.jpg" },
        { id: 54, name: "CREMA TARRO HOLANDA", price: 1800, image: "art/im54.jpg" },
        { id: 55, name: "CREMA TARRO NESTLE", price: 1800, image: "art/im55.jpg" },
        { id: 56, name: "DETERGENTES ALTERENATIVOS 3 LITROS", price: 3500, image: "art/im56.jpg" },
        { id: 57, name: "4 CUCHUFLI", price: 1000, image: "art/im57.jpg" },
        { id: 58, name: "DETERGENTE BIO POLVO 800 GRS", price: 2000, image: "art/im58.jpg" },
        { id: 59, name: "DORITOS", price: 1300, image: "art/im59.jpg" },
        { id: 60, name: "DORITOS GRANDES", price: 3000, image: "art/im60.jpg" },
        { id: 61, name: "DULCE DE LA LIGUA", price: 600, image: "art/im61.jpg" },
        { id: 62, name: "DURAZNO TARRO", price: 2000, image: "art/im62.jpg" },
        { id: 63, name: "PAÑUELOS DESECHABLES", price: 400, image: "art/im63.jpg" },
        { id: 64, name: "ENCENDEDOR", price: 350, image: "art/im64.jpg" },
        { id: 65, name: "ENO/SAL DE FRUTA", price: 400, image: "art/im65.jpg" },
        { id: 66, name: "PALAS", price: 2000, image: "art/im66.jpg" },
        { id: 67, name: "FAJITAS L", price: 2000, image: "art/im67.jpg" },
        { id: 68, name: "ESCOBILLON", price: 2100, image: "art/im68.jpg" },
        { id: 69, name: "ESPONJA", price: 500, image: "art/im69.jpg" },
        { id: 70, name: "BEBIDAS EXPRESS", price: 550, image: "art/im70.jpg" },
        { id: 71, name: "FIDEOS VARIEDADES 400 GRS", price: 1400, image: "art/im71.jpg" },
        { id: 72, name: "FOSFORO", price: 300, image: "art/im72.jpg" },
        { id: 73, name: "GALLETA CERRANITA", price: 400, image: "art/im73.jpg" },
        { id: 74, name: "GALLETA COCO/LIMON", price: 1000, image: "art/im74.jpg" },
        { id: 75, name: "GALLETA VINO", price: 1000, image: "art/im75.jpg" },
        { id: 76, name: "GALLETAS COLACION", price: 400, image: "art/im76.jpg" },
        { id: 77, name: "GATORADE 800", price: 1500, image: "art/im77.jpg" },
        { id: 78, name: "PAN DE MOLDE IDEAL", price: 2000, image: "art/im78.jpg" },
        { id: 79, name: "GOLPE", price: 500, image: "art/im79.jpg" },
        { id: 80, name: "HAMBURGUESA", price: 1500, image: "art/im80.jpg" },
        { id: 81, name: "HARINA CON/SIN POLVO", price: 1750, image: "art/im81.jpg" },
        { id: 82, name: "HOJAS DE AFEITAR", price: 300, image: "art/im82.jpg" },
        { id: 83, name: "JABON", price: 1000, image: "art/im83.jpg" },
        { id: 84, name: "JAMON DE POLLO", price: 2000, image: "art/im84.jpg" },
        { id: 85, name: "JAMONADA", price: 2000, image: "art/im85.jpg" },
        { id: 86, name: "JUGO ANDINA", price: 2100, image: "art/im86.jpg" },
        { id: 87, name: "JUGO COLACION", price: 550, image: "art/im87.jpg" },
        { id: 88, name: "JUGOS WATTS", price: 2100, image: "art/im88.jpg" },
        { id: 89, name: "JUREL", price: 3000, image: "art/im89.jpg" },
        { id: 90, name: "KAPO", price: 500, image: "art/im90.jpg" },
        { id: 91, name: "LECHE CHICAS SABORES", price: 750, image: "art/im91.jpg" },
        { id: 92, name: "LECHE CONDENSADA", price: 1900, image: "art/im92.jpg" },
        { id: 93, name: "LECHE EVAPORADA", price: 1900, image: "art/im93.jpg" },
        { id: 94, name: "LECHE LITRO SABORES", price: 1900, image: "art/im94.jpg" },
        { id: 95, name: "LECHE NORMAL Y SABORES", price: 1800, image: "art/im95.jpg" },
        { id: 96, name: "LENTEJAS KG", price: 2900, image: "art/im96.jpg" },
        { id: 97, name: "LEVADURA", price: 750, image: "art/im97.jpg" },
        { id: 98, name: "MANJAR", price: 1500, image: "art/im98.jpg" },
        { id: 99, name: "MANTECA", price: 1800, image: "art/im99.jpg" },
        { id: 100, name: "MANTEQUILLA", price: 2000, image: "art/im100.jpg" },
        { id: 101, name: "MARGARINA", price: 1200, image: "art/im101.jpg" },
        { id: 102, name: "MARISCOS SURTIDOS", price: 3800, image: "art/im102.jpg" },
        { id: 103, name: "MAYO SACHET", price: 1300, image: "art/im103.jpg" },
        { id: 104, name: "MERMELADA", price: 1200, image: "art/im104.jpg" },
        { id: 105, name: "MILO", price: 800, image: "art/im105.jpg" },
        { id: 106, name: "MONSTER", price: 2000, image: "art/im106.jpg" },
        { id: 107, name: "MORTADELA", price: 2000, image: "art/im107.jpg" },
        { id: 108, name: "NOVA", price: 1200, image: "art/im108.jpg" },
        { id: 109, name: "DETODITOS GRANDE", price: 3000, image: "art/im109.jpg" },
        { id: 110, name: "OBLEAS SABORES", price: 1000, image: "art/im110.jpg" },
        { id: 111, name: "OMO LIQUIDO", price: 1700, image: "art/im111.jpg" },
        { id: 112, name: "PAPAS FRITAS GRANDE", price: 3000, image: "art/im112.jpg" },
        { id: 113, name: "PAN", price: 2700, image: "art/im113.jpg" },
        { id: 114, name: "PAPAS FRITAS M", price: 1500, image: "art/im114.jpg" },
        { id: 115, name: "PAPAS FRITAS TAMAÑO S", price: 1300, image: "art/im115.jpg" },
        { id: 116, name: "PASTA DE DIENTES", price: 2400, image: "art/im116.jpg" },
        { id: 117, name: "PATE CASTILLO", price: 1500, image: "art/im117.jpg" },
        { id: 118, name: "PHILIPS AA", price: 400, image: "art/im118.jpg" },
        { id: 119, name: "PILAS AAA", price: 400, image: "art/im119.jpg" },
        { id: 120, name: "2 PILAS GRANDES", price: 1900, image: "art/im120.jpg" },
        { id: 121, name: "POET CHICO", price: 900, image: "art/im121.jpg" },
        { id: 122, name: "POET GRANDE", price: 1900, image: "art/im122.jpg" },
        { id: 123, name: "POLVO ROYAL", price: 1000, image: "art/im123.jpg" },
        { id: 124, name: "POROTOS KILO", price: 3000, image: "art/im124.jpg" },
        { id: 125, name: "QUESO CHANCO", price: 2500, image: "art/im125.jpg" },
        { id: 126, name: "QUESO GAUDA", price: 2500, image: "art/im126.jpg" },
        { id: 127, name: "QUESO RALLADO", price: 1200, image: "art/im127.jpg" },
        { id: 128, name: "QUITAMANCHAS", price: 700, image: "art/im128.jpg" },
        { id: 129, name: "QUIX", price: 1200, image: "art/im129.jpg" },
        { id: 130, name: "REDBULL 250ml", price: 2000, image: "art/im130.jpg" },
        { id: 131, name: "ROCKSTAR", price: 1200, image: "art/im131.jpg" },
        { id: 132, name: "SACHET SHAMPOO", price: 300, image: "art/im132.jpg" },
        { id: 133, name: "SAL 1 KG", price: 1300, image: "art/im133.jpg" },
        { id: 134, name: "SEMOLA", price: 1500, image: "art/im134.jpg" },
        { id: 135, name: "SERRANITA", price: 500, image: "art/im135.jpg" },
        { id: 136, name: "SERVILLETA ABOLENGO", price: 400, image: "art/im136.jpg" },
        { id: 137, name: "SODA CHICA", price: 500, image: "art/im137.jpg" },
        { id: 138, name: "SODA GRANDE", price: 1000, image: "art/im138.jpg" },
        { id: 139, name: "SPRIM", price: 350, image: "art/im139.jpg" },
        { id: 140, name: "SUPER 8", price: 500, image: "art/im140.jpg" },
        { id: 141, name: "SALAME", price: 1500, image: "art/im141.jpg" },
        { id: 142, name: "CECINAS VARIEDADES SACHET", price: 2000, image: "art/im142.jpg" },
        { id: 143, name: "TOALLAS HIGIENICAS DIA KOTEC", price: 1700, image: "art/im143.jpg" },
        { id: 144, name: "TOALLAS HIGIENICAS NOCHE KOTEC", price: 1800, image: "art/im144.jpg" },
        { id: 145, name: "TRAPEROS HUMEDOS 10 UNIDADES", price: 2000, image: "art/im145.jpg" },
        { id: 146, name: "VELAS INDIVIDUALES GRANDES", price: 500, image: "art/im146.jpg" },
        { id: 147, name: "VELAS INVIBIDUALES CHICA", price: 400, image: "art/im147.jpg" },
        { id: 148, name: "VELAS PAQUETE", price: 1600, image: "art/im148.jpg" },
        { id: 149, name: "VIENESA", price: 1500, image: "art/im149.jpg" },
        { id: 150, name: "VIRUTILLA PISO", price: 1300, image: "art/im150.jpg" },
        { id: 151, name: "VIRUTILLA COCINA", price: 500, image: "art/im151.jpg" },
        { id: 152, name: "VITAL SIN/CON GAS 1,6", price: 1400, image: "art/im152.jpg" },
        { id: 153, name: "VIVO JUGO", price: 350, image: "art/im153.jpg" },
        { id: 154, name: "YOGUR", price: 600, image: "art/im154.jpg" },
        { id: 155, name: "ZUKO", price: 350, image: "art/im155.jpg" },
        { id: 156, name: "TAKIS", price: 1300, image: "art/im156.jpg" },
        { id: 157, name: "TAKIS GRANDE", price: 3000, image: "art/im157.jpg" }
    ];

    const catalogContainer = document.getElementById('catalog');
    const searchInput = document.getElementById('searchInput');
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalContainer = document.querySelector('.cart-total h3');
    const checkoutButton = document.querySelector('.checkout');

    // Elementos de la barra flotante móvil
    const mobileCartCount = document.getElementById('mobileCartCount');
    const mobileCartTotal = document.getElementById('mobileCartTotal');
    const goToCartBtn = document.getElementById('goToCartBtn');
    const cartSection = document.getElementById('cartSection');

    // Elementos de geolocalización para Delivery y mapa para Retiro
    const deliveryRadios = document.querySelectorAll('input[name="delivery-option"]');
    const locationBox = document.getElementById('locationBox');
    const pickupMapBox = document.getElementById('pickupMapBox');
    const getLocationBtn = document.getElementById('getLocationBtn');
    const locationStatus = document.getElementById('locationStatus');
    let userLocationUrl = '';

    const placeholderSVG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%230f172a' width='300' height='200'/%3E%3Crect fill='none' stroke='%23334155' stroke-width='2' x='10' y='10' width='280' height='180' rx='8'/%3E%3Ctext fill='%2394a3b8' font-family='sans-serif' font-size='14' font-weight='bold' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImagen referencial%3C/text%3E%3C/svg%3E";

    function renderCatalog(list = products) {
        if (!catalogContainer) return;
        if (list.length === 0) {
            catalogContainer.innerHTML = '<p class="no-results">No se encontraron productos con ese nombre.</p>';
            return;
        }
        let html = '';
        list.forEach(product => {
            html += `
            <div class="product" data-id="${product.id}">
            <div class="img-box">
            <img src="${product.image}" alt="${product.name} - Imagen referencial" loading="lazy" onerror="this.onerror=null; this.src='${placeholderSVG}';">
            <span class="ref-tag">Imagen referencial</span>
            </div>
            <h3>${product.name}</h3>
            <p>$${product.price.toLocaleString('es-CL')}</p>
            <button type="button" class="add-to-cart">Agregar al carrito</button>
            </div>
            `;
        });
        catalogContainer.innerHTML = html;
    }

    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        let totalQty = 0;

        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='${placeholderSVG}';">
            <span>${item.name} - $${(item.price * item.quantity).toLocaleString('es-CL')}</span>
            <div>
            <button type="button" class="remove-item" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button type="button" class="add-item" data-id="${item.id}">+</button>
            </div>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
            totalQty += item.quantity;
        });

        cartTotalContainer.textContent = `Total: $${total.toLocaleString('es-CL')}`;

        if (mobileCartCount && mobileCartTotal) {
            mobileCartCount.textContent = `${totalQty} ${totalQty === 1 ? 'artículo' : 'artículos'}`;
            mobileCartTotal.textContent = `$${total.toLocaleString('es-CL')}`;
        }
    }

    renderCatalog();

    // Mostrar GPS si elige Delivery, o el mapa del local si elige Retiro
    deliveryRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            if (e.target.value === 'delivery') {
                if (locationBox) locationBox.style.display = 'flex';
                if (pickupMapBox) pickupMapBox.style.display = 'none';
            } else {
                if (locationBox) locationBox.style.display = 'none';
                if (pickupMapBox) pickupMapBox.style.display = 'flex';
            }
        });
    });

    // Capturar ubicación GPS actual del dispositivo
    if (getLocationBtn) {
        getLocationBtn.addEventListener('click', () => {
            if (!('geolocation' in navigator)) {
                locationStatus.textContent = 'Tu navegador no soporta geolocalización.';
                locationStatus.className = 'location-status error';
                return;
            }

            getLocationBtn.disabled = true;
            getLocationBtn.textContent = '⏳ Obteniendo ubicación GPS...';
            locationStatus.textContent = 'Por favor acepta el permiso de ubicación en tu teléfono.';
            locationStatus.className = 'location-status';

            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    userLocationUrl = `https://maps.google.com/?q=${lat},${lng}`;

                    getLocationBtn.disabled = false;
                    getLocationBtn.textContent = '✅ Ubicación GPS adjuntada';
                    getLocationBtn.classList.add('success');
                    locationStatus.textContent = `Coordenadas listas (${lat.toFixed(5)}, ${lng.toFixed(5)})`;
                    locationStatus.className = 'location-status success';
                },
                (error) => {
                    getLocationBtn.disabled = false;
                    getLocationBtn.textContent = '📍 Reintentar obtener ubicación';
                    getLocationBtn.classList.remove('success');
                    locationStatus.className = 'location-status error';

                    if (error.code === error.PERMISSION_DENIED) {
                        locationStatus.textContent = 'Permiso denegado. Activa el GPS en tu navegador o escribe tu dirección.';
                    } else {
                        locationStatus.textContent = 'No se pudo obtener la ubicación. Verifica que el GPS esté encendido.';
                    }
                },
                {
                    enableHighAccuracy: true,
                    timeout: 12000,
                    maximumAge: 0
                }
            );
        });
    }

    // Buscador en tiempo real
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase().trim();
            const filtered = products.filter(p => p.name.toLowerCase().includes(term));
            renderCatalog(filtered);
        });
    }

    // Botón flotante móvil para bajar al carrito suavemente
    if (goToCartBtn && cartSection) {
        goToCartBtn.addEventListener('click', () => {
            cartSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    catalogContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productCard = event.target.closest('.product');
            const productId = parseInt(productCard.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);

            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            const originalText = event.target.textContent;
            event.target.textContent = '¡Agregado!';
            event.target.classList.add('added');
            setTimeout(() => {
                event.target.textContent = originalText;
                event.target.classList.remove('added');
            }, 600);

            updateCartDisplay();
        }
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    cart.splice(cart.indexOf(item), 1);
                }
                updateCartDisplay();
            }
        }

        if (event.target.classList.contains('add-item')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity++;
                updateCartDisplay();
            }
        }
    });

    checkoutButton.addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const address = document.getElementById('address').value.trim();
        const deliveryOptionInput = document.querySelector('input[name="delivery-option"]:checked');

        if (cart.length === 0) {
            alert('El carrito está vacío. Por favor, agregue productos.');
            return;
        }

        if (name && address && deliveryOptionInput) {
            const deliveryOption = deliveryOptionInput.value;
            let message = `*Pedido de Artículos - Almacén Don Pedro*\n\n`;

            cart.forEach(item => {
                message += `• ${item.name} (x${item.quantity}): $${(item.price * item.quantity).toLocaleString('es-CL')}\n`;
            });

            const totalCalc = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
            message += `\n*Total a Pagar: $${totalCalc.toLocaleString('es-CL')}*`;
            message += `\n\n*Datos del Cliente:*\nNombre: ${name}\nDirección: ${address}\n`;
            message += `Opción de Entrega: ${deliveryOption === 'delivery' ? 'Delivery' : 'Retiro'}`;

            // Si seleccionó Delivery y capturó su ubicación GPS, incluir enlace de Google Maps
            if (deliveryOption === 'delivery' && userLocationUrl) {
                message += `\nUbicación GPS: ${userLocationUrl}`;
            }

            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
        } else {
            alert('Por favor, ingrese su nombre, dirección y seleccione una opción de entrega.');
        }
    });
});
