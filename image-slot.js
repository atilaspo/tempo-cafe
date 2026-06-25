class ImageSlot extends HTMLElement {
  connectedCallback() {
    if (this.shadowRoot) return;

    const src = this.getAttribute('src');
    const placeholder = this.getAttribute('placeholder') || '';
    const root = this.attachShadow({ mode: 'open' });

    root.innerHTML = `
      <style>
        :host {
          display: block;
          position: relative;
          overflow: hidden;
          background: #E7E2D7;
        }
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .fallback {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          padding: 1rem;
          color: rgba(45, 58, 31, 0.55);
          font: 500 11px/1.4 Satoshi, system-ui, sans-serif;
          letter-spacing: 0.16em;
          text-align: center;
          text-transform: uppercase;
        }
      </style>
      ${src ? `<img src="${src}" alt="${placeholder}">` : `<span class="fallback">${placeholder}</span>`}
    `;

    const img = root.querySelector('img');
    if (img) {
      img.addEventListener('error', () => {
        root.innerHTML = `<style>
          :host{display:block;position:relative;overflow:hidden;background:#E7E2D7}
          .fallback{position:absolute;inset:0;display:grid;place-items:center;padding:1rem;color:rgba(45,58,31,.55);font:500 11px/1.4 Satoshi,system-ui,sans-serif;letter-spacing:.16em;text-align:center;text-transform:uppercase}
        </style><span class="fallback">${placeholder}</span>`;
      });
    }
  }
}

customElements.define('image-slot', ImageSlot);
