import app from './finance-worker.js';

const MOBILE_NAV = String.raw`
<style id="mobile-navigation-style">
  .mobile-module-menu{display:none}
  @media(max-width:820px){
    .sidebar{height:auto!important;padding:18px 16px 20px!important}
    .app-nav{display:none!important}
    .mobile-module-menu{display:block;margin:18px 0 16px;padding-top:16px;border-top:1px solid #2f6344}
    .mobile-module-menu label{display:block;margin:0 0 8px;color:#a7c6b1;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.06em}
    .mobile-module-menu select{width:100%;height:50px;border:1px solid #4a7b5c;border-radius:9px;padding:0 14px;background:#fff;color:#173d27;font-size:1rem;font-weight:800}
    .user-panel{padding-top:16px!important}
    .content{padding-top:24px!important}
  }
</style>
<script>
(function(){
  function buildMobileMenu(){
    const nav=document.querySelector('.app-nav');
    if(!nav||document.querySelector('.mobile-module-menu'))return;
    const wrap=document.createElement('div');
    wrap.className='mobile-module-menu';
    const label=document.createElement('label');
    label.htmlFor='mobile-module-select';
    label.textContent='Navegação';
    const select=document.createElement('select');
    select.id='mobile-module-select';
    select.setAttribute('aria-label','Escolha uma área do sistema');
    const buttons=[...nav.querySelectorAll('[data-view]')];
    buttons.forEach(button=>{
      const option=document.createElement('option');
      option.value=button.dataset.view;
      option.textContent=button.textContent.trim().replace(/\s+/g,' ');
      option.hidden=button.hidden;
      select.appendChild(option);
    });
    function sync(){
      buttons.forEach((button,index)=>{
        if(select.options[index])select.options[index].hidden=button.hidden;
        if(button.classList.contains('active'))select.value=button.dataset.view;
      });
    }
    select.addEventListener('change',()=>{
      const button=buttons.find(item=>item.dataset.view===select.value);
      if(button&&!button.hidden)button.click();
    });
    const observer=new MutationObserver(sync);
    buttons.forEach(button=>observer.observe(button,{attributes:true,attributeFilter:['class','hidden']}));
    wrap.append(label,select);
    nav.insertAdjacentElement('afterend',wrap);
    sync();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',buildMobileMenu);
  else buildMobileMenu();
})();
</script>`;

export default {
  async fetch(request, env, ctx) {
    const response = await app.fetch(request, env, ctx);
    const contentType = response.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) return response;

    const html = await response.text();
    if (!html.includes('class="app-shell"')) {
      return new Response(html, response);
    }

    const updated = html.includes('</body>')
      ? html.replace('</body>', MOBILE_NAV + '</body>')
      : html + MOBILE_NAV;

    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.set('cache-control', 'no-store');
    return new Response(updated, { status: response.status, statusText: response.statusText, headers });
  }
};
