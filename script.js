// Contenido de las páginas
const pages = {
    inicio: `
    <div class="nav-container">
            <div class="nav-logo">
                <img src="logo-calavera.jpeg" alt="Logo CBTIS 222" class="logo-image">
                <h1>Carrera de IA - CBTIS 222</h1>
            </div>
        
        <div class="grid grid-2">
            <div class="card">
                <h2>¿Qué es la IA?</h2>
                <p>La Inteligencia Artificial es una rama de la informática que busca crear sistemas capaces de realizar tareas que normalmente requieren inteligencia humana, como el aprendizaje, el razonamiento y la resolución de problemas.</p>
            </div>
            
            <div class="card">
                <h2>¿Por qué estudiarla?</h2>
                <p>La IA está transformando todas las industrias. Estudiar esta carrera te prepara para ser parte de la revolución tecnológica más importante de nuestro tiempo, con oportunidades laborales en constante crecimiento.</p>
            </div>
        </div>

        <div class="stats-container">
            <h2 style="text-align: center; font-size: 2rem; margin-bottom: 1rem;">🌍 Impacto Global de la IA</h2>
            <div class="stats-grid">
                <div>
                    <div class="stat-number">$15.7T</div>
                    <p>Contribución estimada al PIB global para 2030</p>
                </div>
                <div>
                    <div class="stat-number">97M</div>
                    <p>Nuevos empleos generados en el sector tecnológico</p>
                </div>
                <div>
                    <div class="stat-number">70%</div>
                    <p>De empresas adoptarán IA para 2030</p>
                </div>
            </div>
        </div>

        <div class="card">
            <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">💡 Importancia de la IA en el Mundo Actual</h2>
            <div class="grid grid-2">
                <div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="font-size: 2rem;">🏥</div>
                        <div>
                            <h3>Salud y Medicina</h3>
                            <p style="color: #6b7280; font-size: 0.9rem;">Diagnósticos más precisos, desarrollo de fármacos acelerado y medicina personalizada</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="font-size: 2rem;">🌱</div>
                        <div>
                            <h3>Sostenibilidad</h3>
                            <p style="color: #6b7280; font-size: 0.9rem;">Optimización de recursos, predicción climática y gestión eficiente de energía</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <div style="font-size: 2rem;">🔒</div>
                        <div>
                            <h3>Seguridad</h3>
                            <p style="color: #6b7280; font-size: 0.9rem;">Detección de fraudes, ciberseguridad avanzada y protección de datos</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="font-size: 2rem;">🚀</div>
                        <div>
                            <h3>Innovación</h3>
                            <p style="color: #6b7280; font-size: 0.9rem;">Automatización de procesos, nuevas soluciones tecnológicas y eficiencia operativa</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
                        <div style="font-size: 2rem;">📚</div>
                        <div>
                            <h3>Educación</h3>
                            <p style="color: #6b7280; font-size: 0.9rem;">Aprendizaje personalizado, acceso democratizado al conocimiento</p>
                        </div>
                    </div>
                    <div style="display: flex; gap: 1rem;">
                        <div style="font-size: 2rem;">💼</div>
                        <div>
                            <h3>Economía</h3>
                            <p style="color: #6b7280; font-size: 0.9rem;">Crecimiento del PIB, nuevos modelos de negocio y competitividad global</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="card">
            <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">🏆 Top 10: Países Líderes en Inteligencia Artificial</h2>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Posición</th>
                            <th>País</th>
                            <th>Puntuación</th>
                            <th>Fortalezas Principales</th>
                            <th style="text-align: center;">Inversión Anual</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>🥇 1</strong></td>
                            <td><span class="country-flag">🇺🇸</span><strong>Estados Unidos</strong></td>
                            <td><span class="score-badge score-high">100/100</span></td>
                            <td>Silicon Valley, Microsoft, Google, OpenAI</td>
                            <td style="text-align: center;"><strong>$50B+</strong></td>
                        </tr>
                        <tr>
                            <td><strong>🥈 2</strong></td>
                            <td><span class="country-flag">🇨🇳</span><strong>China</strong></td>
                            <td><span class="score-badge score-high">95/100</span></td>
                            <td>Alibaba, Baidu, Tencent, reconocimiento facial</td>
                            <td style="text-align: center;"><strong>$40B+</strong></td>
                        </tr>
                        <tr>
                            <td><strong>🥉 3</strong></td>
                            <td><span class="country-flag">🇬🇧</span><strong>Reino Unido</strong></td>
                            <td><span class="score-badge score-medium">85/100</span></td>
                            <td>DeepMind, investigación académica, IA ética</td>
                            <td style="text-align: center;"><strong>$15B+</strong></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td><span class="country-flag">🇨🇦</span><strong>Canadá</strong></td>
                            <td><span class="score-badge score-medium">82/100</span></td>
                            <td>Deep Learning pioneers, Vector Institute</td>
                            <td style="text-align: center;"><strong>$8B+</strong></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><span class="country-flag">🇮🇱</span><strong>Israel</strong></td>
                            <td><span class="score-badge score-medium">78/100</span></td>
                            <td>Startups de IA, ciberseguridad, innovación</td>
                            <td style="text-align: center;"><strong>$6B+</strong></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><span class="country-flag">🇩🇪</span><strong>Alemania</strong></td>
                            <td><span class="score-badge score-medium">75/100</span></td>
                            <td>IA Industrial, automatización, Industria 4.0</td>
                            <td style="text-align: center;"><strong>$7B+</strong></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><span class="country-flag">🇯🇵</span><strong>Japón</strong></td>
                            <td><span class="score-badge score-low">72/100</span></td>
                            <td>Robótica, Sony, Toyota, envejecimiento poblacional</td>
                            <td style="text-align: center;"><strong>$5B+</strong></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><span class="country-flag">🇸🇬</span><strong>Singapur</strong></td>
                            <td><span class="score-badge score-low">70/100</span></td>
                            <td>Smart Nation, fintech IA, gobierno digital</td>
                            <td style="text-align: center;"><strong>$4B+</strong></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><span class="country-flag">🇰🇷</span><strong>Corea del Sur</strong></td>
                            <td><span class="score-badge score-low">68/100</span></td>
                            <td>Samsung, LG, 5G + IA, tecnología de consumo</td>
                            <td style="text-align: center;"><strong>$4.5B+</strong></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><span class="country-flag">🇫🇷</span><strong>Francia</strong></td>
                            <td><span class="score-badge score-low">65/100</span></td>
                            <td>Estrategia nacional IA, investigación, Mistral AI</td>
                            <td style="text-align: center;"><strong>$3B+</strong></td>
                        </tr>
                        <tr class="mexico-row">
                            <td><strong>⭐ 15</strong></td>
                            <td><span class="country-flag">🇲🇽</span><strong>México</strong></td>
                            <td><span class="score-badge score-high">58/100</span></td>
                            <td><strong>Líder en LatAm, UNAM, IPN, nearshoring tech</strong></td>
                            <td style="text-align: center;"><strong>$1.2B+</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="mexico-section">
            <h2 style="text-align: center; font-size: 2rem; margin-bottom: 2rem;">🇲🇽 México y la Inteligencia Artificial</h2>
            <div class="mexico-grid">
                <div class="mexico-card">
                    <h3>🎓 Educación en IA</h3>
                    <ul>
                        <li>• UNAM, IPN, Tec de Monterrey lideran investigación</li>
                        <li>• CBTIS 222 y planteles técnicos forman talento</li>
                        <li>• Programas especializados en crecimiento</li>
                        <li>• Colaboración con universidades internacionales</li>
                    </ul>
                </div>
                <div class="mexico-card">
                    <h3>🏢 Empresas e Innovación</h3>
                    <ul>
                        <li>• +500 startups de tecnología e IA</li>
                        <li>• Clúster de Monterrey, CDMX, Guadalajara</li>
                        <li>• Softtek, Kavak, Clip usan IA</li>
                        <li>• Centros de desarrollo de IBM, Oracle, Intel</li>
                    </ul>
                </div>
                <div class="mexico-card">
                    <h3>📈 Oportunidades</h3>
                    <ul>
                        <li>• Nearshoring: empresas de EE.UU. relocalizan</li>
                        <li>• Salarios competitivos (30-50% sobre promedio)</li>
                        <li>• Demanda creciente 25% anual</li>
                        <li>• Trabajo remoto con empresas globales</li>
                    </ul>
                </div>
                <div class="mexico-card">
                    <h3>🎯 Sectores Clave</h3>
                    <ul>
                        <li>• Fintech: IA en banca digital</li>
                        <li>• E-commerce: recomendaciones personalizadas</li>
                        <li>• Manufactura: Industria 4.0</li>
                        <li>• Salud: telemedicina y diagnóstico</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="grid grid-3">
            <div class="feature-card">
                <div class="feature-icon">🎓</div>
                <h3 style="color: #059669;">CBTIS 222</h3>
                <p style="color: #6b7280; font-size: 0.9rem;">Formando profesionales en IA en Celaya, Guanajuato. Parte de la nueva generación de técnicos especializados en tecnología emergente.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🌟</div>
                <h3 style="color: #059669;">Ventaja Competitiva</h3>
                <p style="color: #6b7280; font-size: 0.9rem;">México es el 2° país con más certificaciones en la nube en LatAm y cuenta con más de 700,000 profesionales de TI.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🚀</div>
                <h3 style="color: #059669;">Futuro Prometedor</h3>
                <p style="color: #6b7280; font-size: 0.9rem;">Se proyecta que para 2030, México estará entre los top 10 países en adopción de IA en América.</p>
            </div>
        </div>

        <div style="background: linear-gradient(135deg, #7c3aed 0%, #ec4899 100%); color: white; padding: 2rem; border-radius: 0.5rem; text-align: center; margin-top: 2rem;">
            <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">🎯 La IA: Transformando el Presente, Construyendo el Futuro</h2>
            <p style="font-size: 1.1rem;">No solo es una carrera con futuro, es LA carrera que está definiendo el futuro de la humanidad</p>
        </div>
    `,
    
    carrera: `
        <h1 style="font-size: 2rem; margin-bottom: 2rem;">La Carrera de Inteligencia Artificial</h1>
        
        <div class="card">
            <h2 style="color: #2563eb;">Características</h2>
            <p><strong>Duración:</strong> Aproximadamente 4 años</p>
            <p><strong>Modalidad:</strong> Presencial y en línea disponible</p>
            <p><strong>Áreas de estudio principales:</strong></p>
            <ul style="margin-left: 2rem; margin-top: 1rem;">
                <li>Machine Learning y Deep Learning</li>
                <li>Procesamiento de Lenguaje Natural</li>
                <li>Visión por Computadora</li>
                <li>Robótica</li>
                <li>Ética en IA</li>
            </ul>
        </div>

        <div class="card">
            <h2 style="color: #2563eb;">Habilidades que Desarrollarás</h2>
            <div class="skills-grid">
                <div class="skill-card skill-blue">
                    <h3>Técnicas</h3>
                    <p style="font-size: 0.9rem; color: #374151;">Programación, matemáticas, estadística, algoritmos</p>
                </div>
                <div class="skill-card skill-purple">
                    <h3>Analíticas</h3>
                    <p style="font-size: 0.9rem; color: #374151;">Resolución de problemas, pensamiento crítico</p>
                </div>
                <div class="skill-card skill-green">
                    <h3>Creativas</h3>
                    <p style="font-size: 0.9rem; color: #374151;">Innovación, diseño de soluciones</p>
                </div>
                <div class="skill-card skill-yellow">
                    <h3>Colaborativas</h3>
                    <p style="font-size: 0.9rem; color: #374151;">Trabajo en equipo, comunicación</p>
                </div>
            </div>
        </div>
    `,
    
    areas: `
        <h1 style="font-size: 2rem; margin-bottom: 2rem;">Áreas donde la IA tiene Inferencia</h1>
        
        <div class="grid grid-3">
            <div class="feature-card">
                <div class="feature-icon">🏥</div>
                <h3>Salud</h3>
                <p style="color: #6b7280;">Diagnóstico médico, análisis de imágenes, medicina personalizada</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🚗</div>
                <h3>Transporte</h3>
                <p style="color: #6b7280;">Vehículos autónomos, optimización de rutas, logística</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">💰</div>
                <h3>Finanzas</h3>
                <p style="color: #6b7280;">Detección de fraudes, trading algorítmico, análisis de riesgos</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎮</div>
                <h3>Entretenimiento</h3>
                <p style="color: #6b7280;">Videojuegos, sistemas de recomendación, creación de contenido</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🏭</div>
                <h3>Manufactura</h3>
                <p style="color: #6b7280;">Automatización, control de calidad, mantenimiento predictivo</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🌱</div>
                <h3>Agricultura</h3>
                <p style="color: #6b7280;">Agricultura de precisión, monitoreo de cultivos, predicción climática</p>
            </div>
        </div>

        <div style="background-color: #eff6ff; padding: 2rem; border-radius: 0.5rem; margin-top: 2rem;">
            <h2 style="color: #1e40af; margin-bottom: 1rem;">Impacto Global</h2>
            <p style="color: #374151;">La IA está presente en prácticamente todas las industrias modernas, transformando la manera en que trabajamos, nos comunicamos y resolvemos problemas complejos. Estudiar esta carrera te prepara para contribuir en cualquiera de estos campos.</p>
        </div>
    `,
    
    recomendaciones: `
        <h1 style="font-size: 2rem; margin-bottom: 2rem;">Recomendaciones para Estudiar IA</h1>
        
        <div class="alert alert-warning">
            <h3>⚠️ Lo que NO es recomendable</h3>
            <ul>
                <li>Pensar que solo necesitas saber programar</li>
                <li>Ignorar las matemáticas y la estadística</li>
                <li>No practicar con proyectos reales</li>
                <li>Estudiar de forma aislada sin colaborar</li>
                <li>Descuidar la ética y el impacto social de la IA</li>
            </ul>
        </div>

        <div class="alert alert-success">
            <h3>✅ Lo que SÍ es recomendable</h3>
            <ul>
                <li>Fortalecer tus bases en matemáticas (álgebra, cálculo, estadística)</li>
                <li>Practicar programación constantemente (Python, R, Java)</li>
                <li>Participar en proyectos y competencias (Kaggle, hackathons)</li>
                <li>Mantenerte actualizado con las últimas tendencias</li>
                <li>Desarrollar habilidades de trabajo en equipo</li>
                <li>Estudiar casos de uso reales y éticos</li>
            </ul>
        </div>

        <div class="card">
            <h2 style="color: #2563eb;">Recursos de Aprendizaje</h2>
            <div class="grid grid-2">
                <div>
                    <h3>Plataformas Online</h3>
                    <ul style="color: #6b7280; font-size: 0.9rem;">
                        <li>Coursera - Machine Learning</li>
                        <li>edX - AI Courses</li>
                        <li>Kaggle - Competencias y datasets</li>
                        <li>Fast.ai - Deep Learning</li>
                    </ul>
                </div>
                <div>
                    <h3>Comunidades</h3>
                    <ul style="color: #6b7280; font-size: 0.9rem;">
                        <li>GitHub - Proyectos open source</li>
                        <li>Stack Overflow - Resolución de dudas</li>
                        <li>Reddit r/MachineLearning</li>
                        <li>Discord - Servidores de IA</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    
    impacto: `
        <h1 style="font-size: 2rem; margin-bottom: 2rem;">Escala de Impacto de la IA en el Futuro</h1>
        
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #2563eb 100%); color: white; padding: 2rem; border-radius: 0.5rem; text-align: center; margin-bottom: 2rem;">
            <h2 style="font-size: 1.75rem; margin-bottom: 0.5rem;">Proyección 2025-2050</h2>
            <p style="font-size: 1.1rem;">Nivel de transformación en diferentes sectores</p>
        </div>

        <div class="impact-card">
            <div class="impact-header">
                <h3 class="level-critical">CRÍTICO - 95-100%</h3>
                <span class="impact-icon">🔴</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill progress-red" style="width: 98%;"></div>
            </div>
            <p><strong>Sectores:</strong> Salud, Ciberseguridad, Investigación Científica</p>
            <p style="color: #6b7280; font-size: 0.9rem; margin-top: 0.5rem;">
                Impacto transformacional total. Estos sectores dependerán casi completamente de IA para diagnósticos, descubrimiento de medicamentos, protección de datos y avances científicos.
            </p>
        </div>

        <div class="impact-card">
            <div class="impact-header">
                <h3 class="level-high">MUY ALTO - 80-94%</h3>
                <span class="impact-icon">🟠</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill progress-orange" style="width: 87%;"></div>
            </div>
            <p><strong>Sectores:</strong> Finanzas, Transporte, Manufactura, E-commerce</p>
            <p style="color: #6b7280; font-size: 0.9rem; margin-top: 0.5rem;">
                Automatización masiva. Trading algorítmico, vehículos autónomos, fábricas inteligentes y personalización total de la experiencia de compra.
            </p>
        </div>

        <div class="impact-card">
            <div class="impact-header">
                <h3 class="level-medium">ALTO - 60-79%</h3>
                <span class="impact-icon">🟡</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill progress-yellow" style="width: 70%;"></div>
            </div>
            <p><strong>Sectores:</strong> Educación, Entretenimiento, Marketing, Agricultura</p>
            <p style="color: #6b7280; font-size: 0.9rem; margin-top: 0.5rem;">
                Transformación significativa. Tutores personalizados con IA, contenido generado por IA, campañas híper-personalizadas y agricultura de precisión.
            </p>
        </div>

        <div class="impact-card">
            <div class="impact-header">
                <h3 class="level-moderate">MODERADO - 40-59%</h3>
                <span class="impact-icon">🟢</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill progress-green" style="width: 50%;"></div>
            </div>
            <p><strong>Sectores:</strong> Legal, Recursos Humanos, Inmobiliaria</p>
            <p style="color: #6b7280; font-size: 0.9rem; margin-top: 0.5rem;">
                Asistencia complementaria. IA como herramienta de apoyo en análisis de contratos, reclutamiento y valoración de propiedades, pero con supervisión humana importante.
            </p>
        </div>

        <div class="impact-card">
            <div class="impact-header">
                <h3 class="level-emerging">EMERGENTE - 20-39%</h3>
                <span class="impact-icon">🔵</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill progress-blue" style="width: 30%;"></div>
            </div>
            <p><strong>Sectores:</strong> Artes, Deportes, Gastronomía</p>
            <p style="color: #6b7280; font-size: 0.9rem; margin-top: 0.5rem;">
                Adopción temprana. La IA comienza a influir en creación artística, análisis deportivo y optimización de recetas, pero la creatividad humana sigue siendo central.
            </p>
        </div>

        <div class="grid grid-2" style="margin-top: 2rem;">
            <div style="background-color: #eff6ff; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #2563eb;">
                <h3 style="color: #1e40af; margin-bottom: 1rem;">Oportunidades Laborales</h3>
                <ul style="color: #374151;">
                    <li>✓ 97 millones de nuevos empleos en IA para 2025</li>
                    <li>✓ Salarios 30-50% superiores al promedio</li>
                    <li>✓ Demanda creciente en todas las industrias</li>
                    <li>✓ Trabajo remoto y flexibilidad</li>
                </ul>
            </div>
            <div style="background-color: #faf5ff; padding: 1.5rem; border-radius: 0.5rem; border-left: 4px solid #7c3aed;">
                <h3 style="color: #6b21a8; margin-bottom: 1rem;">Desafíos a Considerar</h3>
                <ul style="color: #374151;">
                    <li>⚠ Necesidad de actualización constante</li>
                    <li>⚠ Consideraciones éticas importantes</li>
                    <li>⚠ Regulaciones en evolución</li>
                    <li>⚠ Balance entre automatización y empleo</li>
                </ul>
            </div>
        </div>

        <div style="background: linear-gradient(135deg, #10b981 0%, #14b8a6 100%); color: white; padding: 2rem; border-radius: 0.5rem; text-align: center; margin-top: 2rem;">
            <h2 style="font-size: 1.75rem; margin-bottom: 1rem;">🚀 El Futuro es Ahora</h2>
            <p style="font-size: 1.1rem;">La IA no es solo el futuro, es el presente. Cada día que pasa, su impacto crece exponencialmente en todas las áreas de nuestra vida.</p>
        </div>
    `
};

// Función para cargar página
function loadPage(pageName) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = pages[pageName] || pages.inicio;
    
    // Actualizar navegación activa
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Event listeners para navegación
document.addEventListener('DOMContentLoaded', () => {
    // Cargar página inicial
    loadPage('inicio');
    
    // Agregar listeners a los enlaces
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page || e.target.closest('.nav-link').dataset.page;
            loadPage(page);
        });
    });
});



