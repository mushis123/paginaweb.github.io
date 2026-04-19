// Marcar enlace activo en nav
document.addEventListener('DOMContentLoaded', function () {
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === pagina) a.classList.add('activo');
  });
});

// Buscador funcional
function buscar() {
  const q = document.getElementById('inputBusqueda').value.trim().toLowerCase();
  const res = document.getElementById('resultadoBusqueda');
  if (!q) { res.innerHTML = ''; return; }

  const paginas = [
    { nombre: 'Inicio', url: '../index.html', desc: 'Página principal y presentación' },
    { nombre: 'Biografía', url: 'biografia.html', desc: 'Vida personal, familia y logros' },
    { nombre: 'Familia', url: 'familia.html', desc: 'Historia y datos de la familia' },
    { nombre: 'Estudios', url: 'estudios.html', desc: 'Experiencias y logros académicos' },
    { nombre: 'Materiales del Curso', url: 'materiales.html', desc: 'HTML5, CSS3, formularios y más' },
    { nombre: 'Álbum de Fotos', url: 'album.html', desc: 'Galería fotográfica personal' },
    { nombre: 'Descargas', url: 'descargas.html', desc: 'PDFs y recursos del curso' },
    { nombre: 'Contacto', url: 'contacto.html', desc: 'Formulario de contacto y redes' },
  ];

  const encontrados = paginas.filter(p =>
    p.nombre.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
  );

  if (encontrados.length === 0) {
    res.innerHTML = '<p style="color:rgba(255,255,255,0.4);font-size:12px;margin-top:8px;">Sin resultados para "' + q + '"</p>';
    return;
  }

  res.innerHTML = encontrados.map(p =>
    `<a href="${p.url}" style="display:block;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.07);text-decoration:none;">
      <span style="color:#41e86d;font-size:13px;font-weight:700;">${p.nombre}</span><br>
      <span style="color:rgba(255,255,255,0.5);font-size:11px;font-family:'Space Mono',monospace;">${p.desc}</span>
    </a>`
  ).join('');
}

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('inputBusqueda');
  if (input) {
    input.addEventListener('keyup', buscar);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') buscar();
    });
  }
  const btn = document.getElementById('btnBuscar');
  if (btn) btn.addEventListener('click', buscar);
});
