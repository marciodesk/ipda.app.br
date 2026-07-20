var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));

// worker.js
var _a;
var page = String.raw(_a || (_a = __template([`<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#14532d">
  <title>Sistema Administrativo | IPDA</title>
  <style>
    :root{--navy:#14532d;--blue:#15803d;--gold:#d7a92e;--ink:#243b2e;--muted:#607567;--line:#d5e5d9;--bg:#f0f7f2;--white:#fff;--green:#087a55;--red:#ba2d39}
    *{box-sizing:border-box}body{margin:0;font-family:Arial,"Helvetica Neue",sans-serif;background:var(--bg);color:var(--ink)}[hidden]{display:none!important}
    .auth-screen{min-height:100vh;display:grid;place-items:center;padding:24px;background:#eff8f1}.auth-card{width:min(360px,100%);background:#fff;border:1px solid #d4e4d8;border-radius:8px;padding:28px 22px;box-shadow:0 2px 5px #123d290d;text-align:center}.auth-card.request{width:min(520px,100%)}.auth-card h1{margin:0 0 6px;font-size:22px}.auth-card>p{margin:0 0 22px;color:#607567;font-size:13px}.auth-card form{padding:0}.auth-card label{text-align:left}.auth-card button{width:100%;background:#16803c;color:#fff;margin-top:2px}.auth-links{margin-top:20px;color:#607567;font-size:12px;line-height:1.55}.auth-links a{color:#147a3b;font-weight:700}.auth-message{min-height:18px;margin:12px 0 0!important;color:var(--red)!important;font-size:.82rem!important}.auth-message.success{color:var(--green)!important}.security-note{margin:0 0 16px;padding:12px;border-radius:7px;background:#e8f6ec;color:#147a3b;font-size:.78rem;line-height:1.45;text-align:left}.policy{margin:12px 0;border:1px solid #c8dacd;border-radius:7px;background:#f4fbf6;text-align:left}.policy summary{padding:11px 12px;font-size:.82rem;font-weight:800;cursor:pointer}.policy-content{padding:0 14px 13px;color:#4f6b58;font-size:.78rem;line-height:1.55}.policy-content p{margin:8px 0}.consent{display:flex!important;align-items:flex-start;gap:9px;margin:10px 4px 15px!important;font-size:.8rem!important;line-height:1.4}.consent input{width:17px;height:17px;min-width:17px;margin:1px 0 0;accent-color:#16803c}.user-panel{margin-top:auto;padding:18px 10px 0;border-top:1px solid #2f6344;color:#b8d1c0;font-size:.76rem;line-height:1.45}.user-panel strong{display:block;color:#fff}.user-panel button{width:100%;margin-top:10px;padding:9px;background:#24613d;color:#fff}.status-badge{display:inline-block;border-radius:99px;padding:5px 9px;font-size:.72rem;font-weight:800}.status-badge.pending{background:#fff3cd;color:#8a6200}.status-badge.approved{background:#dff7ed;color:#087a55}.status-badge.rejected{background:#ffe2e5;color:#a91f2c}.users-table select{min-width:110px;height:38px}.password-card{max-width:560px}
    .app-shell{display:grid;grid-template-columns:260px minmax(0,1fr);min-height:100vh}.sidebar{position:sticky;top:0;height:100vh;background:#0f3d25;color:#fff;padding:26px 16px;display:flex;flex-direction:column}.side-brand{padding:0 10px 24px;border-bottom:1px solid #2f6344}.side-brand strong{display:block;color:#86efac;font-size:.94rem}.side-brand span{display:block;color:#fff;font-size:1.3rem;font-weight:800;margin-top:5px}.side-brand small{display:block;color:#a7c6b1;margin-top:5px}.app-nav{display:flex;flex-direction:column;gap:7px;margin-top:24px}.nav-button{display:flex;align-items:center;gap:13px;width:100%;border-radius:8px;background:transparent;color:#f4fbf6;padding:13px 14px;text-align:left;white-space:nowrap}.nav-button:hover{background:#1b5134}.nav-button.active{background:#24613d;color:#fff}.nav-icon{width:21px;text-align:center;color:#86efac;font-size:1rem}.content{min-width:0;padding:34px}.content-inner{width:min(1120px,100%);margin:0 auto}.module-view[hidden]{display:none}.module-title{margin:0 0 18px}.module-title h2{margin:0 0 5px;font-size:1.5rem;color:#173d27}.module-title p{margin:0;color:var(--muted)}
    .card{background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 8px 24px rgba(20,83,45,.08);overflow:hidden}
    .card-head{padding:22px 24px;border-bottom:1px solid var(--line)}.card-head h2{margin:0 0 6px;font-size:1.17rem}.card-head p{margin:0;color:var(--muted);font-size:.91rem}.card+.card{margin-top:24px}
    form{padding:24px}.section-title{font-size:.78rem;color:var(--blue);text-transform:uppercase;letter-spacing:.08em;font-weight:800;margin:0 0 14px}
    .grid{display:grid;grid-template-columns:2fr 2fr 1fr;gap:16px}.financial{grid-template-columns:1fr 1fr 1fr 1fr;margin-top:6px}
    label{display:block;font-size:.86rem;font-weight:700;margin-bottom:7px}input,select{width:100%;height:46px;border:1px solid #c8dacd;border-radius:8px;padding:0 13px;font-size:1rem;color:var(--ink);background:#fff;outline:none;transition:.2s}
    input:focus,select:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(21,128,61,.16)}input[readonly]{background:#f0f7f4;color:var(--green);font-weight:800;border-color:#acd7c6}.church-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.full{grid-column:1/-1}.church-list{margin-top:18px;border-top:1px solid var(--line);padding-top:18px}.church-list h3{margin:0 0 10px;font-size:.96rem}.church-chip{display:inline-flex;gap:7px;align-items:center;background:#e8f5eb;border:1px solid #cfe4d4;border-radius:999px;padding:7px 11px;margin:0 7px 7px 0;font-size:.8rem}.church-chip small{color:var(--muted)}
    .divider{height:1px;background:var(--line);margin:26px 0}.money{position:relative}.money>span{position:absolute;left:13px;top:39px;color:var(--muted);font-size:.9rem;line-height:1}.money input{padding-left:42px}.money .hint{position:static;margin-top:7px;padding:0;max-width:100%}
    .balance-box.negative input{background:#fff4f4;color:var(--red);border-color:#e6afb4}.hint{display:block;color:var(--muted);font-size:.75rem;line-height:1.35;margin-top:6px}.document-field{margin-top:18px}.document-field input{height:auto;padding:11px;background:#f4fbf6}.actions{display:flex;justify-content:flex-end;gap:12px;margin-top:26px}
    button,.button-link{border:0;border-radius:8px;padding:12px 20px;font-weight:800;font-size:.93rem;cursor:pointer}.clear{background:#e6f2e9;color:var(--navy)}.save{background:var(--navy);color:#fff}.save:hover{background:#166534}.button-link{display:inline-block;padding:8px 11px;background:#e3f1e7;color:var(--navy);text-decoration:none;white-space:nowrap;font-size:.78rem}.table-action{padding:7px 10px;border:1px solid #d0e2d4;background:#fff;color:var(--navy);font-size:.78rem;margin:2px}.table-action.danger{background:#fff0f0;color:#b4232e;border-color:#ffc9ce}.table-action:hover{filter:brightness(.97)}
    .message{display:none;margin-top:18px;padding:12px 14px;border-radius:8px;background:#eaf7f1;color:#086347;font-size:.9rem;font-weight:700}.message.show{display:block}
    .recent{margin-top:24px}.recent-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.recent h2{font-size:1.05rem;margin:0}.empty{color:var(--muted);text-align:center;padding:28px}
    .table-wrap{overflow:auto;background:#fff;border:1px solid var(--line);border-radius:12px}table{width:100%;border-collapse:collapse;min-width:760px}th,td{padding:13px 15px;text-align:left;border-bottom:1px solid #e4eee7;font-size:.87rem}th{background:#f4fbf6;color:#4f6b58;font-size:.75rem;text-transform:uppercase}td.amount{font-weight:700;white-space:nowrap}.positive{color:var(--green)}.negative{color:var(--red)}.responsibility-box{display:flex;gap:12px;flex-wrap:wrap}.check-option{display:flex;align-items:center;gap:9px;margin:0;border:1px solid #c8dacd;border-radius:9px;padding:11px 15px;background:#f4fbf6;cursor:pointer}.check-option input{width:18px;height:18px;margin:0;accent-color:var(--navy)}.role-badge{display:inline-block;padding:4px 8px;border-radius:99px;background:#e3f1e7;color:var(--navy);font-size:.72rem;font-weight:800;margin:2px}.photo-capture{display:flex;align-items:center;gap:16px;border:1px dashed #a8bdad;border-radius:10px;padding:15px;background:#f4fbf6}.photo-input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.photo-options{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.photo-button{display:inline-flex;align-items:center;gap:7px;margin:0;padding:11px 15px;border-radius:8px;background:var(--navy);color:#fff;font-size:.86rem;font-weight:800;cursor:pointer}.photo-button.upload{background:#fff;color:var(--navy);border:1px solid #c6d9ca}.photo-name{width:100%;color:var(--muted);font-size:.78rem}.photo-preview{width:92px;height:112px;object-fit:cover;border-radius:8px;border:1px solid var(--line);background:#e4eee7}.member-avatar{width:44px;height:52px;object-fit:cover;border-radius:6px;border:1px solid var(--line);display:block}.avatar-empty{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:#e3f1e7;color:var(--navy);font-weight:800}
    .dash-toolbar{display:flex;align-items:end;justify-content:space-between;gap:16px;margin-bottom:18px}.dash-toolbar label{margin:0}.dash-toolbar input{width:190px;background:#123b28;color:#fff;border-color:#2b6142}.live-state{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:.82rem}.live-dot{width:9px;height:9px;border-radius:50%;background:#18b981;box-shadow:0 0 0 5px #18b98122}.market{background:#0b2f1f;border:1px solid #28583c;border-radius:14px;padding:18px;color:#e8f5eb;box-shadow:0 12px 30px #0b2f1f24}.ticker{overflow:hidden;white-space:nowrap;color:#86efac;font-size:.78rem;letter-spacing:.09em;border-bottom:1px solid #2c5d40;padding-bottom:13px;margin-bottom:16px}.market-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.quote{background:#123d29;border:1px solid #28583c;border-radius:10px;padding:15px}.quote small{display:block;color:#a7c6b1;text-transform:uppercase;font-size:.68rem;letter-spacing:.07em}.quote strong{display:block;margin-top:8px;font-size:1.28rem}.quote .up{color:#32d296}.quote .down{color:#ff6577}.closing{margin-top:16px;background:#123d29;border-radius:10px;padding:15px}.closing-head{display:flex;justify-content:space-between;font-size:.83rem}.progress{height:10px;background:#2b5e40;border-radius:99px;overflow:hidden;margin-top:10px}.progress span{display:block;height:100%;background:linear-gradient(90deg,#22a052,#32d296);border-radius:99px;transition:width .4s}.status-pill{display:inline-block;border-radius:99px;padding:5px 9px;font-weight:800;font-size:.72rem}.status-pill.closed{background:#dff7ed;color:#087a55}.status-pill.pending{background:#fff0f1;color:#ba2d39}.dashboard-list{margin-top:22px}.dashboard-list h3{margin:0 0 11px}.pulse-time{font-variant-numeric:tabular-nums}.registration-deadline{margin-top:12px;padding:14px 16px;border:1px solid #d7a92e;border-radius:9px;background:#fff8df;color:#6f5100;font-size:.88rem;line-height:1.45}.registration-deadline strong{display:block;margin-top:4px;color:#14532d;font-size:1rem}
    @media(max-width:820px){.app-shell{display:block}.sidebar{position:relative;height:auto;padding:18px 12px}.side-brand{padding:0 7px 15px}.side-brand span{font-size:1.1rem}.app-nav{flex-direction:row;overflow:auto;margin-top:14px;gap:5px}.nav-button{width:auto;padding:11px 13px;font-size:.8rem}.nav-icon{display:none}.content{padding:20px 12px 42px}.grid,.financial,.church-grid{grid-template-columns:1fr}.market-grid{grid-template-columns:1fr 1fr}.dash-toolbar{align-items:stretch;flex-direction:column}.full{grid-column:auto}form,.card-head{padding:19px}.actions{flex-direction:column-reverse}.actions button{width:100%}}
  </style>
</head>
<body>
  <section class="auth-screen" id="auth-screen">
    <div class="auth-card" id="login-card"><h1>FINANCEIRO IPDA</h1><p>Entre com login e senha</p><form id="login-form"><label>Login<input name="login" autocomplete="username" required></label><label>Senha<input name="password" type="password" autocomplete="current-password" required></label><button type="submit">Entrar</button><p class="auth-message" id="login-message" role="status"></p></form><div class="auth-links">FINANCEIRO IPDA<br><a href="#" id="show-request">Solicitar acesso</a><br><a href="#" id="forgot-password">Esqueci minha senha</a></div></div>
    <div class="auth-card request" id="request-card" hidden><h1>Solicitar acesso</h1><p>Crie seu usu\xE1rio. Um administrador libera o perfil para uso.</p><form id="request-form"><label>Nome completo<input name="name" autocomplete="name" required></label><label>Login<input name="login" autocomplete="username" minlength="3" required></label><label>E-mail<input name="email" type="email" autocomplete="email" required></label><label>Telefone<input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(92) 99999-9999"></label><label>Perfil solicitado<select name="requested_role"><option value="member">Membro \u2014 enviar relat\xF3rios</option><option value="agent">Agente \u2014 igrejas, membros e envio de relat\xF3rios</option></select></label><label>Senha<input name="password" type="password" autocomplete="new-password" minlength="8" required></label><label>Confirmar senha<input name="confirm_password" type="password" autocomplete="new-password" minlength="8" required></label><details class="policy"><summary>Termos de Uso</summary><div class="policy-content"><p>O acesso \xE9 pessoal, intransfer\xEDvel e destinado somente \xE0s atividades autorizadas da Igreja Pentecostal Deus \xE9 Amor.</p><p>O usu\xE1rio \xE9 respons\xE1vel pela veracidade das informa\xE7\xF5es e documentos enviados, pelo sigilo de sua senha e por comunicar qualquer suspeita de uso indevido.</p><p>\xC9 proibido compartilhar credenciais, tentar acessar fun\xE7\xF5es n\xE3o autorizadas ou usar o sistema para finalidade diferente da atividade institucional. A administra\xE7\xE3o poder\xE1 suspender ou revogar acessos para proteger o sistema e seus dados.</p></div></details><label class="consent"><input name="accept_terms" type="checkbox" value="1" required> Li e concordo com os Termos de Uso.</label><details class="policy"><summary>Pol\xEDtica de Privacidade</summary><div class="policy-content"><p>Nome, login, e-mail, telefone e registros t\xE9cnicos de acesso s\xE3o tratados para identifica\xE7\xE3o, aprova\xE7\xE3o, seguran\xE7a, auditoria e suporte.</p><p>As senhas s\xE3o armazenadas somente em formato derivado e n\xE3o podem ser lidas pela administra\xE7\xE3o. Relat\xF3rios e documentos financeiros ficam sujeitos ao controle de acesso por perfil.</p><p>Os dados s\xE3o mantidos pelo per\xEDodo necess\xE1rio \xE0s atividades institucionais e \xE0s obriga\xE7\xF5es aplic\xE1veis. Solicita\xE7\xF5es de corre\xE7\xE3o ou esclarecimento devem ser encaminhadas \xE0 administra\xE7\xE3o respons\xE1vel pelo sistema.</p></div></details><label class="consent"><input name="accept_privacy" type="checkbox" value="1" required> Li e concordo com a Pol\xEDtica de Privacidade.</label><button type="submit">Enviar solicita\xE7\xE3o</button><p class="auth-message" id="request-message" role="status"></p></form><div class="auth-links"><a href="#" id="show-login">Voltar para o login</a></div></div>
    <div class="auth-card" id="reset-card" hidden><h1>Recuperar senha</h1><p>Informe os dados do seu usu\xE1rio e escolha uma nova senha.</p><div class="security-note">Por seguran\xE7a, a nova senha ser\xE1 ativada somente depois da aprova\xE7\xE3o do administrador.</div><form id="reset-form"><label>Login<input name="login" autocomplete="username" required></label><label>E-mail cadastrado<input name="email" type="email" autocomplete="email" required></label><label>Nova senha<input name="new_password" type="password" autocomplete="new-password" minlength="8" required></label><label>Confirmar nova senha<input name="confirm_password" type="password" autocomplete="new-password" minlength="8" required></label><button type="submit">Solicitar troca de senha</button><p class="auth-message" id="reset-message" role="status"></p></form><div class="auth-links"><a href="#" id="reset-show-login">Voltar para o login</a></div></div>
  </section>
  <div class="app-shell" id="app-shell" hidden>
  <aside class="sidebar"><div class="side-brand"><strong>Sistema da Igreja</strong><span>Financeiro</span><small>IPDA \u2022 Administra\xE7\xE3o</small></div><nav class="app-nav" aria-label="Menu principal"><button class="nav-button active" type="button" data-view="dashboard" data-roles="admin,agent"><span class="nav-icon" aria-hidden="true">\u2301</span>Dashboard</button><button class="nav-button" type="button" data-view="churches" data-roles="admin,agent"><span class="nav-icon" aria-hidden="true">\u2302</span>Igrejas</button><button class="nav-button" type="button" data-view="finance" data-roles="admin,agent,member"><span class="nav-icon" aria-hidden="true">\u25A3</span>Relat\xF3rios Financeiros</button><button class="nav-button" type="button" data-view="members" data-roles="admin,agent"><span class="nav-icon" aria-hidden="true">\u25CE</span>Cadastro de Membros</button><button class="nav-button" type="button" data-view="users" data-roles="admin"><span class="nav-icon" aria-hidden="true">\u25C9</span>Usu\xE1rios</button><button class="nav-button" type="button" data-view="password" data-roles="admin,agent,member"><span class="nav-icon" aria-hidden="true">\u2318</span>Minha senha</button></nav><div class="user-panel"><strong id="session-name">\u2014</strong><span id="session-role">\u2014</span><button id="logout-button" type="button">Sair</button></div></aside>
  <main class="content"><div class="content-inner">
    <div class="module-view" id="view-dashboard">
      <div class="module-title"><h2>Fechamento Mensal</h2><p>Acompanhe em tempo real o envio dos relat\xF3rios de todas as igrejas.</p></div>
      <div class="dash-toolbar"><label>M\xEAs de refer\xEAncia<input type="month" id="dashboard-month"><small class="hint">Selecione livremente qualquer m\xEAs para auditoria.</small></label><a class="button-link" id="dashboard-csv" href="#">Exportar auditoria CSV</a><div class="live-state"><span class="live-dot"></span><span>Atualiza\xE7\xE3o autom\xE1tica \u2022 <span class="pulse-time" id="dashboard-updated">carregando\u2026</span></span></div></div>
      <section class="market"><div class="ticker" id="market-ticker">MERCADO FINANCEIRO IPDA \u2022 FECHAMENTO MENSAL \u2022 ATUALIZA\xC7\xC3O EM TEMPO REAL</div><div class="market-grid">
        <div class="quote"><small>Igrejas fechadas</small><strong class="up" id="metric-closed">0</strong></div><div class="quote"><small>Igrejas pendentes</small><strong class="down" id="metric-pending">0</strong></div>
        <div class="quote"><small>Entradas gerais</small><strong class="up" id="metric-income">R$ 0,00</strong></div><div class="quote"><small>Sa\xEDdas gerais</small><strong class="down" id="metric-expenses">R$ 0,00</strong></div>
        <div class="quote"><small>Saldo consolidado</small><strong id="metric-balance">R$ 0,00</strong></div><div class="quote"><small>D\xEDzimos informados</small><strong id="metric-tithe">R$ 0,00</strong></div><div class="quote"><small>Transfer\xEAncia para o pr\xF3ximo m\xEAs</small><strong id="metric-transferred">R$ 0,00</strong></div>
        <div class="quote"><small>Total de igrejas</small><strong id="metric-total">0</strong></div><div class="quote"><small>Percentual fechado</small><strong class="up" id="metric-percent">0%</strong></div>
      </div><div class="closing"><div class="closing-head"><span>Progresso do fechamento</span><strong id="closing-label">0 de 0 igrejas</strong></div><div class="progress"><span id="closing-progress" style="width:0%"></span></div></div></section>
      <section class="dashboard-list"><h3>Situa\xE7\xE3o por igreja</h3><div class="table-wrap" id="dashboard-churches"><div class="empty">Carregando painel\u2026</div></div></section>
    </div>
    <div class="module-view" id="view-churches" hidden>
      <div class="module-title"><h2>Igrejas</h2><p>Cadastre e organize a estrutura das igrejas.</p><div class="registration-deadline">Prazo para cadastro: 18/09/2026.<strong id="church-registration-countdown">Calculando tempo restante...</strong></div></div>
    <section class="card">
      <div class="card-head"><h2>Cadastro de Igrejas e Filiais</h2><p>Cadastre classifica\xE7\xE3o, endere\xE7o e c\xF3digo TOTVS da igreja.</p></div>
      <form id="church-form">
        <input type="hidden" id="church-edit-id" name="id">
        <div class="church-grid">
          <div><label for="church-name">Nome da igreja ou filial*</label><input id="church-name" name="name" required placeholder="Ex.: IPDA Cidade Nova"></div>
          <div><label for="church-totvs">C\xF3digo TOTVS</label><input id="church-totvs" name="totvs_code" placeholder="C\xF3digo da unidade"></div>
          <div><label for="church-classification">Classifica\xE7\xE3o*</label><select id="church-classification" name="classification" required><option value="">Selecione</option><option>Local</option><option>Setorial</option><option>Estadual</option><option>Regional</option><option>Central</option></select></div>
          <div><label for="parent-church">Pertence a qual igreja?*</label><select id="parent-church" name="parent_church_id" required><option value="">Selecione uma igreja j\xE1 cadastrada</option></select><small class="hint">Livre somente para classifica\xE7\xE3o Estadual.</small></div>
          <div><label for="church-state">Estado</label><select id="church-state" name="state"><option value="">Selecione</option><option value="AC">Acre</option><option value="AL">Alagoas</option><option value="AP">Amap\xE1</option><option value="AM">Amazonas</option><option value="BA">Bahia</option><option value="CE">Cear\xE1</option><option value="DF">Distrito Federal</option><option value="ES">Esp\xEDrito Santo</option><option value="GO">Goi\xE1s</option><option value="MA">Maranh\xE3o</option><option value="MT">Mato Grosso</option><option value="MS">Mato Grosso do Sul</option><option value="MG">Minas Gerais</option><option value="PA">Par\xE1</option><option value="PB">Para\xEDba</option><option value="PR">Paran\xE1</option><option value="PE">Pernambuco</option><option value="PI">Piau\xED</option><option value="RJ">Rio de Janeiro</option><option value="RN">Rio Grande do Norte</option><option value="RS">Rio Grande do Sul</option><option value="RO">Rond\xF4nia</option><option value="RR">Roraima</option><option value="SC">Santa Catarina</option><option value="SP">S\xE3o Paulo</option><option value="SE">Sergipe</option><option value="TO">Tocantins</option></select></div>
          <div class="full"><label for="church-address">Endere\xE7o da igreja*</label><input id="church-address" name="address" required placeholder="Rua, avenida ou comunidade"></div>
          <div><label for="church-neighborhood">Bairro</label><input id="church-neighborhood" name="neighborhood"></div>
          <div><label for="church-city">Cidade</label><input id="church-city" name="city"></div>
          <div><label for="church-postal">CEP</label><input id="church-postal" name="postal_code" inputmode="numeric" placeholder="00000-000"></div>
          <div><label for="church-number">N\xFAmero</label><input id="church-number" name="address_number"></div>
          <div class="full"><label for="church-reference">Ponto de refer\xEAncia</label><input id="church-reference" name="reference_point"></div>
        </div>
        <div class="actions"><button class="clear" id="cancel-church-edit" type="button" hidden>Cancelar edi\xE7\xE3o</button><button class="clear" type="reset">Limpar</button><button class="save" type="submit">Salvar igreja</button></div>
        <div class="message" id="church-message" role="status">Igreja salva com sucesso.</div>
        <div class="church-list"><div class="recent-head"><h3>Igrejas cadastradas</h3><span class="hint">Edite ou exclua igrejas cadastradas.</span></div><div class="table-wrap" id="church-list"><div class="empty">Carregando igrejas\u2026</div></div></div>
      </form>
    </section>
    </div>
    <div class="module-view" id="view-finance" hidden>
      <div class="module-title"><h2>Relat\xF3rios Financeiros</h2><p>Registre movimenta\xE7\xF5es, documentos e exporte relat\xF3rios.</p></div>
    <section class="card">
      <div class="card-head"><h2>Novo relat\xF3rio financeiro</h2><p>Preencha os dados da igreja e os valores do per\xEDodo.</p></div>
      <form id="financial-form">
        <p class="section-title">Identifica\xE7\xE3o</p>
        <div class="grid">
          <div><label for="church">Nome da igreja</label><select id="church" name="church_id" required><option value="">Cadastre ou selecione uma igreja</option></select></div>
          <div><label for="responsible">Respons\xE1vel pelo relat\xF3rio</label><input id="responsible" name="responsible" autocomplete="name" required placeholder="Nome completo"></div>
          <div><label for="members">Membros ativos</label><input id="members" name="members" type="number" min="0" step="1" required placeholder="0"></div>
        </div>
        <div class="divider"></div>
        <p class="section-title">Movimenta\xE7\xE3o</p>
        <div class="grid financial">
          <div class="money"><label for="income">Entradas</label><span>R$</span><input id="income" name="income" inputmode="decimal" required placeholder="0,00"></div>
          <div class="money"><label for="expenses">Sa\xEDdas</label><span>R$</span><input id="expenses" name="expenses" inputmode="decimal" required placeholder="0,00"></div>
          <div class="money balance-box" id="balance-box"><label for="balance">Saldo (entradas \u2212 sa\xEDdas)</label><span>R$</span><input id="balance" name="balance" readonly value="0,00" aria-live="polite"></div>
          <div class="money"><label for="tithe">D\xEDzimo</label><span>R$</span><input id="tithe" name="tithe" inputmode="decimal" placeholder="0,00"><small class="hint">Valor informativo; n\xE3o entra no c\xE1lculo do saldo.</small></div><div class="money"><label for="transferred">Transfer\xEAncia para o pr\xF3ximo m\xEAs</label><span>R$</span><input id="transferred" name="transferred" inputmode="decimal" placeholder="0,00"><small class="hint">Valor reservado para despesas b\xE1sicas da igreja no pr\xF3ximo m\xEAs, como copos e material de limpeza. N\xE3o representa transfer\xEAncia banc\xE1ria e n\xE3o altera o c\xE1lculo do saldo.</small></div>
        </div>
        <div class="document-field"><label for="documents">Inserir documentos*</label><input id="documents" name="documents" type="file" accept=".pdf,image/jpeg,image/png,image/webp" multiple required><small class="hint">Obrigat\xF3rio: anexe pelo menos um comprovante em PDF, JPG, PNG ou WEBP.</small></div>
        <div class="actions"><button class="clear" type="reset">Limpar</button><button class="save" type="submit">Salvar relat\xF3rio</button></div>
        <div class="message" id="message" role="status">Relat\xF3rio e documentos salvos com sucesso.</div>
      </form>
    </section>
    <section class="recent" id="recent-reports" aria-labelledby="recent-title"><div class="recent-head"><h2 id="recent-title">Relat\xF3rios recentes</h2></div><div class="table-wrap" id="reports"></div></section>
    </div>
    <div class="module-view" id="view-members" hidden>
      <div class="module-title"><h2>Cadastro de Membros</h2><p>Cadastre membros e vincule cada pessoa \xE0 sua igreja.</p></div>
      <section class="card"><div class="card-head"><h2 id="member-form-title">Novo membro</h2><p>Informe os dados principais do membro.</p></div><form id="member-form"><input id="member-edit-id" type="hidden"><div class="church-grid">
        <div><label for="member-name">Nome completo*</label><input id="member-name" name="full_name" required autocomplete="name"></div>
        <div><label for="member-church">Igreja*</label><select id="member-church" name="church_id" required><option value="">Selecione uma igreja</option></select></div>
        <div><label for="member-cpf">CPF</label><input id="member-cpf" name="cpf" inputmode="numeric" placeholder="000.000.000-00"></div>
        <div><label for="member-phone">Telefone</label><input id="member-phone" name="phone" inputmode="tel" placeholder="(92) 99999-9999"></div>
        <div><label for="member-birth">Data de nascimento</label><input id="member-birth" name="birth_date" type="date"></div>
        <div><label for="member-role">Fun\xE7\xE3o ministerial*</label><select id="member-role" name="ministry_role" required><option value="">Selecione</option><option>Cooperador</option><option>Obreiro</option><option>Di\xE1cono</option><option>Membro</option><option>Presb\xEDtero</option><option>Pastor</option></select></div>
        <div><label for="member-status">Situa\xE7\xE3o*</label><select id="member-status" name="status" required><option>Ativo</option><option>Inativo</option></select></div>
        <div class="full"><label>Responsabilidade na igreja</label><div class="responsibility-box"><label class="check-option"><input id="member-leader" name="is_leader" type="checkbox" value="1"> Dirigente</label><label class="check-option"><input id="member-financial" name="is_financial" type="checkbox" value="1"> Financeiro</label></div></div>
        <div class="full"><label>Foto do membro</label><div class="photo-capture"><img class="photo-preview" id="member-photo-preview" alt="Pr\xE9via da foto" hidden><div class="photo-options"><input class="photo-input" id="member-photo-camera" type="file" accept="image/jpeg,image/png,image/webp" capture="environment"><input class="photo-input" id="member-photo-upload" type="file" accept="image/jpeg,image/png,image/webp"><label class="photo-button" for="member-photo-camera">\u{1F4F7} Tirar foto</label><label class="photo-button upload" for="member-photo-upload">\u2B06 Enviar foto</label><span class="photo-name" id="member-photo-name">Nenhuma foto selecionada</span><small class="hint">JPG, PNG ou WEBP de at\xE9 5 MB.</small></div></div></div>
      </div><div class="actions"><button class="clear" type="reset">Limpar</button><button class="clear" id="cancel-member-edit" type="button" hidden>Cancelar edi\xE7\xE3o</button><button class="save" type="submit">Salvar membro</button></div><div class="message" id="member-message" role="status">Membro salvo com sucesso.</div></form></section>
      <section class="recent"><div class="recent-head"><h2>Membros cadastrados</h2></div><div class="table-wrap" id="member-list"><div class="empty">Carregando membros\u2026</div></div></section>
    </div>
    <div class="module-view" id="view-users" hidden><div class="module-title"><h2>Usu\xE1rios e aprova\xE7\xF5es</h2><p>Aprove solicita\xE7\xF5es e defina o n\xEDvel de acesso de cada pessoa.</p></div><section class="card"><div class="card-head"><h2>Controle de acesso</h2><p>Administrador: acesso total. Agente: igrejas, membros e envio de relat\xF3rios, sem downloads. Membro: somente envio de relat\xF3rios.</p></div><div class="table-wrap users-table" id="users-list"><div class="empty">Carregando usu\xE1rios\u2026</div></div><div class="message" id="users-message" role="status"></div></section><section class="card"><div class="card-head"><h2>Solicita\xE7\xF5es de nova senha</h2><p>A nova senha somente entra em vigor depois da aprova\xE7\xE3o administrativa.</p></div><div class="table-wrap users-table" id="password-resets-list"><div class="empty">Carregando solicita\xE7\xF5es\u2026</div></div><div class="message" id="password-resets-message" role="status"></div></section></div>
    <div class="module-view" id="view-password" hidden><div class="module-title"><h2>Minha senha</h2><p>Atualize sua senha de acesso com seguran\xE7a.</p></div><section class="card password-card"><div class="card-head"><h2>Alterar senha</h2><p>Use no m\xEDnimo 8 caracteres.</p></div><form id="password-form"><label>Senha atual<input name="current_password" type="password" autocomplete="current-password" required></label><label>Nova senha<input name="new_password" type="password" autocomplete="new-password" minlength="8" required></label><label>Confirmar nova senha<input name="confirm_password" type="password" autocomplete="new-password" minlength="8" required></label><div class="actions"><button class="save" type="submit">Alterar senha</button></div><div class="message" id="password-message" role="status"></div></form></section></div>
  </div></main>
  </div>
  <script>
    const form=document.querySelector('#financial-form'),churchForm=document.querySelector('#church-form'),churchEditId=document.querySelector('#church-edit-id'),cancelChurchEdit=document.querySelector('#cancel-church-edit'),memberForm=document.querySelector('#member-form'),memberPhotoCamera=document.querySelector('#member-photo-camera'),memberPhotoUpload=document.querySelector('#member-photo-upload'),memberPhotoPreview=document.querySelector('#member-photo-preview'),memberPhotoName=document.querySelector('#member-photo-name'),churchSelect=document.querySelector('#church'),memberChurchSelect=document.querySelector('#member-church'),memberList=document.querySelector('#member-list'),memberMessage=document.querySelector('#member-message'),classificationSelect=document.querySelector('#church-classification'),parentChurchSelect=document.querySelector('#parent-church'),churchList=document.querySelector('#church-list'),churchMessage=document.querySelector('#church-message'),income=document.querySelector('#income'),expenses=document.querySelector('#expenses'),tithe=document.querySelector('#tithe'),transferred=document.querySelector('#transferred'),documents=document.querySelector('#documents'),balance=document.querySelector('#balance'),balanceBox=document.querySelector('#balance-box'),reports=document.querySelector('#reports'),message=document.querySelector('#message'),saveButton=form.querySelector('.save');
    const memberEditId=document.querySelector('#member-edit-id'),cancelMemberEdit=document.querySelector('#cancel-member-edit'),memberFormTitle=document.querySelector('#member-form-title');
    let selectedMemberPhoto=null;
    let membersCache=[];
    let churchesCache=[];
    let currentUser=null,editingReportId='',editingReportDate='',reportsCache=[];
    const authScreen=document.querySelector('#auth-screen'),appShell=document.querySelector('#app-shell'),loginCard=document.querySelector('#login-card'),requestCard=document.querySelector('#request-card'),resetCard=document.querySelector('#reset-card'),loginForm=document.querySelector('#login-form'),requestForm=document.querySelector('#request-form'),resetForm=document.querySelector('#reset-form'),loginMessage=document.querySelector('#login-message'),requestMessage=document.querySelector('#request-message'),resetMessage=document.querySelector('#reset-message'),usersList=document.querySelector('#users-list'),usersMessage=document.querySelector('#users-message'),passwordResetsList=document.querySelector('#password-resets-list'),passwordResetsMessage=document.querySelector('#password-resets-message'),passwordForm=document.querySelector('#password-form'),passwordMessage=document.querySelector('#password-message');
    async function authApi(path,options={}){const response=await fetch('/financeiro/api/'+path,{credentials:'same-origin',...options});let data={};try{data=await response.json()}catch{}if(!response.ok)throw new Error(data.error||'N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.');return data}
    function switchAuth(view='login'){loginCard.hidden=view!=='login';requestCard.hidden=view!=='request';resetCard.hidden=view!=='reset';loginMessage.textContent='';requestMessage.textContent='';resetMessage.textContent=''}
    document.querySelector('#show-request').addEventListener('click',e=>{e.preventDefault();switchAuth('request')});
    document.querySelector('#show-login').addEventListener('click',e=>{e.preventDefault();switchAuth('login')});
    document.querySelector('#reset-show-login').addEventListener('click',e=>{e.preventDefault();switchAuth('login')});
    document.querySelector('#forgot-password').addEventListener('click',e=>{e.preventDefault();switchAuth('reset')});
    loginForm.addEventListener('submit',async e=>{e.preventDefault();loginMessage.textContent='Entrando\u2026';try{const body=JSON.stringify(Object.fromEntries(new FormData(loginForm).entries()));const data=await authApi('login',{method:'POST',headers:{'content-type':'application/json'},body});loginForm.reset();enterApp(data.user)}catch(error){loginMessage.textContent=error.message}});
    requestForm.addEventListener('submit',async e=>{e.preventDefault();requestMessage.className='auth-message';requestMessage.textContent='Enviando\u2026';try{const payload=Object.fromEntries(new FormData(requestForm).entries());if(payload.password!==payload.confirm_password)throw new Error('As senhas n\xE3o conferem.');await authApi('solicitar-acesso',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});requestForm.reset();requestMessage.className='auth-message success';requestMessage.textContent='Solicita\xE7\xE3o enviada. Aguarde a aprova\xE7\xE3o interna.'}catch(error){requestMessage.textContent=error.message}});
    resetForm.addEventListener('submit',async e=>{e.preventDefault();resetMessage.className='auth-message';resetMessage.textContent='Enviando\u2026';try{const payload=Object.fromEntries(new FormData(resetForm).entries());if(payload.new_password!==payload.confirm_password)throw new Error('As novas senhas n\xE3o conferem.');await authApi('solicitar-nova-senha',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});resetForm.reset();resetMessage.className='auth-message success';resetMessage.textContent='Solicita\xE7\xE3o enviada. Se os dados conferirem, o administrador poder\xE1 aprovar a nova senha.'}catch(error){resetMessage.textContent=error.message}});
    document.querySelector('#logout-button').addEventListener('click',async()=>{try{await authApi('logout',{method:'POST'})}catch{}window.location.replace('/financeiro')});
    const CHURCH_REGISTRATION_END=new Date('2026-09-19T00:00:00-04:00').getTime();
    function churchRegistrationOpen(){return Date.now()<CHURCH_REGISTRATION_END}
    function allowedViews(){const views=currentUser?.role==='admin'?['dashboard','churches','finance','members','users','password']:currentUser?.role==='agent'?['dashboard','churches','finance','members','password']:['finance','password'];return churchRegistrationOpen()?views:views.filter(view=>view!=='churches')}
    function updateChurchRegistrationAvailability(){const open=churchRegistrationOpen(),button=document.querySelector('[data-view="churches"]'),view=document.querySelector('#view-churches'),countdown=document.querySelector('#church-registration-countdown');if(button)button.hidden=!open||!button.dataset.roles.split(',').includes(currentUser?.role||'');if(!open){if(view)view.hidden=true;if(location.hash==='#churches'&&currentUser)showModule(allowedViews()[0]);return}const remaining=Math.max(0,CHURCH_REGISTRATION_END-Date.now()),days=Math.floor(remaining/86400000),hours=Math.floor(remaining%86400000/3600000),minutes=Math.floor(remaining%3600000/60000),seconds=Math.floor(remaining%60000/1000);if(countdown)countdown.textContent=days+' dias, '+hours+'h, '+minutes+'min e '+seconds+'s restantes.'}
    function enterApp(user){currentUser=user;authScreen.hidden=true;appShell.hidden=false;document.querySelector('#session-name').textContent=user.name;document.querySelector('#session-role').textContent={admin:'Administrador',agent:'Agente',member:'Membro'}[user.role]||user.role;document.querySelectorAll('[data-roles]').forEach(el=>el.hidden=!el.dataset.roles.split(',').includes(user.role));updateChurchRegistrationAvailability();dashboardCsv.hidden=user.role!=='admin';document.querySelector('#recent-reports').hidden=user.role!=='admin';if(user.role==='member'&&!form.responsible.value)form.responsible.value=user.name;loadChurches();const preferred=location.hash.slice(1);showModule(allowedViews().includes(preferred)?preferred:allowedViews()[0])}
    async function initializeSession(){try{const data=await authApi('session');enterApp(data.user)}catch{authScreen.hidden=false;appShell.hidden=true}}
    async function loadUsers(){usersList.innerHTML='<div class="empty">Carregando usu\xE1rios\u2026</div>';try{const users=await authApi('usuarios');usersList.innerHTML=users.length?'<table><thead><tr><th>A\xE7\xF5es</th><th>Status</th><th>Nome</th><th>Login</th><th>E-mail</th><th>Telefone</th><th>Perfil</th><th>Consentimentos</th><th>Solicitado em</th></tr></thead><tbody>'+users.map(u=>{const roles=['member','agent','admin'].map(role=>'<option value="'+role+'"'+(u.role===role?' selected':'')+'>'+({member:'Membro',agent:'Agente',admin:'Administrador'}[role])+'</option>').join('');const status={pending:'Pendente',approved:'Aprovado',rejected:'Reprovado'}[u.status]||u.status,consent=u.terms_accepted_at&&u.privacy_accepted_at?'Aceitos \u2022 '+(u.policy_version||'vers\xE3o registrada'):'Cadastro anterior \xE0 pol\xEDtica';return '<tr><td><button class="table-action" data-user-action="approve" data-user-id="'+escapeHtml(u.id)+'">Aprovar</button><button class="table-action danger" data-user-action="reject" data-user-id="'+escapeHtml(u.id)+'">Reprovar</button><button class="table-action danger" data-user-action="delete" data-user-id="'+escapeHtml(u.id)+'">Excluir</button></td><td><span class="status-badge '+escapeHtml(u.status)+'">'+escapeHtml(status)+'</span></td><td><strong>'+escapeHtml(u.name)+'</strong></td><td>'+escapeHtml(u.login)+'</td><td>'+escapeHtml(u.email||'\u2014')+'</td><td>'+escapeHtml(u.phone||'\u2014')+'</td><td><select data-user-role="'+escapeHtml(u.id)+'">'+roles+'</select></td><td>'+escapeHtml(consent)+'</td><td>'+escapeHtml(new Date(u.created_at).toLocaleString('pt-BR'))+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">Nenhuma solicita\xE7\xE3o encontrada.</div>'}catch(error){usersList.innerHTML='<div class="empty">'+escapeHtml(error.message)+'</div>'}}
    async function loadPasswordResets(){passwordResetsList.innerHTML='<div class="empty">Carregando solicita\xE7\xF5es\u2026</div>';try{const items=await authApi('solicitacoes-senha');passwordResetsList.innerHTML=items.length?'<table><thead><tr><th>A\xE7\xF5es</th><th>Status</th><th>Nome</th><th>Login</th><th>E-mail</th><th>Solicitado em</th><th>Revisado por</th></tr></thead><tbody>'+items.map(item=>{const status={pending:'Pendente',approved:'Aprovada',rejected:'Reprovada'}[item.status]||item.status,disabled=item.status==='pending'?'':' disabled';return '<tr><td><button class="table-action" data-reset-action="approve" data-reset-id="'+escapeHtml(item.id)+'"'+disabled+'>Aprovar nova senha</button><button class="table-action danger" data-reset-action="reject" data-reset-id="'+escapeHtml(item.id)+'"'+disabled+'>Reprovar</button></td><td><span class="status-badge '+escapeHtml(item.status)+'">'+escapeHtml(status)+'</span></td><td><strong>'+escapeHtml(item.name)+'</strong></td><td>'+escapeHtml(item.login)+'</td><td>'+escapeHtml(item.email||'\u2014')+'</td><td>'+escapeHtml(new Date(item.requested_at).toLocaleString('pt-BR'))+'</td><td>'+escapeHtml(item.reviewed_by||'\u2014')+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">Nenhuma solicita\xE7\xE3o de nova senha.</div>'}catch(error){passwordResetsList.innerHTML='<div class="empty">'+escapeHtml(error.message)+'</div>'}}
    usersList.addEventListener('click',async e=>{const button=e.target.closest('[data-user-action]');if(!button)return;const id=button.dataset.userId,action=button.dataset.userAction;if(action==='delete'&&!confirm('Excluir este usu\xE1rio e suas sess\xF5es?'))return;button.disabled=true;usersMessage.classList.remove('show');try{const role=usersList.querySelector('[data-user-role="'+CSS.escape(id)+'"]')?.value||'member';await authApi('usuarios/'+encodeURIComponent(id)+'/'+action,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({role})});usersMessage.textContent=action==='approve'?'Usu\xE1rio aprovado.':action==='reject'?'Usu\xE1rio reprovado.':'Usu\xE1rio exclu\xEDdo.';usersMessage.classList.add('show');await loadUsers()}catch(error){usersMessage.textContent=error.message;usersMessage.style.background='#fff0f0';usersMessage.style.color='#9f1d2a';usersMessage.classList.add('show')}finally{button.disabled=false}});
    passwordResetsList.addEventListener('click',async e=>{const button=e.target.closest('[data-reset-action]');if(!button)return;const id=button.dataset.resetId,action=button.dataset.resetAction;if(action==='approve'&&!confirm('Ativar a nova senha e encerrar todas as sess\xF5es atuais deste usu\xE1rio?'))return;button.disabled=true;passwordResetsMessage.classList.remove('show');try{await authApi('solicitacoes-senha/'+encodeURIComponent(id)+'/'+action,{method:'POST'});passwordResetsMessage.textContent=action==='approve'?'Nova senha aprovada e sess\xF5es antigas encerradas.':'Solicita\xE7\xE3o de senha reprovada.';passwordResetsMessage.style.background='';passwordResetsMessage.style.color='';passwordResetsMessage.classList.add('show');await loadPasswordResets()}catch(error){passwordResetsMessage.textContent=error.message;passwordResetsMessage.style.background='#fff0f0';passwordResetsMessage.style.color='#9f1d2a';passwordResetsMessage.classList.add('show')}finally{button.disabled=false}});
    passwordForm.addEventListener('submit',async e=>{e.preventDefault();passwordMessage.classList.remove('show');const payload=Object.fromEntries(new FormData(passwordForm).entries());try{if(payload.new_password!==payload.confirm_password)throw new Error('As novas senhas n\xE3o conferem.');await authApi('minha-senha',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});passwordForm.reset();passwordMessage.textContent='Senha alterada com sucesso.';passwordMessage.style.background='';passwordMessage.style.color='';passwordMessage.classList.add('show')}catch(error){passwordMessage.textContent=error.message;passwordMessage.style.background='#fff0f0';passwordMessage.style.color='#9f1d2a';passwordMessage.classList.add('show')}});
    function number(value){let v=String(value||'').trim().replace(/[^0-9,.-]/g,'');if(v.includes(','))v=v.replace(/./g,'').replace(',','.');return Number(v)||0}
    function currency(value){return Number(value).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}
    const dashboardMonth=document.querySelector('#dashboard-month'),dashboardChurches=document.querySelector('#dashboard-churches'),dashboardCsv=document.querySelector('#dashboard-csv');
    dashboardMonth.value=new Date().toISOString().slice(0,7);
    async function loadDashboard(){const month=dashboardMonth.value;if(!month)return;try{const response=await fetch('/financeiro/api/dashboard?month='+encodeURIComponent(month));if(!response.ok)throw new Error();const data=await response.json(),s=data.summary;document.querySelector('#metric-closed').textContent=s.closed;document.querySelector('#metric-pending').textContent=s.pending;document.querySelector('#metric-income').textContent='R$ '+currency(s.income);document.querySelector('#metric-expenses').textContent='R$ '+currency(s.expenses);const balanceMetric=document.querySelector('#metric-balance');balanceMetric.textContent='R$ '+currency(s.balance);balanceMetric.className=s.balance<0?'down':'up';document.querySelector('#metric-tithe').textContent='R$ '+currency(s.tithe);document.querySelector('#metric-transferred').textContent='R$ '+currency(s.transferred);document.querySelector('#metric-total').textContent=s.total;document.querySelector('#metric-percent').textContent=s.percent+'%';document.querySelector('#closing-label').textContent=s.closed+' de '+s.total+' igrejas';document.querySelector('#closing-progress').style.width=s.percent+'%';document.querySelector('#dashboard-updated').textContent=new Date(data.updated_at).toLocaleTimeString('pt-BR');document.querySelector('#market-ticker').textContent='IPDA '+month.split('-').reverse().join('/')+' \u2022 ENTRADAS R$ '+currency(s.income)+' \u25B2 \u2022 SA\xCDDAS R$ '+currency(s.expenses)+' \u25BC \u2022 SALDO R$ '+currency(s.balance)+' \u2022 '+s.closed+' FECHADAS \u2022 '+s.pending+' PENDENTES';dashboardChurches.innerHTML=data.churches.length?'<table><thead><tr><th>Igreja</th><th>TOTVS</th><th>Classifica\xE7\xE3o</th><th>Cidade</th><th>Situa\xE7\xE3o</th><th>Entradas</th><th>Sa\xEDdas</th><th>Saldo</th><th>\xDAltimo envio</th></tr></thead><tbody>'+data.churches.map(c=>'<tr><td><strong>'+escapeHtml(c.name)+'</strong></td><td>'+escapeHtml(c.totvs_code||'\u2014')+'</td><td>'+escapeHtml(c.classification)+'</td><td>'+escapeHtml([c.city,c.state].filter(Boolean).join('/')||'\u2014')+'</td><td><span class="status-pill '+(c.status==='Fechado'?'closed':'pending')+'">'+c.status+'</span></td><td class="amount positive">R$ '+currency(c.income)+'</td><td class="amount negative">R$ '+currency(c.expenses)+'</td><td class="amount '+(c.balance<0?'negative':'positive')+'">R$ '+currency(c.balance)+'</td><td>'+escapeHtml(c.last_report||'\u2014')+'</td></tr>').join('')+'</tbody></table>':'<div class="empty">Nenhuma igreja cadastrada.</div>'}catch{dashboardChurches.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel atualizar o dashboard.</div>'}}
    function updateDashboardCsv(){dashboardCsv.href='/financeiro/api/dashboard/exportar.csv?month='+encodeURIComponent(dashboardMonth.value)}
    dashboardMonth.addEventListener('change',()=>{updateDashboardCsv();loadDashboard()});
    dashboardCsv.addEventListener('click',e=>{if(!dashboardMonth.value)e.preventDefault()});
    function updateBalance(){const value=number(income.value)-number(expenses.value);balance.value=currency(value);balanceBox.classList.toggle('negative',value<0);return value}
    async function readReports(){const response=await fetch('/financeiro/api/relatorios');if(!response.ok)throw new Error('N\xE3o foi poss\xEDvel carregar os relat\xF3rios.');return response.json()}
    async function render(){reports.innerHTML='<div class="empty">Carregando relat\xF3rios\u2026</div>';try{const data=await readReports();reportsCache=data;if(!data.length){reports.innerHTML='<div class="empty">Nenhum relat\xF3rio salvo.</div>';return}reports.innerHTML='<table><thead><tr><th>A\xE7\xF5es</th><th>Data</th><th>Igreja</th><th>TOTVS</th><th>Respons\xE1vel</th><th>Membros</th><th>Entradas</th><th>Sa\xEDdas</th><th>Saldo</th><th>D\xEDzimo</th><th>Transfer\xEAncia para o pr\xF3ximo m\xEAs</th><th>Documentos</th><th>Relat\xF3rio</th></tr></thead><tbody>'+data.map(r=>'<tr><td><button class="table-action" type="button" data-edit-report="'+escapeHtml(r.id)+'">Editar</button><button class="table-action danger" type="button" data-delete-report="'+escapeHtml(r.id)+'">Excluir</button></td><td>'+escapeHtml(r.report_date)+'</td><td>'+escapeHtml(r.church)+'</td><td>'+escapeHtml(r.totvs_code||'\u2014')+'</td><td>'+escapeHtml(r.responsible)+'</td><td>'+r.members+'</td><td class="amount">R$ '+currency(r.income)+'</td><td class="amount">R$ '+currency(r.expenses)+'</td><td class="amount '+(r.balance<0?'negative':'positive')+'">R$ '+currency(r.balance)+'</td><td class="amount">R$ '+currency(r.tithe||0)+'</td><td class="amount">R$ '+currency(r.transferred||0)+'</td><td>'+(r.documents.length?r.documents.map(d=>'<a href="/financeiro/documentos/'+encodeURIComponent(d.id)+'" target="_blank">'+escapeHtml(d.filename)+'</a>').join('<br>'):'\u2014')+'</td><td><a class="button-link" href="/financeiro/relatorios/'+encodeURIComponent(r.id)+'/imprimir" target="_blank">Exportar PDF</a></td></tr>').join('')+'</tbody></table>'}catch(error){reports.innerHTML='<div class="empty">'+escapeHtml(error.message)+'</div>'}}
    function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
    function updateParentRequirement(){const isState=classificationSelect.value==='Estadual';parentChurchSelect.disabled=isState;parentChurchSelect.required=!isState;if(isState)parentChurchSelect.value='';parentChurchSelect.options[0].textContent=isState?'N\xE3o necess\xE1rio para Igreja Estadual':'Selecione uma igreja j\xE1 cadastrada'}
    async function loadChurches(){try{const response=await fetch('/financeiro/api/igrejas');if(!response.ok)throw new Error();const data=await response.json();churchesCache=data;const options=data.map(c=>'<option value="'+c.id+'" data-name="'+escapeHtml(c.name)+'">'+escapeHtml(c.name)+' \u2014 '+escapeHtml(c.classification)+(c.totvs_code?' | TOTVS '+escapeHtml(c.totvs_code):'')+'</option>').join('');churchSelect.innerHTML='<option value="">'+(data.length?'Selecione uma igreja':'Cadastre uma igreja primeiro')+'</option>'+options;memberChurchSelect.innerHTML='<option value="">'+(data.length?'Selecione uma igreja':'Cadastre uma igreja primeiro')+'</option>'+options;parentChurchSelect.innerHTML='<option value="">Selecione uma igreja j\xE1 cadastrada</option>'+options;updateParentRequirement();churchList.innerHTML=data.length?'<table><thead><tr><th>A\xE7\xF5es</th><th>Nome</th><th>TOTVS</th><th>Classifica\xE7\xE3o</th><th>Pertence a</th><th>Endere\xE7o</th><th>Bairro</th><th>Cidade/Estado</th><th>CEP</th><th>N\xFAmero</th><th>Ponto de refer\xEAncia</th></tr></thead><tbody>'+data.map(c=>'<tr><td><button class="table-action" type="button" data-edit-church="'+c.id+'">Editar</button><button class="table-action danger" type="button" data-delete-church="'+c.id+'">Excluir</button></td><td><strong>'+escapeHtml(c.name)+'</strong></td><td>'+escapeHtml(c.totvs_code||'\u2014')+'</td><td>'+escapeHtml(c.classification)+'</td><td>'+escapeHtml(c.parent_name||'\u2014')+'</td><td>'+escapeHtml(c.address)+'</td><td>'+escapeHtml(c.neighborhood||'\u2014')+'</td><td>'+escapeHtml([c.city,c.state].filter(Boolean).join('/')||'\u2014')+'</td><td>'+escapeHtml(c.postal_code||'\u2014')+'</td><td>'+escapeHtml(c.address_number||'\u2014')+'</td><td>'+escapeHtml(c.reference_point||'\u2014')+'</td></tr>').join('')+'</tbody></table>':'<div class="empty">Nenhuma igreja cadastrada.</div>'}catch{churchList.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel carregar as igrejas.</div>'}}
    classificationSelect.addEventListener('change',updateParentRequirement);
    function clearChurchEditing(){churchEditId.value='';cancelChurchEdit.hidden=true;churchForm.querySelector('.save').textContent='Salvar igreja';[...parentChurchSelect.options].forEach(option=>option.disabled=false);updateParentRequirement()}
    function editChurch(id){const church=churchesCache.find(item=>item.id===id);if(!church)return;const fields=['name','totvs_code','classification','address','neighborhood','city','state','postal_code','address_number','reference_point'];fields.forEach(name=>{const input=churchForm.querySelector('[name="'+name+'"]');if(input)input.value=church[name]||''});churchEditId.value=church.id;updateParentRequirement();parentChurchSelect.value=church.parent_church_id||'';[...parentChurchSelect.options].forEach(option=>option.disabled=option.value===church.id);cancelChurchEdit.hidden=false;churchForm.querySelector('.save').textContent='Atualizar igreja';churchForm.scrollIntoView({behavior:'smooth',block:'start'})}
    cancelChurchEdit.addEventListener('click',()=>{churchForm.reset();clearChurchEditing()});
    churchForm.addEventListener('reset',()=>setTimeout(clearChurchEditing,0));
    churchList.addEventListener('click',async e=>{const edit=e.target.closest('[data-edit-church]'),remove=e.target.closest('[data-delete-church]');if(edit){editChurch(edit.dataset.editChurch);return}if(!remove)return;const church=churchesCache.find(item=>item.id===remove.dataset.deleteChurch);if(!church||!confirm('Excluir a igreja "'+church.name+'"? Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita.'))return;remove.disabled=true;try{const response=await fetch('/financeiro/api/igrejas/'+encodeURIComponent(church.id),{method:'DELETE'});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel excluir a igreja.');if(churchEditId.value===church.id){churchForm.reset();clearChurchEditing()}await loadChurches();await loadDashboard()}catch(error){alert(error.message)}finally{remove.disabled=false}});
    churchForm.addEventListener('submit',async e=>{e.preventDefault();const button=churchForm.querySelector('.save'),editingId=churchEditId.value;button.disabled=true;button.textContent='Salvando\u2026';churchMessage.classList.remove('show');churchMessage.style.background='';churchMessage.style.color='';try{const payload=Object.fromEntries(new FormData(churchForm).entries());const response=await fetch(editingId?'/financeiro/api/igrejas/'+encodeURIComponent(editingId):'/financeiro/api/igrejas',{method:editingId?'PUT':'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel salvar a igreja.');churchForm.reset();clearChurchEditing();churchMessage.textContent=editingId?'Igreja atualizada com sucesso.':'Igreja salva com sucesso.';churchMessage.classList.add('show');await loadChurches();if(!editingId)churchSelect.value=result.id;await loadDashboard();setTimeout(()=>churchMessage.classList.remove('show'),4000)}catch(error){churchMessage.textContent=error.message;churchMessage.style.background='#fff0f0';churchMessage.style.color='#9f1d2a';churchMessage.classList.add('show')}finally{button.disabled=false;button.textContent=churchEditId.value?'Atualizar igreja':'Salvar igreja'}});
    document.querySelector('#church-postal').addEventListener('input',e=>{const digits=e.target.value.replace(/D/g,'').slice(0,8);e.target.value=digits.replace(/^(d{5})(d)/,'$1-$2')});
    document.querySelector('#member-cpf').addEventListener('input',e=>{const d=e.target.value.replace(/D/g,'').slice(0,11);e.target.value=d.replace(/^(d{3})(d)/,'$1.$2').replace(/^(d{3}).(d{3})(d)/,'$1.$2.$3').replace(/.(d{3})(d)/,'.$1-$2')});
    async function loadMembers(){memberList.innerHTML='<div class="empty">Carregando membros\u2026</div>';try{const response=await fetch('/financeiro/api/membros');if(!response.ok)throw new Error();const data=await response.json();if(!data.length){memberList.innerHTML='<div class="empty">Nenhum membro cadastrado.</div>';return}memberList.innerHTML='<table><thead><tr><th>Foto</th><th>Nome</th><th>Fun\xE7\xE3o</th><th>Responsabilidade</th><th>Igreja</th><th>CPF</th><th>Telefone</th><th>Nascimento</th><th>Situa\xE7\xE3o</th></tr></thead><tbody>'+data.map(m=>'<tr><td>'+(m.photo_key?'<img class="member-avatar" src="/financeiro/membros/'+encodeURIComponent(m.id)+'/foto" alt="Foto de '+escapeHtml(m.full_name)+'">':'<span class="avatar-empty">'+escapeHtml(m.full_name.charAt(0).toUpperCase())+'</span>')+'</td><td><strong>'+escapeHtml(m.full_name)+'</strong></td><td>'+escapeHtml(m.ministry_role||'Membro')+'</td><td>'+(m.is_leader?'<span class="role-badge">Dirigente</span>':'')+(m.is_financial?'<span class="role-badge">Financeiro</span>':'')+(!m.is_leader&&!m.is_financial?'\u2014':'')+'</td><td>'+escapeHtml(m.church_name)+'</td><td>'+escapeHtml(m.cpf||'\u2014')+'</td><td>'+escapeHtml(m.phone||'\u2014')+'</td><td>'+escapeHtml(m.birth_date||'\u2014')+'</td><td class="'+(m.status==='Ativo'?'positive':'negative')+'">'+escapeHtml(m.status)+'</td></tr>').join('')+'</tbody></table>'}catch{memberList.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel carregar os membros.</div>'}}
    async function loadMembersWithActions(){memberList.innerHTML='<div class="empty">Carregando membros\u2026</div>';try{const response=await fetch('/financeiro/api/membros');if(!response.ok)throw new Error();const data=await response.json();membersCache=data;if(!data.length){memberList.innerHTML='<div class="empty">Nenhum membro cadastrado.</div>';return}memberList.innerHTML='<table><thead><tr><th>A\xE7\xF5es</th><th>Foto</th><th>Nome</th><th>Fun\xE7\xE3o</th><th>Responsabilidade</th><th>Igreja</th><th>CPF</th><th>Telefone</th><th>Nascimento</th><th>Situa\xE7\xE3o</th></tr></thead><tbody>'+data.map(m=>'<tr><td><button class="table-action" type="button" data-edit-member="'+m.id+'">Editar</button><button class="table-action danger" type="button" data-delete-member="'+m.id+'">Excluir</button></td><td>'+(m.photo_key?'<img class="member-avatar" src="/financeiro/membros/'+encodeURIComponent(m.id)+'/foto" alt="Foto de '+escapeHtml(m.full_name)+'">':'<span class="avatar-empty">'+escapeHtml(m.full_name.charAt(0).toUpperCase())+'</span>')+'</td><td><strong>'+escapeHtml(m.full_name)+'</strong></td><td>'+escapeHtml(m.ministry_role||'Membro')+'</td><td>'+(m.is_leader?'<span class="role-badge">Dirigente</span>':'')+(m.is_financial?'<span class="role-badge">Financeiro</span>':'')+(!m.is_leader&&!m.is_financial?'\u2014':'')+'</td><td>'+escapeHtml(m.church_name)+'</td><td>'+escapeHtml(m.cpf||'\u2014')+'</td><td>'+escapeHtml(m.phone||'\u2014')+'</td><td>'+escapeHtml(m.birth_date||'\u2014')+'</td><td class="'+(m.status==='Ativo'?'positive':'negative')+'">'+escapeHtml(m.status)+'</td></tr>').join('')+'</tbody></table>'}catch{memberList.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel carregar os membros.</div>'}}
    loadMembers=loadMembersWithActions;
    function selectMemberPhoto(file){selectedMemberPhoto=file||null;if(!file){memberPhotoPreview.hidden=true;memberPhotoPreview.removeAttribute('src');memberPhotoName.textContent='Nenhuma foto selecionada';return}memberPhotoPreview.src=URL.createObjectURL(file);memberPhotoPreview.hidden=false;memberPhotoName.textContent=file.name||'Foto capturada'}
    memberPhotoCamera.addEventListener('change',()=>{memberPhotoUpload.value='';selectMemberPhoto(memberPhotoCamera.files[0])});
    memberPhotoUpload.addEventListener('change',()=>{memberPhotoCamera.value='';selectMemberPhoto(memberPhotoUpload.files[0])});
    function clearMemberEditing(){memberEditId.value='';cancelMemberEdit.hidden=true;memberFormTitle.textContent='Novo membro';memberForm.querySelector('.save').textContent='Salvar membro';selectMemberPhoto(null)}
    function editMember(id){const member=membersCache.find(item=>item.id===id);if(!member)return;['full_name','church_id','cpf','phone','birth_date','ministry_role','status'].forEach(name=>{const input=memberForm.querySelector('[name="'+name+'"]');if(input)input.value=member[name]||''});memberForm.querySelector('[name="is_leader"]').checked=Boolean(member.is_leader);memberForm.querySelector('[name="is_financial"]').checked=Boolean(member.is_financial);memberEditId.value=member.id;cancelMemberEdit.hidden=false;memberFormTitle.textContent='Editar membro';memberForm.querySelector('.save').textContent='Atualizar membro';selectedMemberPhoto=null;if(member.photo_key){memberPhotoPreview.src='/financeiro/membros/'+encodeURIComponent(member.id)+'/foto?edit='+Date.now();memberPhotoPreview.hidden=false;memberPhotoName.textContent='Foto atual (envie outra para substituir)'}else selectMemberPhoto(null);memberForm.scrollIntoView({behavior:'smooth',block:'start'})}
    cancelMemberEdit.addEventListener('click',()=>{memberForm.reset();clearMemberEditing()});
    memberForm.addEventListener('reset',()=>setTimeout(clearMemberEditing,0));
    memberList.addEventListener('click',async e=>{const edit=e.target.closest('[data-edit-member]'),remove=e.target.closest('[data-delete-member]');if(edit){editMember(edit.dataset.editMember);return}if(!remove)return;const member=membersCache.find(item=>item.id===remove.dataset.deleteMember);if(!member||!confirm('Excluir o membro "'+member.full_name+'"? Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita.'))return;remove.disabled=true;try{const response=await fetch('/financeiro/api/membros/'+encodeURIComponent(member.id),{method:'DELETE'});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel excluir o membro.');if(memberEditId.value===member.id){memberForm.reset();clearMemberEditing()}await loadMembers()}catch(error){alert(error.message)}finally{remove.disabled=false}});
    memberForm.addEventListener('submit',async e=>{e.preventDefault();const button=memberForm.querySelector('.save'),editingId=memberEditId.value;button.disabled=true;button.textContent='Salvando\u2026';memberMessage.classList.remove('show');memberMessage.style.background='';memberMessage.style.color='';try{const fields=new FormData(memberForm);const body=new FormData();body.append('member',JSON.stringify(Object.fromEntries(fields.entries())));if(selectedMemberPhoto)body.append('photo',selectedMemberPhoto);const response=await fetch(editingId?'/financeiro/api/membros/'+encodeURIComponent(editingId):'/financeiro/api/membros',{method:editingId?'PUT':'POST',body});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel salvar o membro.');memberForm.reset();clearMemberEditing();memberMessage.textContent=editingId?'Membro atualizado com sucesso.':'Membro salvo com sucesso.';memberMessage.classList.add('show');await loadMembers();setTimeout(()=>memberMessage.classList.remove('show'),4000)}catch(error){memberMessage.textContent=error.message;memberMessage.style.background='#fff0f0';memberMessage.style.color='#9f1d2a';memberMessage.classList.add('show')}finally{button.disabled=false;button.textContent=memberEditId.value?'Atualizar membro':'Salvar membro'}});
    function showModule(name){const allowed=allowedViews(),target=allowed.includes(name)?name:allowed[0];history.replaceState(null,'','#'+target);document.querySelectorAll('.module-view').forEach(view=>view.hidden=view.id!=='view-'+target);document.querySelectorAll('.nav-button').forEach(button=>button.classList.toggle('active',button.dataset.view===target));if(target==='dashboard')loadDashboard();if(target==='members')loadMembers();if(target==='finance'&&currentUser?.role==='admin')render();if(target==='users'){loadUsers();loadPasswordResets()}}
    document.querySelectorAll('.nav-button').forEach(button=>button.addEventListener('click',()=>{history.replaceState(null,'','#'+button.dataset.view);showModule(button.dataset.view)}));
    window.addEventListener('hashchange',()=>showModule(location.hash.slice(1)));
    [income,expenses].forEach(el=>el.addEventListener('input',updateBalance));
    [income,expenses,tithe,transferred].forEach(el=>el.addEventListener('blur',()=>{el.value=currency(number(el.value));updateBalance()}));
    function clearReportEditing(){editingReportId='';editingReportDate='';documents.required=true;saveButton.textContent='Salvar relat\xF3rio'}
    function editReport(id){if(currentUser?.role!=='admin')return;const report=reportsCache.find(item=>item.id===id);if(!report)return;editingReportId=id;editingReportDate=report.report_date||'';churchSelect.value=report.church_id||'';form.responsible.value=report.responsible||'';form.members.value=Number(report.members)||0;income.value=currency(report.income);expenses.value=currency(report.expenses);tithe.value=currency(report.tithe||0);transferred.value=currency(report.transferred||0);documents.required=false;saveButton.textContent='Atualizar relat\xF3rio';updateBalance();form.scrollIntoView({behavior:'smooth',block:'start'})}
    reports.addEventListener('click',async e=>{if(currentUser?.role!=='admin')return;const edit=e.target.closest('[data-edit-report]'),remove=e.target.closest('[data-delete-report]');if(edit){editReport(edit.dataset.editReport);return}if(!remove||!confirm('Excluir este relat\xF3rio e todos os documentos anexados? Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita.'))return;remove.disabled=true;try{const response=await fetch('/financeiro/api/relatorios/'+encodeURIComponent(remove.dataset.deleteReport),{method:'DELETE'});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel excluir o relat\xF3rio.');if(editingReportId===remove.dataset.deleteReport){form.reset();clearReportEditing()}await render();await loadDashboard()}catch(error){alert(error.message)}finally{remove.disabled=false}});
    form.addEventListener('reset',()=>setTimeout(()=>{clearReportEditing();updateBalance();message.classList.remove('show')},0));
    form.addEventListener('submit',async e=>{e.preventDefault();saveButton.disabled=true;saveButton.textContent='Salvando\u2026';message.classList.remove('show');message.textContent=editingReportId?'Relat\xF3rio atualizado com sucesso.':'Relat\xF3rio e documentos salvos com sucesso.';message.style.background='';message.style.color='';try{const selected=churchSelect.options[churchSelect.selectedIndex];const payload={report_date:editingReportDate||new Date().toLocaleDateString('pt-BR'),church_id:churchSelect.value,church:selected?.dataset.name||'',responsible:form.responsible.value.trim(),members:Number(form.members.value),income:number(income.value),expenses:number(expenses.value),balance:updateBalance(),tithe:number(tithe.value),transferred:number(transferred.value)};const body=new FormData();body.append('report',JSON.stringify(payload));[...documents.files].forEach(file=>body.append('documents',file));const response=await fetch(editingReportId?'/financeiro/api/relatorios/'+encodeURIComponent(editingReportId):'/financeiro/api/relatorios',{method:editingReportId?'PUT':'POST',body});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel salvar o relat\xF3rio.');form.reset();if(currentUser?.role==='member')form.responsible.value=currentUser.name;updateBalance();message.classList.add('show');if(currentUser?.role==='admin')await render();setTimeout(()=>message.classList.remove('show'),4000)}catch(error){message.textContent=error.message;message.style.background='#fff0f0';message.style.color='#9f1d2a';message.classList.add('show')}finally{saveButton.disabled=false;saveButton.textContent=editingReportId?'Atualizar relat\xF3rio':'Salvar relat\xF3rio'}});
    updateBalance();updateDashboardCsv();initializeSession();updateChurchRegistrationAvailability();setInterval(updateChurchRegistrationAvailability,1000);setInterval(()=>{if(currentUser&&['admin','agent'].includes(currentUser.role)&&!document.querySelector('#view-dashboard').hidden)loadDashboard()},30000);
  <\/script>
</body></html>`], [`<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="theme-color" content="#14532d">
  <title>Sistema Administrativo | IPDA</title>
  <style>
    :root{--navy:#14532d;--blue:#15803d;--gold:#d7a92e;--ink:#243b2e;--muted:#607567;--line:#d5e5d9;--bg:#f0f7f2;--white:#fff;--green:#087a55;--red:#ba2d39}
    *{box-sizing:border-box}body{margin:0;font-family:Arial,"Helvetica Neue",sans-serif;background:var(--bg);color:var(--ink)}[hidden]{display:none!important}
    .auth-screen{min-height:100vh;display:grid;place-items:center;padding:24px;background:#eff8f1}.auth-card{width:min(360px,100%);background:#fff;border:1px solid #d4e4d8;border-radius:8px;padding:28px 22px;box-shadow:0 2px 5px #123d290d;text-align:center}.auth-card.request{width:min(520px,100%)}.auth-card h1{margin:0 0 6px;font-size:22px}.auth-card>p{margin:0 0 22px;color:#607567;font-size:13px}.auth-card form{padding:0}.auth-card label{text-align:left}.auth-card button{width:100%;background:#16803c;color:#fff;margin-top:2px}.auth-links{margin-top:20px;color:#607567;font-size:12px;line-height:1.55}.auth-links a{color:#147a3b;font-weight:700}.auth-message{min-height:18px;margin:12px 0 0!important;color:var(--red)!important;font-size:.82rem!important}.auth-message.success{color:var(--green)!important}.security-note{margin:0 0 16px;padding:12px;border-radius:7px;background:#e8f6ec;color:#147a3b;font-size:.78rem;line-height:1.45;text-align:left}.policy{margin:12px 0;border:1px solid #c8dacd;border-radius:7px;background:#f4fbf6;text-align:left}.policy summary{padding:11px 12px;font-size:.82rem;font-weight:800;cursor:pointer}.policy-content{padding:0 14px 13px;color:#4f6b58;font-size:.78rem;line-height:1.55}.policy-content p{margin:8px 0}.consent{display:flex!important;align-items:flex-start;gap:9px;margin:10px 4px 15px!important;font-size:.8rem!important;line-height:1.4}.consent input{width:17px;height:17px;min-width:17px;margin:1px 0 0;accent-color:#16803c}.user-panel{margin-top:auto;padding:18px 10px 0;border-top:1px solid #2f6344;color:#b8d1c0;font-size:.76rem;line-height:1.45}.user-panel strong{display:block;color:#fff}.user-panel button{width:100%;margin-top:10px;padding:9px;background:#24613d;color:#fff}.status-badge{display:inline-block;border-radius:99px;padding:5px 9px;font-size:.72rem;font-weight:800}.status-badge.pending{background:#fff3cd;color:#8a6200}.status-badge.approved{background:#dff7ed;color:#087a55}.status-badge.rejected{background:#ffe2e5;color:#a91f2c}.users-table select{min-width:110px;height:38px}.password-card{max-width:560px}
    .app-shell{display:grid;grid-template-columns:260px minmax(0,1fr);min-height:100vh}.sidebar{position:sticky;top:0;height:100vh;background:#0f3d25;color:#fff;padding:26px 16px;display:flex;flex-direction:column}.side-brand{padding:0 10px 24px;border-bottom:1px solid #2f6344}.side-brand strong{display:block;color:#86efac;font-size:.94rem}.side-brand span{display:block;color:#fff;font-size:1.3rem;font-weight:800;margin-top:5px}.side-brand small{display:block;color:#a7c6b1;margin-top:5px}.app-nav{display:flex;flex-direction:column;gap:7px;margin-top:24px}.nav-button{display:flex;align-items:center;gap:13px;width:100%;border-radius:8px;background:transparent;color:#f4fbf6;padding:13px 14px;text-align:left;white-space:nowrap}.nav-button:hover{background:#1b5134}.nav-button.active{background:#24613d;color:#fff}.nav-icon{width:21px;text-align:center;color:#86efac;font-size:1rem}.content{min-width:0;padding:34px}.content-inner{width:min(1120px,100%);margin:0 auto}.module-view[hidden]{display:none}.module-title{margin:0 0 18px}.module-title h2{margin:0 0 5px;font-size:1.5rem;color:#173d27}.module-title p{margin:0;color:var(--muted)}
    .card{background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 8px 24px rgba(20,83,45,.08);overflow:hidden}
    .card-head{padding:22px 24px;border-bottom:1px solid var(--line)}.card-head h2{margin:0 0 6px;font-size:1.17rem}.card-head p{margin:0;color:var(--muted);font-size:.91rem}.card+.card{margin-top:24px}
    form{padding:24px}.section-title{font-size:.78rem;color:var(--blue);text-transform:uppercase;letter-spacing:.08em;font-weight:800;margin:0 0 14px}
    .grid{display:grid;grid-template-columns:2fr 2fr 1fr;gap:16px}.financial{grid-template-columns:1fr 1fr 1fr 1fr;margin-top:6px}
    label{display:block;font-size:.86rem;font-weight:700;margin-bottom:7px}input,select{width:100%;height:46px;border:1px solid #c8dacd;border-radius:8px;padding:0 13px;font-size:1rem;color:var(--ink);background:#fff;outline:none;transition:.2s}
    input:focus,select:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(21,128,61,.16)}input[readonly]{background:#f0f7f4;color:var(--green);font-weight:800;border-color:#acd7c6}.church-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.full{grid-column:1/-1}.church-list{margin-top:18px;border-top:1px solid var(--line);padding-top:18px}.church-list h3{margin:0 0 10px;font-size:.96rem}.church-chip{display:inline-flex;gap:7px;align-items:center;background:#e8f5eb;border:1px solid #cfe4d4;border-radius:999px;padding:7px 11px;margin:0 7px 7px 0;font-size:.8rem}.church-chip small{color:var(--muted)}
    .divider{height:1px;background:var(--line);margin:26px 0}.money{position:relative}.money>span{position:absolute;left:13px;top:39px;color:var(--muted);font-size:.9rem;line-height:1}.money input{padding-left:42px}.money .hint{position:static;margin-top:7px;padding:0;max-width:100%}
    .balance-box.negative input{background:#fff4f4;color:var(--red);border-color:#e6afb4}.hint{display:block;color:var(--muted);font-size:.75rem;line-height:1.35;margin-top:6px}.document-field{margin-top:18px}.document-field input{height:auto;padding:11px;background:#f4fbf6}.actions{display:flex;justify-content:flex-end;gap:12px;margin-top:26px}
    button,.button-link{border:0;border-radius:8px;padding:12px 20px;font-weight:800;font-size:.93rem;cursor:pointer}.clear{background:#e6f2e9;color:var(--navy)}.save{background:var(--navy);color:#fff}.save:hover{background:#166534}.button-link{display:inline-block;padding:8px 11px;background:#e3f1e7;color:var(--navy);text-decoration:none;white-space:nowrap;font-size:.78rem}.table-action{padding:7px 10px;border:1px solid #d0e2d4;background:#fff;color:var(--navy);font-size:.78rem;margin:2px}.table-action.danger{background:#fff0f0;color:#b4232e;border-color:#ffc9ce}.table-action:hover{filter:brightness(.97)}
    .message{display:none;margin-top:18px;padding:12px 14px;border-radius:8px;background:#eaf7f1;color:#086347;font-size:.9rem;font-weight:700}.message.show{display:block}
    .recent{margin-top:24px}.recent-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}.recent h2{font-size:1.05rem;margin:0}.empty{color:var(--muted);text-align:center;padding:28px}
    .table-wrap{overflow:auto;background:#fff;border:1px solid var(--line);border-radius:12px}table{width:100%;border-collapse:collapse;min-width:760px}th,td{padding:13px 15px;text-align:left;border-bottom:1px solid #e4eee7;font-size:.87rem}th{background:#f4fbf6;color:#4f6b58;font-size:.75rem;text-transform:uppercase}td.amount{font-weight:700;white-space:nowrap}.positive{color:var(--green)}.negative{color:var(--red)}.responsibility-box{display:flex;gap:12px;flex-wrap:wrap}.check-option{display:flex;align-items:center;gap:9px;margin:0;border:1px solid #c8dacd;border-radius:9px;padding:11px 15px;background:#f4fbf6;cursor:pointer}.check-option input{width:18px;height:18px;margin:0;accent-color:var(--navy)}.role-badge{display:inline-block;padding:4px 8px;border-radius:99px;background:#e3f1e7;color:var(--navy);font-size:.72rem;font-weight:800;margin:2px}.photo-capture{display:flex;align-items:center;gap:16px;border:1px dashed #a8bdad;border-radius:10px;padding:15px;background:#f4fbf6}.photo-input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none}.photo-options{display:flex;flex-wrap:wrap;gap:10px;align-items:center}.photo-button{display:inline-flex;align-items:center;gap:7px;margin:0;padding:11px 15px;border-radius:8px;background:var(--navy);color:#fff;font-size:.86rem;font-weight:800;cursor:pointer}.photo-button.upload{background:#fff;color:var(--navy);border:1px solid #c6d9ca}.photo-name{width:100%;color:var(--muted);font-size:.78rem}.photo-preview{width:92px;height:112px;object-fit:cover;border-radius:8px;border:1px solid var(--line);background:#e4eee7}.member-avatar{width:44px;height:52px;object-fit:cover;border-radius:6px;border:1px solid var(--line);display:block}.avatar-empty{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;background:#e3f1e7;color:var(--navy);font-weight:800}
    .dash-toolbar{display:flex;align-items:end;justify-content:space-between;gap:16px;margin-bottom:18px}.dash-toolbar label{margin:0}.dash-toolbar input{width:190px;background:#123b28;color:#fff;border-color:#2b6142}.live-state{display:flex;align-items:center;gap:8px;color:var(--muted);font-size:.82rem}.live-dot{width:9px;height:9px;border-radius:50%;background:#18b981;box-shadow:0 0 0 5px #18b98122}.market{background:#0b2f1f;border:1px solid #28583c;border-radius:14px;padding:18px;color:#e8f5eb;box-shadow:0 12px 30px #0b2f1f24}.ticker{overflow:hidden;white-space:nowrap;color:#86efac;font-size:.78rem;letter-spacing:.09em;border-bottom:1px solid #2c5d40;padding-bottom:13px;margin-bottom:16px}.market-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.quote{background:#123d29;border:1px solid #28583c;border-radius:10px;padding:15px}.quote small{display:block;color:#a7c6b1;text-transform:uppercase;font-size:.68rem;letter-spacing:.07em}.quote strong{display:block;margin-top:8px;font-size:1.28rem}.quote .up{color:#32d296}.quote .down{color:#ff6577}.closing{margin-top:16px;background:#123d29;border-radius:10px;padding:15px}.closing-head{display:flex;justify-content:space-between;font-size:.83rem}.progress{height:10px;background:#2b5e40;border-radius:99px;overflow:hidden;margin-top:10px}.progress span{display:block;height:100%;background:linear-gradient(90deg,#22a052,#32d296);border-radius:99px;transition:width .4s}.status-pill{display:inline-block;border-radius:99px;padding:5px 9px;font-weight:800;font-size:.72rem}.status-pill.closed{background:#dff7ed;color:#087a55}.status-pill.pending{background:#fff0f1;color:#ba2d39}.dashboard-list{margin-top:22px}.dashboard-list h3{margin:0 0 11px}.pulse-time{font-variant-numeric:tabular-nums}.registration-deadline{margin-top:12px;padding:14px 16px;border:1px solid #d7a92e;border-radius:9px;background:#fff8df;color:#6f5100;font-size:.88rem;line-height:1.45}.registration-deadline strong{display:block;margin-top:4px;color:#14532d;font-size:1rem}
    @media(max-width:820px){.app-shell{display:block}.sidebar{position:relative;height:auto;padding:18px 12px}.side-brand{padding:0 7px 15px}.side-brand span{font-size:1.1rem}.app-nav{flex-direction:row;overflow:auto;margin-top:14px;gap:5px}.nav-button{width:auto;padding:11px 13px;font-size:.8rem}.nav-icon{display:none}.content{padding:20px 12px 42px}.grid,.financial,.church-grid{grid-template-columns:1fr}.market-grid{grid-template-columns:1fr 1fr}.dash-toolbar{align-items:stretch;flex-direction:column}.full{grid-column:auto}form,.card-head{padding:19px}.actions{flex-direction:column-reverse}.actions button{width:100%}}
  </style>
</head>
<body>
  <section class="auth-screen" id="auth-screen">
    <div class="auth-card" id="login-card"><h1>FINANCEIRO IPDA</h1><p>Entre com login e senha</p><form id="login-form"><label>Login<input name="login" autocomplete="username" required></label><label>Senha<input name="password" type="password" autocomplete="current-password" required></label><button type="submit">Entrar</button><p class="auth-message" id="login-message" role="status"></p></form><div class="auth-links">FINANCEIRO IPDA<br><a href="#" id="show-request">Solicitar acesso</a><br><a href="#" id="forgot-password">Esqueci minha senha</a></div></div>
    <div class="auth-card request" id="request-card" hidden><h1>Solicitar acesso</h1><p>Crie seu usu\xE1rio. Um administrador libera o perfil para uso.</p><form id="request-form"><label>Nome completo<input name="name" autocomplete="name" required></label><label>Login<input name="login" autocomplete="username" minlength="3" required></label><label>E-mail<input name="email" type="email" autocomplete="email" required></label><label>Telefone<input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="(92) 99999-9999"></label><label>Perfil solicitado<select name="requested_role"><option value="member">Membro \u2014 enviar relat\xF3rios</option><option value="agent">Agente \u2014 igrejas, membros e envio de relat\xF3rios</option></select></label><label>Senha<input name="password" type="password" autocomplete="new-password" minlength="8" required></label><label>Confirmar senha<input name="confirm_password" type="password" autocomplete="new-password" minlength="8" required></label><details class="policy"><summary>Termos de Uso</summary><div class="policy-content"><p>O acesso \xE9 pessoal, intransfer\xEDvel e destinado somente \xE0s atividades autorizadas da Igreja Pentecostal Deus \xE9 Amor.</p><p>O usu\xE1rio \xE9 respons\xE1vel pela veracidade das informa\xE7\xF5es e documentos enviados, pelo sigilo de sua senha e por comunicar qualquer suspeita de uso indevido.</p><p>\xC9 proibido compartilhar credenciais, tentar acessar fun\xE7\xF5es n\xE3o autorizadas ou usar o sistema para finalidade diferente da atividade institucional. A administra\xE7\xE3o poder\xE1 suspender ou revogar acessos para proteger o sistema e seus dados.</p></div></details><label class="consent"><input name="accept_terms" type="checkbox" value="1" required> Li e concordo com os Termos de Uso.</label><details class="policy"><summary>Pol\xEDtica de Privacidade</summary><div class="policy-content"><p>Nome, login, e-mail, telefone e registros t\xE9cnicos de acesso s\xE3o tratados para identifica\xE7\xE3o, aprova\xE7\xE3o, seguran\xE7a, auditoria e suporte.</p><p>As senhas s\xE3o armazenadas somente em formato derivado e n\xE3o podem ser lidas pela administra\xE7\xE3o. Relat\xF3rios e documentos financeiros ficam sujeitos ao controle de acesso por perfil.</p><p>Os dados s\xE3o mantidos pelo per\xEDodo necess\xE1rio \xE0s atividades institucionais e \xE0s obriga\xE7\xF5es aplic\xE1veis. Solicita\xE7\xF5es de corre\xE7\xE3o ou esclarecimento devem ser encaminhadas \xE0 administra\xE7\xE3o respons\xE1vel pelo sistema.</p></div></details><label class="consent"><input name="accept_privacy" type="checkbox" value="1" required> Li e concordo com a Pol\xEDtica de Privacidade.</label><button type="submit">Enviar solicita\xE7\xE3o</button><p class="auth-message" id="request-message" role="status"></p></form><div class="auth-links"><a href="#" id="show-login">Voltar para o login</a></div></div>
    <div class="auth-card" id="reset-card" hidden><h1>Recuperar senha</h1><p>Informe os dados do seu usu\xE1rio e escolha uma nova senha.</p><div class="security-note">Por seguran\xE7a, a nova senha ser\xE1 ativada somente depois da aprova\xE7\xE3o do administrador.</div><form id="reset-form"><label>Login<input name="login" autocomplete="username" required></label><label>E-mail cadastrado<input name="email" type="email" autocomplete="email" required></label><label>Nova senha<input name="new_password" type="password" autocomplete="new-password" minlength="8" required></label><label>Confirmar nova senha<input name="confirm_password" type="password" autocomplete="new-password" minlength="8" required></label><button type="submit">Solicitar troca de senha</button><p class="auth-message" id="reset-message" role="status"></p></form><div class="auth-links"><a href="#" id="reset-show-login">Voltar para o login</a></div></div>
  </section>
  <div class="app-shell" id="app-shell" hidden>
  <aside class="sidebar"><div class="side-brand"><strong>Sistema da Igreja</strong><span>Financeiro</span><small>IPDA \u2022 Administra\xE7\xE3o</small></div><nav class="app-nav" aria-label="Menu principal"><button class="nav-button active" type="button" data-view="dashboard" data-roles="admin,agent"><span class="nav-icon" aria-hidden="true">\u2301</span>Dashboard</button><button class="nav-button" type="button" data-view="churches" data-roles="admin,agent"><span class="nav-icon" aria-hidden="true">\u2302</span>Igrejas</button><button class="nav-button" type="button" data-view="finance" data-roles="admin,agent,member"><span class="nav-icon" aria-hidden="true">\u25A3</span>Relat\xF3rios Financeiros</button><button class="nav-button" type="button" data-view="members" data-roles="admin,agent"><span class="nav-icon" aria-hidden="true">\u25CE</span>Cadastro de Membros</button><button class="nav-button" type="button" data-view="users" data-roles="admin"><span class="nav-icon" aria-hidden="true">\u25C9</span>Usu\xE1rios</button><button class="nav-button" type="button" data-view="password" data-roles="admin,agent,member"><span class="nav-icon" aria-hidden="true">\u2318</span>Minha senha</button></nav><div class="user-panel"><strong id="session-name">\u2014</strong><span id="session-role">\u2014</span><button id="logout-button" type="button">Sair</button></div></aside>
  <main class="content"><div class="content-inner">
    <div class="module-view" id="view-dashboard">
      <div class="module-title"><h2>Fechamento Mensal</h2><p>Acompanhe em tempo real o envio dos relat\xF3rios de todas as igrejas.</p></div>
      <div class="dash-toolbar"><label>M\xEAs de refer\xEAncia<input type="month" id="dashboard-month"><small class="hint">Selecione livremente qualquer m\xEAs para auditoria.</small></label><a class="button-link" id="dashboard-csv" href="#">Exportar auditoria CSV</a><div class="live-state"><span class="live-dot"></span><span>Atualiza\xE7\xE3o autom\xE1tica \u2022 <span class="pulse-time" id="dashboard-updated">carregando\u2026</span></span></div></div>
      <section class="market"><div class="ticker" id="market-ticker">MERCADO FINANCEIRO IPDA \u2022 FECHAMENTO MENSAL \u2022 ATUALIZA\xC7\xC3O EM TEMPO REAL</div><div class="market-grid">
        <div class="quote"><small>Igrejas fechadas</small><strong class="up" id="metric-closed">0</strong></div><div class="quote"><small>Igrejas pendentes</small><strong class="down" id="metric-pending">0</strong></div>
        <div class="quote"><small>Entradas gerais</small><strong class="up" id="metric-income">R$ 0,00</strong></div><div class="quote"><small>Sa\xEDdas gerais</small><strong class="down" id="metric-expenses">R$ 0,00</strong></div>
        <div class="quote"><small>Saldo consolidado</small><strong id="metric-balance">R$ 0,00</strong></div><div class="quote"><small>D\xEDzimos informados</small><strong id="metric-tithe">R$ 0,00</strong></div><div class="quote"><small>Transfer\xEAncia para o pr\xF3ximo m\xEAs</small><strong id="metric-transferred">R$ 0,00</strong></div>
        <div class="quote"><small>Total de igrejas</small><strong id="metric-total">0</strong></div><div class="quote"><small>Percentual fechado</small><strong class="up" id="metric-percent">0%</strong></div>
      </div><div class="closing"><div class="closing-head"><span>Progresso do fechamento</span><strong id="closing-label">0 de 0 igrejas</strong></div><div class="progress"><span id="closing-progress" style="width:0%"></span></div></div></section>
      <section class="dashboard-list"><h3>Situa\xE7\xE3o por igreja</h3><div class="table-wrap" id="dashboard-churches"><div class="empty">Carregando painel\u2026</div></div></section>
    </div>
    <div class="module-view" id="view-churches" hidden>
      <div class="module-title"><h2>Igrejas</h2><p>Cadastre e organize a estrutura das igrejas.</p><div class="registration-deadline">Prazo para cadastro: 18/09/2026.<strong id="church-registration-countdown">Calculando tempo restante...</strong></div></div>
    <section class="card">
      <div class="card-head"><h2>Cadastro de Igrejas e Filiais</h2><p>Cadastre classifica\xE7\xE3o, endere\xE7o e c\xF3digo TOTVS da igreja.</p></div>
      <form id="church-form">
        <input type="hidden" id="church-edit-id" name="id">
        <div class="church-grid">
          <div><label for="church-name">Nome da igreja ou filial*</label><input id="church-name" name="name" required placeholder="Ex.: IPDA Cidade Nova"></div>
          <div><label for="church-totvs">C\xF3digo TOTVS</label><input id="church-totvs" name="totvs_code" placeholder="C\xF3digo da unidade"></div>
          <div><label for="church-classification">Classifica\xE7\xE3o*</label><select id="church-classification" name="classification" required><option value="">Selecione</option><option>Local</option><option>Setorial</option><option>Estadual</option><option>Regional</option><option>Central</option></select></div>
          <div><label for="parent-church">Pertence a qual igreja?*</label><select id="parent-church" name="parent_church_id" required><option value="">Selecione uma igreja j\xE1 cadastrada</option></select><small class="hint">Livre somente para classifica\xE7\xE3o Estadual.</small></div>
          <div><label for="church-state">Estado</label><select id="church-state" name="state"><option value="">Selecione</option><option value="AC">Acre</option><option value="AL">Alagoas</option><option value="AP">Amap\xE1</option><option value="AM">Amazonas</option><option value="BA">Bahia</option><option value="CE">Cear\xE1</option><option value="DF">Distrito Federal</option><option value="ES">Esp\xEDrito Santo</option><option value="GO">Goi\xE1s</option><option value="MA">Maranh\xE3o</option><option value="MT">Mato Grosso</option><option value="MS">Mato Grosso do Sul</option><option value="MG">Minas Gerais</option><option value="PA">Par\xE1</option><option value="PB">Para\xEDba</option><option value="PR">Paran\xE1</option><option value="PE">Pernambuco</option><option value="PI">Piau\xED</option><option value="RJ">Rio de Janeiro</option><option value="RN">Rio Grande do Norte</option><option value="RS">Rio Grande do Sul</option><option value="RO">Rond\xF4nia</option><option value="RR">Roraima</option><option value="SC">Santa Catarina</option><option value="SP">S\xE3o Paulo</option><option value="SE">Sergipe</option><option value="TO">Tocantins</option></select></div>
          <div class="full"><label for="church-address">Endere\xE7o da igreja*</label><input id="church-address" name="address" required placeholder="Rua, avenida ou comunidade"></div>
          <div><label for="church-neighborhood">Bairro</label><input id="church-neighborhood" name="neighborhood"></div>
          <div><label for="church-city">Cidade</label><input id="church-city" name="city"></div>
          <div><label for="church-postal">CEP</label><input id="church-postal" name="postal_code" inputmode="numeric" placeholder="00000-000"></div>
          <div><label for="church-number">N\xFAmero</label><input id="church-number" name="address_number"></div>
          <div class="full"><label for="church-reference">Ponto de refer\xEAncia</label><input id="church-reference" name="reference_point"></div>
        </div>
        <div class="actions"><button class="clear" id="cancel-church-edit" type="button" hidden>Cancelar edi\xE7\xE3o</button><button class="clear" type="reset">Limpar</button><button class="save" type="submit">Salvar igreja</button></div>
        <div class="message" id="church-message" role="status">Igreja salva com sucesso.</div>
        <div class="church-list"><div class="recent-head"><h3>Igrejas cadastradas</h3><span class="hint">Edite ou exclua igrejas cadastradas.</span></div><div class="table-wrap" id="church-list"><div class="empty">Carregando igrejas\u2026</div></div></div>
      </form>
    </section>
    </div>
    <div class="module-view" id="view-finance" hidden>
      <div class="module-title"><h2>Relat\xF3rios Financeiros</h2><p>Registre movimenta\xE7\xF5es, documentos e exporte relat\xF3rios.</p></div>
    <section class="card">
      <div class="card-head"><h2>Novo relat\xF3rio financeiro</h2><p>Preencha os dados da igreja e os valores do per\xEDodo.</p></div>
      <form id="financial-form">
        <p class="section-title">Identifica\xE7\xE3o</p>
        <div class="grid">
          <div><label for="church">Nome da igreja</label><select id="church" name="church_id" required><option value="">Cadastre ou selecione uma igreja</option></select></div>
          <div><label for="responsible">Respons\xE1vel pelo relat\xF3rio</label><input id="responsible" name="responsible" autocomplete="name" required placeholder="Nome completo"></div>
          <div><label for="members">Membros ativos</label><input id="members" name="members" type="number" min="0" step="1" required placeholder="0"></div>
        </div>
        <div class="divider"></div>
        <p class="section-title">Movimenta\xE7\xE3o</p>
        <div class="grid financial">
          <div class="money"><label for="income">Entradas</label><span>R$</span><input id="income" name="income" inputmode="decimal" required placeholder="0,00"></div>
          <div class="money"><label for="expenses">Sa\xEDdas</label><span>R$</span><input id="expenses" name="expenses" inputmode="decimal" required placeholder="0,00"></div>
          <div class="money balance-box" id="balance-box"><label for="balance">Saldo (entradas \u2212 sa\xEDdas)</label><span>R$</span><input id="balance" name="balance" readonly value="0,00" aria-live="polite"></div>
          <div class="money"><label for="tithe">D\xEDzimo</label><span>R$</span><input id="tithe" name="tithe" inputmode="decimal" placeholder="0,00"><small class="hint">Valor informativo; n\xE3o entra no c\xE1lculo do saldo.</small></div><div class="money"><label for="transferred">Transfer\xEAncia para o pr\xF3ximo m\xEAs</label><span>R$</span><input id="transferred" name="transferred" inputmode="decimal" placeholder="0,00"><small class="hint">Valor reservado para despesas b\xE1sicas da igreja no pr\xF3ximo m\xEAs, como copos e material de limpeza. N\xE3o representa transfer\xEAncia banc\xE1ria e n\xE3o altera o c\xE1lculo do saldo.</small></div>
        </div>
        <div class="document-field"><label for="documents">Inserir documentos*</label><input id="documents" name="documents" type="file" accept=".pdf,image/jpeg,image/png,image/webp" multiple required><small class="hint">Obrigat\xF3rio: anexe pelo menos um comprovante em PDF, JPG, PNG ou WEBP.</small></div>
        <div class="actions"><button class="clear" type="reset">Limpar</button><button class="save" type="submit">Salvar relat\xF3rio</button></div>
        <div class="message" id="message" role="status">Relat\xF3rio e documentos salvos com sucesso.</div>
      </form>
    </section>
    <section class="recent" id="recent-reports" aria-labelledby="recent-title"><div class="recent-head"><h2 id="recent-title">Relat\xF3rios recentes</h2></div><div class="table-wrap" id="reports"></div></section>
    </div>
    <div class="module-view" id="view-members" hidden>
      <div class="module-title"><h2>Cadastro de Membros</h2><p>Cadastre membros e vincule cada pessoa \xE0 sua igreja.</p></div>
      <section class="card"><div class="card-head"><h2 id="member-form-title">Novo membro</h2><p>Informe os dados principais do membro.</p></div><form id="member-form"><input id="member-edit-id" type="hidden"><div class="church-grid">
        <div><label for="member-name">Nome completo*</label><input id="member-name" name="full_name" required autocomplete="name"></div>
        <div><label for="member-church">Igreja*</label><select id="member-church" name="church_id" required><option value="">Selecione uma igreja</option></select></div>
        <div><label for="member-cpf">CPF</label><input id="member-cpf" name="cpf" inputmode="numeric" placeholder="000.000.000-00"></div>
        <div><label for="member-phone">Telefone</label><input id="member-phone" name="phone" inputmode="tel" placeholder="(92) 99999-9999"></div>
        <div><label for="member-birth">Data de nascimento</label><input id="member-birth" name="birth_date" type="date"></div>
        <div><label for="member-role">Fun\xE7\xE3o ministerial*</label><select id="member-role" name="ministry_role" required><option value="">Selecione</option><option>Cooperador</option><option>Obreiro</option><option>Di\xE1cono</option><option>Membro</option><option>Presb\xEDtero</option><option>Pastor</option></select></div>
        <div><label for="member-status">Situa\xE7\xE3o*</label><select id="member-status" name="status" required><option>Ativo</option><option>Inativo</option></select></div>
        <div class="full"><label>Responsabilidade na igreja</label><div class="responsibility-box"><label class="check-option"><input id="member-leader" name="is_leader" type="checkbox" value="1"> Dirigente</label><label class="check-option"><input id="member-financial" name="is_financial" type="checkbox" value="1"> Financeiro</label></div></div>
        <div class="full"><label>Foto do membro</label><div class="photo-capture"><img class="photo-preview" id="member-photo-preview" alt="Pr\xE9via da foto" hidden><div class="photo-options"><input class="photo-input" id="member-photo-camera" type="file" accept="image/jpeg,image/png,image/webp" capture="environment"><input class="photo-input" id="member-photo-upload" type="file" accept="image/jpeg,image/png,image/webp"><label class="photo-button" for="member-photo-camera">\u{1F4F7} Tirar foto</label><label class="photo-button upload" for="member-photo-upload">\u2B06 Enviar foto</label><span class="photo-name" id="member-photo-name">Nenhuma foto selecionada</span><small class="hint">JPG, PNG ou WEBP de at\xE9 5 MB.</small></div></div></div>
      </div><div class="actions"><button class="clear" type="reset">Limpar</button><button class="clear" id="cancel-member-edit" type="button" hidden>Cancelar edi\xE7\xE3o</button><button class="save" type="submit">Salvar membro</button></div><div class="message" id="member-message" role="status">Membro salvo com sucesso.</div></form></section>
      <section class="recent"><div class="recent-head"><h2>Membros cadastrados</h2></div><div class="table-wrap" id="member-list"><div class="empty">Carregando membros\u2026</div></div></section>
    </div>
    <div class="module-view" id="view-users" hidden><div class="module-title"><h2>Usu\xE1rios e aprova\xE7\xF5es</h2><p>Aprove solicita\xE7\xF5es e defina o n\xEDvel de acesso de cada pessoa.</p></div><section class="card"><div class="card-head"><h2>Controle de acesso</h2><p>Administrador: acesso total. Agente: igrejas, membros e envio de relat\xF3rios, sem downloads. Membro: somente envio de relat\xF3rios.</p></div><div class="table-wrap users-table" id="users-list"><div class="empty">Carregando usu\xE1rios\u2026</div></div><div class="message" id="users-message" role="status"></div></section><section class="card"><div class="card-head"><h2>Solicita\xE7\xF5es de nova senha</h2><p>A nova senha somente entra em vigor depois da aprova\xE7\xE3o administrativa.</p></div><div class="table-wrap users-table" id="password-resets-list"><div class="empty">Carregando solicita\xE7\xF5es\u2026</div></div><div class="message" id="password-resets-message" role="status"></div></section></div>
    <div class="module-view" id="view-password" hidden><div class="module-title"><h2>Minha senha</h2><p>Atualize sua senha de acesso com seguran\xE7a.</p></div><section class="card password-card"><div class="card-head"><h2>Alterar senha</h2><p>Use no m\xEDnimo 8 caracteres.</p></div><form id="password-form"><label>Senha atual<input name="current_password" type="password" autocomplete="current-password" required></label><label>Nova senha<input name="new_password" type="password" autocomplete="new-password" minlength="8" required></label><label>Confirmar nova senha<input name="confirm_password" type="password" autocomplete="new-password" minlength="8" required></label><div class="actions"><button class="save" type="submit">Alterar senha</button></div><div class="message" id="password-message" role="status"></div></form></section></div>
  </div></main>
  </div>
  <script>
    const form=document.querySelector('#financial-form'),churchForm=document.querySelector('#church-form'),churchEditId=document.querySelector('#church-edit-id'),cancelChurchEdit=document.querySelector('#cancel-church-edit'),memberForm=document.querySelector('#member-form'),memberPhotoCamera=document.querySelector('#member-photo-camera'),memberPhotoUpload=document.querySelector('#member-photo-upload'),memberPhotoPreview=document.querySelector('#member-photo-preview'),memberPhotoName=document.querySelector('#member-photo-name'),churchSelect=document.querySelector('#church'),memberChurchSelect=document.querySelector('#member-church'),memberList=document.querySelector('#member-list'),memberMessage=document.querySelector('#member-message'),classificationSelect=document.querySelector('#church-classification'),parentChurchSelect=document.querySelector('#parent-church'),churchList=document.querySelector('#church-list'),churchMessage=document.querySelector('#church-message'),income=document.querySelector('#income'),expenses=document.querySelector('#expenses'),tithe=document.querySelector('#tithe'),transferred=document.querySelector('#transferred'),documents=document.querySelector('#documents'),balance=document.querySelector('#balance'),balanceBox=document.querySelector('#balance-box'),reports=document.querySelector('#reports'),message=document.querySelector('#message'),saveButton=form.querySelector('.save');
    const memberEditId=document.querySelector('#member-edit-id'),cancelMemberEdit=document.querySelector('#cancel-member-edit'),memberFormTitle=document.querySelector('#member-form-title');
    let selectedMemberPhoto=null;
    let membersCache=[];
    let churchesCache=[];
    let currentUser=null,editingReportId='',editingReportDate='',reportsCache=[];
    const authScreen=document.querySelector('#auth-screen'),appShell=document.querySelector('#app-shell'),loginCard=document.querySelector('#login-card'),requestCard=document.querySelector('#request-card'),resetCard=document.querySelector('#reset-card'),loginForm=document.querySelector('#login-form'),requestForm=document.querySelector('#request-form'),resetForm=document.querySelector('#reset-form'),loginMessage=document.querySelector('#login-message'),requestMessage=document.querySelector('#request-message'),resetMessage=document.querySelector('#reset-message'),usersList=document.querySelector('#users-list'),usersMessage=document.querySelector('#users-message'),passwordResetsList=document.querySelector('#password-resets-list'),passwordResetsMessage=document.querySelector('#password-resets-message'),passwordForm=document.querySelector('#password-form'),passwordMessage=document.querySelector('#password-message');
    async function authApi(path,options={}){const response=await fetch('/financeiro/api/'+path,{credentials:'same-origin',...options});let data={};try{data=await response.json()}catch{}if(!response.ok)throw new Error(data.error||'N\xE3o foi poss\xEDvel concluir a opera\xE7\xE3o.');return data}
    function switchAuth(view='login'){loginCard.hidden=view!=='login';requestCard.hidden=view!=='request';resetCard.hidden=view!=='reset';loginMessage.textContent='';requestMessage.textContent='';resetMessage.textContent=''}
    document.querySelector('#show-request').addEventListener('click',e=>{e.preventDefault();switchAuth('request')});
    document.querySelector('#show-login').addEventListener('click',e=>{e.preventDefault();switchAuth('login')});
    document.querySelector('#reset-show-login').addEventListener('click',e=>{e.preventDefault();switchAuth('login')});
    document.querySelector('#forgot-password').addEventListener('click',e=>{e.preventDefault();switchAuth('reset')});
    loginForm.addEventListener('submit',async e=>{e.preventDefault();loginMessage.textContent='Entrando\u2026';try{const body=JSON.stringify(Object.fromEntries(new FormData(loginForm).entries()));const data=await authApi('login',{method:'POST',headers:{'content-type':'application/json'},body});loginForm.reset();enterApp(data.user)}catch(error){loginMessage.textContent=error.message}});
    requestForm.addEventListener('submit',async e=>{e.preventDefault();requestMessage.className='auth-message';requestMessage.textContent='Enviando\u2026';try{const payload=Object.fromEntries(new FormData(requestForm).entries());if(payload.password!==payload.confirm_password)throw new Error('As senhas n\xE3o conferem.');await authApi('solicitar-acesso',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});requestForm.reset();requestMessage.className='auth-message success';requestMessage.textContent='Solicita\xE7\xE3o enviada. Aguarde a aprova\xE7\xE3o interna.'}catch(error){requestMessage.textContent=error.message}});
    resetForm.addEventListener('submit',async e=>{e.preventDefault();resetMessage.className='auth-message';resetMessage.textContent='Enviando\u2026';try{const payload=Object.fromEntries(new FormData(resetForm).entries());if(payload.new_password!==payload.confirm_password)throw new Error('As novas senhas n\xE3o conferem.');await authApi('solicitar-nova-senha',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});resetForm.reset();resetMessage.className='auth-message success';resetMessage.textContent='Solicita\xE7\xE3o enviada. Se os dados conferirem, o administrador poder\xE1 aprovar a nova senha.'}catch(error){resetMessage.textContent=error.message}});
    document.querySelector('#logout-button').addEventListener('click',async()=>{try{await authApi('logout',{method:'POST'})}catch{}window.location.replace('/financeiro')});
    const CHURCH_REGISTRATION_END=new Date('2026-09-19T00:00:00-04:00').getTime();
    function churchRegistrationOpen(){return Date.now()<CHURCH_REGISTRATION_END}
    function allowedViews(){const views=currentUser?.role==='admin'?['dashboard','churches','finance','members','users','password']:currentUser?.role==='agent'?['dashboard','churches','finance','members','password']:['finance','password'];return churchRegistrationOpen()?views:views.filter(view=>view!=='churches')}
    function updateChurchRegistrationAvailability(){const open=churchRegistrationOpen(),button=document.querySelector('[data-view="churches"]'),view=document.querySelector('#view-churches'),countdown=document.querySelector('#church-registration-countdown');if(button)button.hidden=!open||!button.dataset.roles.split(',').includes(currentUser?.role||'');if(!open){if(view)view.hidden=true;if(location.hash==='#churches'&&currentUser)showModule(allowedViews()[0]);return}const remaining=Math.max(0,CHURCH_REGISTRATION_END-Date.now()),days=Math.floor(remaining/86400000),hours=Math.floor(remaining%86400000/3600000),minutes=Math.floor(remaining%3600000/60000),seconds=Math.floor(remaining%60000/1000);if(countdown)countdown.textContent=days+' dias, '+hours+'h, '+minutes+'min e '+seconds+'s restantes.'}
    function enterApp(user){currentUser=user;authScreen.hidden=true;appShell.hidden=false;document.querySelector('#session-name').textContent=user.name;document.querySelector('#session-role').textContent={admin:'Administrador',agent:'Agente',member:'Membro'}[user.role]||user.role;document.querySelectorAll('[data-roles]').forEach(el=>el.hidden=!el.dataset.roles.split(',').includes(user.role));updateChurchRegistrationAvailability();dashboardCsv.hidden=user.role!=='admin';document.querySelector('#recent-reports').hidden=user.role!=='admin';if(user.role==='member'&&!form.responsible.value)form.responsible.value=user.name;loadChurches();const preferred=location.hash.slice(1);showModule(allowedViews().includes(preferred)?preferred:allowedViews()[0])}
    async function initializeSession(){try{const data=await authApi('session');enterApp(data.user)}catch{authScreen.hidden=false;appShell.hidden=true}}
    async function loadUsers(){usersList.innerHTML='<div class="empty">Carregando usu\xE1rios\u2026</div>';try{const users=await authApi('usuarios');usersList.innerHTML=users.length?'<table><thead><tr><th>A\xE7\xF5es</th><th>Status</th><th>Nome</th><th>Login</th><th>E-mail</th><th>Telefone</th><th>Perfil</th><th>Consentimentos</th><th>Solicitado em</th></tr></thead><tbody>'+users.map(u=>{const roles=['member','agent','admin'].map(role=>'<option value="'+role+'"'+(u.role===role?' selected':'')+'>'+({member:'Membro',agent:'Agente',admin:'Administrador'}[role])+'</option>').join('');const status={pending:'Pendente',approved:'Aprovado',rejected:'Reprovado'}[u.status]||u.status,consent=u.terms_accepted_at&&u.privacy_accepted_at?'Aceitos \u2022 '+(u.policy_version||'vers\xE3o registrada'):'Cadastro anterior \xE0 pol\xEDtica';return '<tr><td><button class="table-action" data-user-action="approve" data-user-id="'+escapeHtml(u.id)+'">Aprovar</button><button class="table-action danger" data-user-action="reject" data-user-id="'+escapeHtml(u.id)+'">Reprovar</button><button class="table-action danger" data-user-action="delete" data-user-id="'+escapeHtml(u.id)+'">Excluir</button></td><td><span class="status-badge '+escapeHtml(u.status)+'">'+escapeHtml(status)+'</span></td><td><strong>'+escapeHtml(u.name)+'</strong></td><td>'+escapeHtml(u.login)+'</td><td>'+escapeHtml(u.email||'\u2014')+'</td><td>'+escapeHtml(u.phone||'\u2014')+'</td><td><select data-user-role="'+escapeHtml(u.id)+'">'+roles+'</select></td><td>'+escapeHtml(consent)+'</td><td>'+escapeHtml(new Date(u.created_at).toLocaleString('pt-BR'))+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">Nenhuma solicita\xE7\xE3o encontrada.</div>'}catch(error){usersList.innerHTML='<div class="empty">'+escapeHtml(error.message)+'</div>'}}
    async function loadPasswordResets(){passwordResetsList.innerHTML='<div class="empty">Carregando solicita\xE7\xF5es\u2026</div>';try{const items=await authApi('solicitacoes-senha');passwordResetsList.innerHTML=items.length?'<table><thead><tr><th>A\xE7\xF5es</th><th>Status</th><th>Nome</th><th>Login</th><th>E-mail</th><th>Solicitado em</th><th>Revisado por</th></tr></thead><tbody>'+items.map(item=>{const status={pending:'Pendente',approved:'Aprovada',rejected:'Reprovada'}[item.status]||item.status,disabled=item.status==='pending'?'':' disabled';return '<tr><td><button class="table-action" data-reset-action="approve" data-reset-id="'+escapeHtml(item.id)+'"'+disabled+'>Aprovar nova senha</button><button class="table-action danger" data-reset-action="reject" data-reset-id="'+escapeHtml(item.id)+'"'+disabled+'>Reprovar</button></td><td><span class="status-badge '+escapeHtml(item.status)+'">'+escapeHtml(status)+'</span></td><td><strong>'+escapeHtml(item.name)+'</strong></td><td>'+escapeHtml(item.login)+'</td><td>'+escapeHtml(item.email||'\u2014')+'</td><td>'+escapeHtml(new Date(item.requested_at).toLocaleString('pt-BR'))+'</td><td>'+escapeHtml(item.reviewed_by||'\u2014')+'</td></tr>'}).join('')+'</tbody></table>':'<div class="empty">Nenhuma solicita\xE7\xE3o de nova senha.</div>'}catch(error){passwordResetsList.innerHTML='<div class="empty">'+escapeHtml(error.message)+'</div>'}}
    usersList.addEventListener('click',async e=>{const button=e.target.closest('[data-user-action]');if(!button)return;const id=button.dataset.userId,action=button.dataset.userAction;if(action==='delete'&&!confirm('Excluir este usu\xE1rio e suas sess\xF5es?'))return;button.disabled=true;usersMessage.classList.remove('show');try{const role=usersList.querySelector('[data-user-role="'+CSS.escape(id)+'"]')?.value||'member';await authApi('usuarios/'+encodeURIComponent(id)+'/'+action,{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({role})});usersMessage.textContent=action==='approve'?'Usu\xE1rio aprovado.':action==='reject'?'Usu\xE1rio reprovado.':'Usu\xE1rio exclu\xEDdo.';usersMessage.classList.add('show');await loadUsers()}catch(error){usersMessage.textContent=error.message;usersMessage.style.background='#fff0f0';usersMessage.style.color='#9f1d2a';usersMessage.classList.add('show')}finally{button.disabled=false}});
    passwordResetsList.addEventListener('click',async e=>{const button=e.target.closest('[data-reset-action]');if(!button)return;const id=button.dataset.resetId,action=button.dataset.resetAction;if(action==='approve'&&!confirm('Ativar a nova senha e encerrar todas as sess\xF5es atuais deste usu\xE1rio?'))return;button.disabled=true;passwordResetsMessage.classList.remove('show');try{await authApi('solicitacoes-senha/'+encodeURIComponent(id)+'/'+action,{method:'POST'});passwordResetsMessage.textContent=action==='approve'?'Nova senha aprovada e sess\xF5es antigas encerradas.':'Solicita\xE7\xE3o de senha reprovada.';passwordResetsMessage.style.background='';passwordResetsMessage.style.color='';passwordResetsMessage.classList.add('show');await loadPasswordResets()}catch(error){passwordResetsMessage.textContent=error.message;passwordResetsMessage.style.background='#fff0f0';passwordResetsMessage.style.color='#9f1d2a';passwordResetsMessage.classList.add('show')}finally{button.disabled=false}});
    passwordForm.addEventListener('submit',async e=>{e.preventDefault();passwordMessage.classList.remove('show');const payload=Object.fromEntries(new FormData(passwordForm).entries());try{if(payload.new_password!==payload.confirm_password)throw new Error('As novas senhas n\xE3o conferem.');await authApi('minha-senha',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});passwordForm.reset();passwordMessage.textContent='Senha alterada com sucesso.';passwordMessage.style.background='';passwordMessage.style.color='';passwordMessage.classList.add('show')}catch(error){passwordMessage.textContent=error.message;passwordMessage.style.background='#fff0f0';passwordMessage.style.color='#9f1d2a';passwordMessage.classList.add('show')}});
    function number(value){let v=String(value||'').trim().replace(/[^0-9,.-]/g,'');if(v.includes(','))v=v.replace(/\\./g,'').replace(',','.');return Number(v)||0}
    function currency(value){return Number(value).toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2})}
    const dashboardMonth=document.querySelector('#dashboard-month'),dashboardChurches=document.querySelector('#dashboard-churches'),dashboardCsv=document.querySelector('#dashboard-csv');
    dashboardMonth.value=new Date().toISOString().slice(0,7);
    async function loadDashboard(){const month=dashboardMonth.value;if(!month)return;try{const response=await fetch('/financeiro/api/dashboard?month='+encodeURIComponent(month));if(!response.ok)throw new Error();const data=await response.json(),s=data.summary;document.querySelector('#metric-closed').textContent=s.closed;document.querySelector('#metric-pending').textContent=s.pending;document.querySelector('#metric-income').textContent='R$ '+currency(s.income);document.querySelector('#metric-expenses').textContent='R$ '+currency(s.expenses);const balanceMetric=document.querySelector('#metric-balance');balanceMetric.textContent='R$ '+currency(s.balance);balanceMetric.className=s.balance<0?'down':'up';document.querySelector('#metric-tithe').textContent='R$ '+currency(s.tithe);document.querySelector('#metric-transferred').textContent='R$ '+currency(s.transferred);document.querySelector('#metric-total').textContent=s.total;document.querySelector('#metric-percent').textContent=s.percent+'%';document.querySelector('#closing-label').textContent=s.closed+' de '+s.total+' igrejas';document.querySelector('#closing-progress').style.width=s.percent+'%';document.querySelector('#dashboard-updated').textContent=new Date(data.updated_at).toLocaleTimeString('pt-BR');document.querySelector('#market-ticker').textContent='IPDA '+month.split('-').reverse().join('/')+' \u2022 ENTRADAS R$ '+currency(s.income)+' \u25B2 \u2022 SA\xCDDAS R$ '+currency(s.expenses)+' \u25BC \u2022 SALDO R$ '+currency(s.balance)+' \u2022 '+s.closed+' FECHADAS \u2022 '+s.pending+' PENDENTES';dashboardChurches.innerHTML=data.churches.length?'<table><thead><tr><th>Igreja</th><th>TOTVS</th><th>Classifica\xE7\xE3o</th><th>Cidade</th><th>Situa\xE7\xE3o</th><th>Entradas</th><th>Sa\xEDdas</th><th>Saldo</th><th>\xDAltimo envio</th></tr></thead><tbody>'+data.churches.map(c=>'<tr><td><strong>'+escapeHtml(c.name)+'</strong></td><td>'+escapeHtml(c.totvs_code||'\u2014')+'</td><td>'+escapeHtml(c.classification)+'</td><td>'+escapeHtml([c.city,c.state].filter(Boolean).join('/')||'\u2014')+'</td><td><span class="status-pill '+(c.status==='Fechado'?'closed':'pending')+'">'+c.status+'</span></td><td class="amount positive">R$ '+currency(c.income)+'</td><td class="amount negative">R$ '+currency(c.expenses)+'</td><td class="amount '+(c.balance<0?'negative':'positive')+'">R$ '+currency(c.balance)+'</td><td>'+escapeHtml(c.last_report||'\u2014')+'</td></tr>').join('')+'</tbody></table>':'<div class="empty">Nenhuma igreja cadastrada.</div>'}catch{dashboardChurches.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel atualizar o dashboard.</div>'}}
    function updateDashboardCsv(){dashboardCsv.href='/financeiro/api/dashboard/exportar.csv?month='+encodeURIComponent(dashboardMonth.value)}
    dashboardMonth.addEventListener('change',()=>{updateDashboardCsv();loadDashboard()});
    dashboardCsv.addEventListener('click',e=>{if(!dashboardMonth.value)e.preventDefault()});
    function updateBalance(){const value=number(income.value)-number(expenses.value);balance.value=currency(value);balanceBox.classList.toggle('negative',value<0);return value}
    async function readReports(){const response=await fetch('/financeiro/api/relatorios');if(!response.ok)throw new Error('N\xE3o foi poss\xEDvel carregar os relat\xF3rios.');return response.json()}
    async function render(){reports.innerHTML='<div class="empty">Carregando relat\xF3rios\u2026</div>';try{const data=await readReports();reportsCache=data;if(!data.length){reports.innerHTML='<div class="empty">Nenhum relat\xF3rio salvo.</div>';return}reports.innerHTML='<table><thead><tr><th>A\xE7\xF5es</th><th>Data</th><th>Igreja</th><th>TOTVS</th><th>Respons\xE1vel</th><th>Membros</th><th>Entradas</th><th>Sa\xEDdas</th><th>Saldo</th><th>D\xEDzimo</th><th>Transfer\xEAncia para o pr\xF3ximo m\xEAs</th><th>Documentos</th><th>Relat\xF3rio</th></tr></thead><tbody>'+data.map(r=>'<tr><td><button class="table-action" type="button" data-edit-report="'+escapeHtml(r.id)+'">Editar</button><button class="table-action danger" type="button" data-delete-report="'+escapeHtml(r.id)+'">Excluir</button></td><td>'+escapeHtml(r.report_date)+'</td><td>'+escapeHtml(r.church)+'</td><td>'+escapeHtml(r.totvs_code||'\u2014')+'</td><td>'+escapeHtml(r.responsible)+'</td><td>'+r.members+'</td><td class="amount">R$ '+currency(r.income)+'</td><td class="amount">R$ '+currency(r.expenses)+'</td><td class="amount '+(r.balance<0?'negative':'positive')+'">R$ '+currency(r.balance)+'</td><td class="amount">R$ '+currency(r.tithe||0)+'</td><td class="amount">R$ '+currency(r.transferred||0)+'</td><td>'+(r.documents.length?r.documents.map(d=>'<a href="/financeiro/documentos/'+encodeURIComponent(d.id)+'" target="_blank">'+escapeHtml(d.filename)+'</a>').join('<br>'):'\u2014')+'</td><td><a class="button-link" href="/financeiro/relatorios/'+encodeURIComponent(r.id)+'/imprimir" target="_blank">Exportar PDF</a></td></tr>').join('')+'</tbody></table>'}catch(error){reports.innerHTML='<div class="empty">'+escapeHtml(error.message)+'</div>'}}
    function escapeHtml(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML}
    function updateParentRequirement(){const isState=classificationSelect.value==='Estadual';parentChurchSelect.disabled=isState;parentChurchSelect.required=!isState;if(isState)parentChurchSelect.value='';parentChurchSelect.options[0].textContent=isState?'N\xE3o necess\xE1rio para Igreja Estadual':'Selecione uma igreja j\xE1 cadastrada'}
    async function loadChurches(){try{const response=await fetch('/financeiro/api/igrejas');if(!response.ok)throw new Error();const data=await response.json();churchesCache=data;const options=data.map(c=>'<option value="'+c.id+'" data-name="'+escapeHtml(c.name)+'">'+escapeHtml(c.name)+' \u2014 '+escapeHtml(c.classification)+(c.totvs_code?' | TOTVS '+escapeHtml(c.totvs_code):'')+'</option>').join('');churchSelect.innerHTML='<option value="">'+(data.length?'Selecione uma igreja':'Cadastre uma igreja primeiro')+'</option>'+options;memberChurchSelect.innerHTML='<option value="">'+(data.length?'Selecione uma igreja':'Cadastre uma igreja primeiro')+'</option>'+options;parentChurchSelect.innerHTML='<option value="">Selecione uma igreja j\xE1 cadastrada</option>'+options;updateParentRequirement();churchList.innerHTML=data.length?'<table><thead><tr><th>A\xE7\xF5es</th><th>Nome</th><th>TOTVS</th><th>Classifica\xE7\xE3o</th><th>Pertence a</th><th>Endere\xE7o</th><th>Bairro</th><th>Cidade/Estado</th><th>CEP</th><th>N\xFAmero</th><th>Ponto de refer\xEAncia</th></tr></thead><tbody>'+data.map(c=>'<tr><td><button class="table-action" type="button" data-edit-church="'+c.id+'">Editar</button><button class="table-action danger" type="button" data-delete-church="'+c.id+'">Excluir</button></td><td><strong>'+escapeHtml(c.name)+'</strong></td><td>'+escapeHtml(c.totvs_code||'\u2014')+'</td><td>'+escapeHtml(c.classification)+'</td><td>'+escapeHtml(c.parent_name||'\u2014')+'</td><td>'+escapeHtml(c.address)+'</td><td>'+escapeHtml(c.neighborhood||'\u2014')+'</td><td>'+escapeHtml([c.city,c.state].filter(Boolean).join('/')||'\u2014')+'</td><td>'+escapeHtml(c.postal_code||'\u2014')+'</td><td>'+escapeHtml(c.address_number||'\u2014')+'</td><td>'+escapeHtml(c.reference_point||'\u2014')+'</td></tr>').join('')+'</tbody></table>':'<div class="empty">Nenhuma igreja cadastrada.</div>'}catch{churchList.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel carregar as igrejas.</div>'}}
    classificationSelect.addEventListener('change',updateParentRequirement);
    function clearChurchEditing(){churchEditId.value='';cancelChurchEdit.hidden=true;churchForm.querySelector('.save').textContent='Salvar igreja';[...parentChurchSelect.options].forEach(option=>option.disabled=false);updateParentRequirement()}
    function editChurch(id){const church=churchesCache.find(item=>item.id===id);if(!church)return;const fields=['name','totvs_code','classification','address','neighborhood','city','state','postal_code','address_number','reference_point'];fields.forEach(name=>{const input=churchForm.querySelector('[name="'+name+'"]');if(input)input.value=church[name]||''});churchEditId.value=church.id;updateParentRequirement();parentChurchSelect.value=church.parent_church_id||'';[...parentChurchSelect.options].forEach(option=>option.disabled=option.value===church.id);cancelChurchEdit.hidden=false;churchForm.querySelector('.save').textContent='Atualizar igreja';churchForm.scrollIntoView({behavior:'smooth',block:'start'})}
    cancelChurchEdit.addEventListener('click',()=>{churchForm.reset();clearChurchEditing()});
    churchForm.addEventListener('reset',()=>setTimeout(clearChurchEditing,0));
    churchList.addEventListener('click',async e=>{const edit=e.target.closest('[data-edit-church]'),remove=e.target.closest('[data-delete-church]');if(edit){editChurch(edit.dataset.editChurch);return}if(!remove)return;const church=churchesCache.find(item=>item.id===remove.dataset.deleteChurch);if(!church||!confirm('Excluir a igreja "'+church.name+'"? Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita.'))return;remove.disabled=true;try{const response=await fetch('/financeiro/api/igrejas/'+encodeURIComponent(church.id),{method:'DELETE'});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel excluir a igreja.');if(churchEditId.value===church.id){churchForm.reset();clearChurchEditing()}await loadChurches();await loadDashboard()}catch(error){alert(error.message)}finally{remove.disabled=false}});
    churchForm.addEventListener('submit',async e=>{e.preventDefault();const button=churchForm.querySelector('.save'),editingId=churchEditId.value;button.disabled=true;button.textContent='Salvando\u2026';churchMessage.classList.remove('show');churchMessage.style.background='';churchMessage.style.color='';try{const payload=Object.fromEntries(new FormData(churchForm).entries());const response=await fetch(editingId?'/financeiro/api/igrejas/'+encodeURIComponent(editingId):'/financeiro/api/igrejas',{method:editingId?'PUT':'POST',headers:{'content-type':'application/json'},body:JSON.stringify(payload)});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel salvar a igreja.');churchForm.reset();clearChurchEditing();churchMessage.textContent=editingId?'Igreja atualizada com sucesso.':'Igreja salva com sucesso.';churchMessage.classList.add('show');await loadChurches();if(!editingId)churchSelect.value=result.id;await loadDashboard();setTimeout(()=>churchMessage.classList.remove('show'),4000)}catch(error){churchMessage.textContent=error.message;churchMessage.style.background='#fff0f0';churchMessage.style.color='#9f1d2a';churchMessage.classList.add('show')}finally{button.disabled=false;button.textContent=churchEditId.value?'Atualizar igreja':'Salvar igreja'}});
    document.querySelector('#church-postal').addEventListener('input',e=>{const digits=e.target.value.replace(/\\D/g,'').slice(0,8);e.target.value=digits.replace(/^(\\d{5})(\\d)/,'$1-$2')});
    document.querySelector('#member-cpf').addEventListener('input',e=>{const d=e.target.value.replace(/\\D/g,'').slice(0,11);e.target.value=d.replace(/^(\\d{3})(\\d)/,'$1.$2').replace(/^(\\d{3})\\.(\\d{3})(\\d)/,'$1.$2.$3').replace(/\\.(\\d{3})(\\d)/,'.$1-$2')});
    async function loadMembers(){memberList.innerHTML='<div class="empty">Carregando membros\u2026</div>';try{const response=await fetch('/financeiro/api/membros');if(!response.ok)throw new Error();const data=await response.json();if(!data.length){memberList.innerHTML='<div class="empty">Nenhum membro cadastrado.</div>';return}memberList.innerHTML='<table><thead><tr><th>Foto</th><th>Nome</th><th>Fun\xE7\xE3o</th><th>Responsabilidade</th><th>Igreja</th><th>CPF</th><th>Telefone</th><th>Nascimento</th><th>Situa\xE7\xE3o</th></tr></thead><tbody>'+data.map(m=>'<tr><td>'+(m.photo_key?'<img class="member-avatar" src="/financeiro/membros/'+encodeURIComponent(m.id)+'/foto" alt="Foto de '+escapeHtml(m.full_name)+'">':'<span class="avatar-empty">'+escapeHtml(m.full_name.charAt(0).toUpperCase())+'</span>')+'</td><td><strong>'+escapeHtml(m.full_name)+'</strong></td><td>'+escapeHtml(m.ministry_role||'Membro')+'</td><td>'+(m.is_leader?'<span class="role-badge">Dirigente</span>':'')+(m.is_financial?'<span class="role-badge">Financeiro</span>':'')+(!m.is_leader&&!m.is_financial?'\u2014':'')+'</td><td>'+escapeHtml(m.church_name)+'</td><td>'+escapeHtml(m.cpf||'\u2014')+'</td><td>'+escapeHtml(m.phone||'\u2014')+'</td><td>'+escapeHtml(m.birth_date||'\u2014')+'</td><td class="'+(m.status==='Ativo'?'positive':'negative')+'">'+escapeHtml(m.status)+'</td></tr>').join('')+'</tbody></table>'}catch{memberList.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel carregar os membros.</div>'}}
    async function loadMembersWithActions(){memberList.innerHTML='<div class="empty">Carregando membros\u2026</div>';try{const response=await fetch('/financeiro/api/membros');if(!response.ok)throw new Error();const data=await response.json();membersCache=data;if(!data.length){memberList.innerHTML='<div class="empty">Nenhum membro cadastrado.</div>';return}memberList.innerHTML='<table><thead><tr><th>A\xE7\xF5es</th><th>Foto</th><th>Nome</th><th>Fun\xE7\xE3o</th><th>Responsabilidade</th><th>Igreja</th><th>CPF</th><th>Telefone</th><th>Nascimento</th><th>Situa\xE7\xE3o</th></tr></thead><tbody>'+data.map(m=>'<tr><td><button class="table-action" type="button" data-edit-member="'+m.id+'">Editar</button><button class="table-action danger" type="button" data-delete-member="'+m.id+'">Excluir</button></td><td>'+(m.photo_key?'<img class="member-avatar" src="/financeiro/membros/'+encodeURIComponent(m.id)+'/foto" alt="Foto de '+escapeHtml(m.full_name)+'">':'<span class="avatar-empty">'+escapeHtml(m.full_name.charAt(0).toUpperCase())+'</span>')+'</td><td><strong>'+escapeHtml(m.full_name)+'</strong></td><td>'+escapeHtml(m.ministry_role||'Membro')+'</td><td>'+(m.is_leader?'<span class="role-badge">Dirigente</span>':'')+(m.is_financial?'<span class="role-badge">Financeiro</span>':'')+(!m.is_leader&&!m.is_financial?'\u2014':'')+'</td><td>'+escapeHtml(m.church_name)+'</td><td>'+escapeHtml(m.cpf||'\u2014')+'</td><td>'+escapeHtml(m.phone||'\u2014')+'</td><td>'+escapeHtml(m.birth_date||'\u2014')+'</td><td class="'+(m.status==='Ativo'?'positive':'negative')+'">'+escapeHtml(m.status)+'</td></tr>').join('')+'</tbody></table>'}catch{memberList.innerHTML='<div class="empty">N\xE3o foi poss\xEDvel carregar os membros.</div>'}}
    loadMembers=loadMembersWithActions;
    function selectMemberPhoto(file){selectedMemberPhoto=file||null;if(!file){memberPhotoPreview.hidden=true;memberPhotoPreview.removeAttribute('src');memberPhotoName.textContent='Nenhuma foto selecionada';return}memberPhotoPreview.src=URL.createObjectURL(file);memberPhotoPreview.hidden=false;memberPhotoName.textContent=file.name||'Foto capturada'}
    memberPhotoCamera.addEventListener('change',()=>{memberPhotoUpload.value='';selectMemberPhoto(memberPhotoCamera.files[0])});
    memberPhotoUpload.addEventListener('change',()=>{memberPhotoCamera.value='';selectMemberPhoto(memberPhotoUpload.files[0])});
    function clearMemberEditing(){memberEditId.value='';cancelMemberEdit.hidden=true;memberFormTitle.textContent='Novo membro';memberForm.querySelector('.save').textContent='Salvar membro';selectMemberPhoto(null)}
    function editMember(id){const member=membersCache.find(item=>item.id===id);if(!member)return;['full_name','church_id','cpf','phone','birth_date','ministry_role','status'].forEach(name=>{const input=memberForm.querySelector('[name="'+name+'"]');if(input)input.value=member[name]||''});memberForm.querySelector('[name="is_leader"]').checked=Boolean(member.is_leader);memberForm.querySelector('[name="is_financial"]').checked=Boolean(member.is_financial);memberEditId.value=member.id;cancelMemberEdit.hidden=false;memberFormTitle.textContent='Editar membro';memberForm.querySelector('.save').textContent='Atualizar membro';selectedMemberPhoto=null;if(member.photo_key){memberPhotoPreview.src='/financeiro/membros/'+encodeURIComponent(member.id)+'/foto?edit='+Date.now();memberPhotoPreview.hidden=false;memberPhotoName.textContent='Foto atual (envie outra para substituir)'}else selectMemberPhoto(null);memberForm.scrollIntoView({behavior:'smooth',block:'start'})}
    cancelMemberEdit.addEventListener('click',()=>{memberForm.reset();clearMemberEditing()});
    memberForm.addEventListener('reset',()=>setTimeout(clearMemberEditing,0));
    memberList.addEventListener('click',async e=>{const edit=e.target.closest('[data-edit-member]'),remove=e.target.closest('[data-delete-member]');if(edit){editMember(edit.dataset.editMember);return}if(!remove)return;const member=membersCache.find(item=>item.id===remove.dataset.deleteMember);if(!member||!confirm('Excluir o membro "'+member.full_name+'"? Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita.'))return;remove.disabled=true;try{const response=await fetch('/financeiro/api/membros/'+encodeURIComponent(member.id),{method:'DELETE'});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel excluir o membro.');if(memberEditId.value===member.id){memberForm.reset();clearMemberEditing()}await loadMembers()}catch(error){alert(error.message)}finally{remove.disabled=false}});
    memberForm.addEventListener('submit',async e=>{e.preventDefault();const button=memberForm.querySelector('.save'),editingId=memberEditId.value;button.disabled=true;button.textContent='Salvando\u2026';memberMessage.classList.remove('show');memberMessage.style.background='';memberMessage.style.color='';try{const fields=new FormData(memberForm);const body=new FormData();body.append('member',JSON.stringify(Object.fromEntries(fields.entries())));if(selectedMemberPhoto)body.append('photo',selectedMemberPhoto);const response=await fetch(editingId?'/financeiro/api/membros/'+encodeURIComponent(editingId):'/financeiro/api/membros',{method:editingId?'PUT':'POST',body});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel salvar o membro.');memberForm.reset();clearMemberEditing();memberMessage.textContent=editingId?'Membro atualizado com sucesso.':'Membro salvo com sucesso.';memberMessage.classList.add('show');await loadMembers();setTimeout(()=>memberMessage.classList.remove('show'),4000)}catch(error){memberMessage.textContent=error.message;memberMessage.style.background='#fff0f0';memberMessage.style.color='#9f1d2a';memberMessage.classList.add('show')}finally{button.disabled=false;button.textContent=memberEditId.value?'Atualizar membro':'Salvar membro'}});
    function showModule(name){const allowed=allowedViews(),target=allowed.includes(name)?name:allowed[0];history.replaceState(null,'','#'+target);document.querySelectorAll('.module-view').forEach(view=>view.hidden=view.id!=='view-'+target);document.querySelectorAll('.nav-button').forEach(button=>button.classList.toggle('active',button.dataset.view===target));if(target==='dashboard')loadDashboard();if(target==='members')loadMembers();if(target==='finance'&&currentUser?.role==='admin')render();if(target==='users'){loadUsers();loadPasswordResets()}}
    document.querySelectorAll('.nav-button').forEach(button=>button.addEventListener('click',()=>{history.replaceState(null,'','#'+button.dataset.view);showModule(button.dataset.view)}));
    window.addEventListener('hashchange',()=>showModule(location.hash.slice(1)));
    [income,expenses].forEach(el=>el.addEventListener('input',updateBalance));
    [income,expenses,tithe,transferred].forEach(el=>el.addEventListener('blur',()=>{el.value=currency(number(el.value));updateBalance()}));
    function clearReportEditing(){editingReportId='';editingReportDate='';documents.required=true;saveButton.textContent='Salvar relat\xF3rio'}
    function editReport(id){if(currentUser?.role!=='admin')return;const report=reportsCache.find(item=>item.id===id);if(!report)return;editingReportId=id;editingReportDate=report.report_date||'';churchSelect.value=report.church_id||'';form.responsible.value=report.responsible||'';form.members.value=Number(report.members)||0;income.value=currency(report.income);expenses.value=currency(report.expenses);tithe.value=currency(report.tithe||0);transferred.value=currency(report.transferred||0);documents.required=false;saveButton.textContent='Atualizar relat\xF3rio';updateBalance();form.scrollIntoView({behavior:'smooth',block:'start'})}
    reports.addEventListener('click',async e=>{if(currentUser?.role!=='admin')return;const edit=e.target.closest('[data-edit-report]'),remove=e.target.closest('[data-delete-report]');if(edit){editReport(edit.dataset.editReport);return}if(!remove||!confirm('Excluir este relat\xF3rio e todos os documentos anexados? Esta a\xE7\xE3o n\xE3o poder\xE1 ser desfeita.'))return;remove.disabled=true;try{const response=await fetch('/financeiro/api/relatorios/'+encodeURIComponent(remove.dataset.deleteReport),{method:'DELETE'});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel excluir o relat\xF3rio.');if(editingReportId===remove.dataset.deleteReport){form.reset();clearReportEditing()}await render();await loadDashboard()}catch(error){alert(error.message)}finally{remove.disabled=false}});
    form.addEventListener('reset',()=>setTimeout(()=>{clearReportEditing();updateBalance();message.classList.remove('show')},0));
    form.addEventListener('submit',async e=>{e.preventDefault();saveButton.disabled=true;saveButton.textContent='Salvando\u2026';message.classList.remove('show');message.textContent=editingReportId?'Relat\xF3rio atualizado com sucesso.':'Relat\xF3rio e documentos salvos com sucesso.';message.style.background='';message.style.color='';try{const selected=churchSelect.options[churchSelect.selectedIndex];const payload={report_date:editingReportDate||new Date().toLocaleDateString('pt-BR'),church_id:churchSelect.value,church:selected?.dataset.name||'',responsible:form.responsible.value.trim(),members:Number(form.members.value),income:number(income.value),expenses:number(expenses.value),balance:updateBalance(),tithe:number(tithe.value),transferred:number(transferred.value)};const body=new FormData();body.append('report',JSON.stringify(payload));[...documents.files].forEach(file=>body.append('documents',file));const response=await fetch(editingReportId?'/financeiro/api/relatorios/'+encodeURIComponent(editingReportId):'/financeiro/api/relatorios',{method:editingReportId?'PUT':'POST',body});const result=await response.json();if(!response.ok)throw new Error(result.error||'N\xE3o foi poss\xEDvel salvar o relat\xF3rio.');form.reset();if(currentUser?.role==='member')form.responsible.value=currentUser.name;updateBalance();message.classList.add('show');if(currentUser?.role==='admin')await render();setTimeout(()=>message.classList.remove('show'),4000)}catch(error){message.textContent=error.message;message.style.background='#fff0f0';message.style.color='#9f1d2a';message.classList.add('show')}finally{saveButton.disabled=false;saveButton.textContent=editingReportId?'Atualizar relat\xF3rio':'Salvar relat\xF3rio'}});
    updateBalance();updateDashboardCsv();initializeSession();updateChurchRegistrationAvailability();setInterval(updateChurchRegistrationAvailability,1000);setInterval(()=>{if(currentUser&&['admin','agent'].includes(currentUser.role)&&!document.querySelector('#view-dashboard').hidden)loadDashboard()},30000);
  <\/script>
</body></html>`])));
var json = /* @__PURE__ */ __name((data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { "content-type": "application/json; charset=UTF-8", "cache-control": "no-store" }
}), "json");
var safeText = /* @__PURE__ */ __name((value) => String(value ?? "").replace(/[&<>"']/g, (char) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
})[char]), "safeText");
var AUTH_COOKIE = "ipda_finance_session";
var SESSION_SECONDS = 8 * 60 * 60;
var PASSWORD_ITERATIONS = 1e5;
var SECURITY_POLICY_VERSION = "2026-07-07";
var textEncoder = new TextEncoder();
function parseCookies(value) {
  const result = {};
  for (const part of String(value || "").split(";")) {
    const index = part.indexOf("=");
    if (index < 0) continue;
    result[part.slice(0, index).trim()] = decodeURIComponent(part.slice(index + 1).trim());
  }
  return result;
}
__name(parseCookies, "parseCookies");
function bytesToBase64(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary);
}
__name(bytesToBase64, "bytesToBase64");
function base64ToBytes(value) {
  const binary = atob(String(value || ""));
  return Uint8Array.from(binary, (char) => char.charCodeAt(0));
}
__name(base64ToBytes, "base64ToBytes");
function randomToken(size = 32) {
  const bytes = new Uint8Array(size);
  crypto.getRandomValues(bytes);
  return bytesToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}
__name(randomToken, "randomToken");
async function sha256(value) {
  return bytesToBase64(new Uint8Array(await crypto.subtle.digest("SHA-256", textEncoder.encode(String(value)))));
}
__name(sha256, "sha256");
async function derivePassword(password, saltBase64, iterations = PASSWORD_ITERATIONS) {
  const key = await crypto.subtle.importKey("raw", textEncoder.encode(String(password)), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: base64ToBytes(saltBase64), iterations }, key, 256);
  return bytesToBase64(new Uint8Array(bits));
}
__name(derivePassword, "derivePassword");
async function newPasswordRecord(password) {
  const salt = new Uint8Array(16);
  crypto.getRandomValues(salt);
  const passwordSalt = bytesToBase64(salt);
  return { passwordSalt, passwordHash: await derivePassword(password, passwordSalt), passwordIterations: PASSWORD_ITERATIONS };
}
__name(newPasswordRecord, "newPasswordRecord");
function sessionCookie(token) {
  return `${AUTH_COOKIE}=${encodeURIComponent(token)}; Path=/financeiro; Max-Age=${SESSION_SECONDS}; HttpOnly; Secure; SameSite=Strict`;
}
__name(sessionCookie, "sessionCookie");
function clearSessionCookie() {
  return `${AUTH_COOKIE}=; Path=/financeiro; Max-Age=0; HttpOnly; Secure; SameSite=Strict`;
}
__name(clearSessionCookie, "clearSessionCookie");
function jsonWithCookie(data, status, cookie) {
  return new Response(JSON.stringify(data), { status, headers: {
    "content-type": "application/json; charset=UTF-8",
    "cache-control": "no-store",
    "set-cookie": cookie
  } });
}
__name(jsonWithCookie, "jsonWithCookie");
async function currentSession(request, env) {
  const token = parseCookies(request.headers.get("Cookie"))[AUTH_COOKIE];
  if (!token) return null;
  const tokenHash = await sha256(token);
  const row = await env.DB.prepare(`SELECT u.id, u.name, u.login, u.email, u.role, u.status, s.token_hash, s.expires_at
    FROM auth_sessions s JOIN auth_users u ON u.id = s.user_id
    WHERE s.token_hash = ? AND s.expires_at > ? AND u.status = 'approved'`).bind(tokenHash, (/* @__PURE__ */ new Date()).toISOString()).first();
  if (!row) return null;
  return { id: row.id, name: row.name, login: row.login, email: row.email, role: row.role, tokenHash: row.token_hash };
}
__name(currentSession, "currentSession");
async function authorize(request, env, roles) {
  const user = await currentSession(request, env);
  if (!user) return { response: json({ error: "Fa\xE7a login para continuar." }, 401) };
  if (!roles.includes(user.role)) return { response: json({ error: "Seu perfil n\xE3o tem permiss\xE3o para esta a\xE7\xE3o." }, 403) };
  return { user };
}
__name(authorize, "authorize");
async function loginUser(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Informe login e senha." }, 400);
  }
  const login = String(data.login || "").trim().toLowerCase();
  const password = String(data.password || "");
  if (!login || !password) return json({ error: "Informe login e senha." }, 400);
  const user = await env.DB.prepare("SELECT * FROM auth_users WHERE login = ?").bind(login).first();
  if (!user) return json({ error: "Login ou senha inv\xE1lidos." }, 401);
  if (user.status === "pending") return json({ error: "Seu acesso ainda aguarda aprova\xE7\xE3o interna." }, 403);
  if (user.status !== "approved") return json({ error: "Este acesso n\xE3o est\xE1 autorizado." }, 403);
  if (user.locked_until && user.locked_until > (/* @__PURE__ */ new Date()).toISOString()) return json({ error: "Acesso temporariamente bloqueado. Tente novamente em 15 minutos." }, 429);
  const passwordHash = await derivePassword(password, user.password_salt, Number(user.password_iterations));
  if (passwordHash !== user.password_hash) {
    const failed = Number(user.failed_attempts || 0) + 1;
    const lockedUntil = failed >= 5 ? new Date(Date.now() + 15 * 60 * 1e3).toISOString() : null;
    await env.DB.prepare("UPDATE auth_users SET failed_attempts = ?, locked_until = ? WHERE id = ?").bind(failed >= 5 ? 0 : failed, lockedUntil, user.id).run();
    return json({ error: "Login ou senha inv\xE1lidos." }, 401);
  }
  const token = randomToken();
  const tokenHash = await sha256(token);
  const now = /* @__PURE__ */ new Date();
  const expiresAt = new Date(now.getTime() + SESSION_SECONDS * 1e3).toISOString();
  await env.DB.batch([
    env.DB.prepare("DELETE FROM auth_sessions WHERE expires_at <= ?").bind(now.toISOString()),
    env.DB.prepare("INSERT INTO auth_sessions (token_hash, user_id, expires_at, ip_address, user_agent) VALUES (?, ?, ?, ?, ?)").bind(tokenHash, user.id, expiresAt, request.headers.get("CF-Connecting-IP") || "", String(request.headers.get("User-Agent") || "").slice(0, 300)),
    env.DB.prepare("UPDATE auth_users SET failed_attempts = 0, locked_until = NULL, last_login_at = ? WHERE id = ?").bind(now.toISOString(), user.id)
  ]);
  return jsonWithCookie({ user: { id: user.id, name: user.name, login: user.login, role: user.role } }, 200, sessionCookie(token));
}
__name(loginUser, "loginUser");
async function logoutUser(request, env) {
  const token = parseCookies(request.headers.get("Cookie"))[AUTH_COOKIE];
  if (token) await env.DB.prepare("DELETE FROM auth_sessions WHERE token_hash = ?").bind(await sha256(token)).run();
  return jsonWithCookie({ ok: true }, 200, clearSessionCookie());
}
__name(logoutUser, "logoutUser");
async function requestAccess(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Dados inv\xE1lidos." }, 400);
  }
  const name = String(data.name || "").trim();
  const login = String(data.login || "").trim().toLowerCase();
  const email = String(data.email || "").trim().toLowerCase();
  const phone = String(data.phone || "").trim();
  const password = String(data.password || "");
  const role = data.requested_role === "agent" ? "agent" : "member";
  const acceptedTerms = data.accept_terms === "1" || data.accept_terms === true;
  const acceptedPrivacy = data.accept_privacy === "1" || data.accept_privacy === true;
  if (name.length < 3 || !/^[a-z0-9._-]{3,50}$/.test(login)) return json({ error: "Informe nome e login v\xE1lido usando letras, n\xFAmeros, ponto, h\xEDfen ou sublinhado." }, 400);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "Informe um e-mail v\xE1lido. Ele ser\xE1 necess\xE1rio para recuperar a senha." }, 400);
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits && (phoneDigits.length < 10 || phoneDigits.length > 13)) return json({ error: "Informe um telefone v\xE1lido com DDD." }, 400);
  if (password.length < 8) return json({ error: "A senha deve ter pelo menos 8 caracteres." }, 400);
  if (!acceptedTerms || !acceptedPrivacy) return json({ error: "Para solicitar acesso, aceite os Termos de Uso e a Pol\xEDtica de Privacidade." }, 400);
  const existing = await env.DB.prepare("SELECT id FROM auth_users WHERE login = ?").bind(login).first();
  if (existing) return json({ error: "Este login j\xE1 possui solicita\xE7\xE3o ou acesso." }, 409);
  const passwordRecord = await newPasswordRecord(password);
  const acceptedAt = (/* @__PURE__ */ new Date()).toISOString();
  await env.DB.prepare(`INSERT INTO auth_users
    (id, name, login, email, phone, password_hash, password_salt, password_iterations, role, status, created_at,
     terms_accepted_at, privacy_accepted_at, policy_version, consent_ip, consent_user_agent)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?, ?, ?, ?, ?)`).bind(crypto.randomUUID(), name, login, email || null, phone || null, passwordRecord.passwordHash, passwordRecord.passwordSalt, passwordRecord.passwordIterations, role, acceptedAt, acceptedAt, acceptedAt, SECURITY_POLICY_VERSION, request.headers.get("CF-Connecting-IP") || "", String(request.headers.get("User-Agent") || "").slice(0, 300)).run();
  return json({ ok: true }, 201);
}
__name(requestAccess, "requestAccess");
async function listAuthUsers(env) {
  return (await env.DB.prepare(`SELECT id, name, login, email, phone, role, status, created_at, approved_at, approved_by, last_login_at,
    terms_accepted_at, privacy_accepted_at, policy_version
    FROM auth_users ORDER BY CASE status WHEN 'pending' THEN 0 WHEN 'approved' THEN 1 ELSE 2 END, created_at DESC`).all()).results || [];
}
__name(listAuthUsers, "listAuthUsers");
async function requestPasswordReset(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Dados inv\xE1lidos." }, 400);
  }
  const login = String(data.login || "").trim().toLowerCase();
  const email = String(data.email || "").trim().toLowerCase();
  const newPassword = String(data.new_password || "");
  if (!login || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "Informe o login e o e-mail cadastrado." }, 400);
  if (newPassword.length < 8) return json({ error: "A nova senha deve ter pelo menos 8 caracteres." }, 400);
  const passwordRecord = await newPasswordRecord(newPassword);
  const user = await env.DB.prepare("SELECT id FROM auth_users WHERE login = ? AND lower(email) = ? AND status = 'approved'").bind(login, email).first();
  const generic = { ok: true, message: "Se os dados conferirem, a solicita\xE7\xE3o ficar\xE1 dispon\xEDvel para aprova\xE7\xE3o administrativa." };
  if (!user) return json(generic, 201);
  const recent = await env.DB.prepare("SELECT id FROM auth_password_resets WHERE user_id = ? AND status = 'pending' AND requested_at > ?").bind(user.id, new Date(Date.now() - 10 * 60 * 1e3).toISOString()).first();
  if (recent) return json(generic, 201);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  await env.DB.batch([
    env.DB.prepare("UPDATE auth_password_resets SET status = 'rejected', reviewed_at = ?, reviewed_by = 'substitu\xEDda por nova solicita\xE7\xE3o' WHERE user_id = ? AND status = 'pending'").bind(now, user.id),
    env.DB.prepare(`INSERT INTO auth_password_resets
      (id, user_id, new_password_hash, new_password_salt, password_iterations, status, requested_at, requester_ip, requester_user_agent)
      VALUES (?, ?, ?, ?, ?, 'pending', ?, ?, ?)`).bind(crypto.randomUUID(), user.id, passwordRecord.passwordHash, passwordRecord.passwordSalt, passwordRecord.passwordIterations, now, request.headers.get("CF-Connecting-IP") || "", String(request.headers.get("User-Agent") || "").slice(0, 300))
  ]);
  return json(generic, 201);
}
__name(requestPasswordReset, "requestPasswordReset");
async function listPasswordResets(env) {
  return (await env.DB.prepare(`SELECT r.id, r.status, r.requested_at, r.reviewed_at, r.reviewed_by,
    u.name, u.login, u.email
    FROM auth_password_resets r JOIN auth_users u ON u.id = r.user_id
    ORDER BY CASE r.status WHEN 'pending' THEN 0 ELSE 1 END, r.requested_at DESC LIMIT 100`).all()).results || [];
}
__name(listPasswordResets, "listPasswordResets");
async function reviewPasswordReset(env, id, action, admin) {
  const reset = await env.DB.prepare("SELECT * FROM auth_password_resets WHERE id = ?").bind(id).first();
  if (!reset) return json({ error: "Solicita\xE7\xE3o de senha n\xE3o encontrada." }, 404);
  if (reset.status !== "pending") return json({ error: "Esta solicita\xE7\xE3o j\xE1 foi revisada." }, 409);
  const now = (/* @__PURE__ */ new Date()).toISOString();
  if (action === "approve") {
    await env.DB.batch([
      env.DB.prepare(`UPDATE auth_users SET password_hash = ?, password_salt = ?, password_iterations = ?,
        failed_attempts = 0, locked_until = NULL WHERE id = ?`).bind(reset.new_password_hash, reset.new_password_salt, reset.password_iterations, reset.user_id),
      env.DB.prepare("DELETE FROM auth_sessions WHERE user_id = ?").bind(reset.user_id),
      env.DB.prepare("UPDATE auth_password_resets SET status = 'approved', reviewed_at = ?, reviewed_by = ? WHERE id = ?").bind(now, admin.login, id)
    ]);
    return json({ ok: true });
  }
  if (action === "reject") {
    await env.DB.prepare("UPDATE auth_password_resets SET status = 'rejected', reviewed_at = ?, reviewed_by = ? WHERE id = ?").bind(now, admin.login, id).run();
    return json({ ok: true });
  }
  return json({ error: "A\xE7\xE3o inv\xE1lida." }, 400);
}
__name(reviewPasswordReset, "reviewPasswordReset");
async function updateAuthUser(request, env, id, action, admin) {
  const target = await env.DB.prepare("SELECT id, role FROM auth_users WHERE id = ?").bind(id).first();
  if (!target) return json({ error: "Usu\xE1rio n\xE3o encontrado." }, 404);
  if (action === "approve") {
    let data = {};
    try {
      data = await request.json();
    } catch {
    }
    const role = (/* @__PURE__ */ new Set(["admin", "agent", "member"])).has(data.role) ? data.role : "member";
    await env.DB.prepare("UPDATE auth_users SET role = ?, status = 'approved', approved_at = ?, approved_by = ? WHERE id = ?").bind(role, (/* @__PURE__ */ new Date()).toISOString(), admin.login, id).run();
    return json({ ok: true });
  }
  if (action === "reject") {
    if (id === admin.id) return json({ error: "Voc\xEA n\xE3o pode reprovar o pr\xF3prio acesso." }, 409);
    await env.DB.batch([
      env.DB.prepare("UPDATE auth_users SET status = 'rejected', approved_at = ?, approved_by = ? WHERE id = ?").bind((/* @__PURE__ */ new Date()).toISOString(), admin.login, id),
      env.DB.prepare("DELETE FROM auth_sessions WHERE user_id = ?").bind(id)
    ]);
    return json({ ok: true });
  }
  if (action === "delete") {
    if (id === admin.id) return json({ error: "Voc\xEA n\xE3o pode excluir o pr\xF3prio acesso." }, 409);
    await env.DB.batch([env.DB.prepare("DELETE FROM auth_sessions WHERE user_id = ?").bind(id), env.DB.prepare("DELETE FROM auth_users WHERE id = ?").bind(id)]);
    return json({ ok: true });
  }
  return json({ error: "A\xE7\xE3o inv\xE1lida." }, 400);
}
__name(updateAuthUser, "updateAuthUser");
async function changeOwnPassword(request, env, user) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Dados inv\xE1lidos." }, 400);
  }
  const currentPassword = String(data.current_password || ""), newPassword = String(data.new_password || "");
  if (newPassword.length < 8) return json({ error: "A nova senha deve ter pelo menos 8 caracteres." }, 400);
  const stored = await env.DB.prepare("SELECT password_hash, password_salt, password_iterations FROM auth_users WHERE id = ?").bind(user.id).first();
  if (!stored || await derivePassword(currentPassword, stored.password_salt, Number(stored.password_iterations)) !== stored.password_hash) return json({ error: "Senha atual incorreta." }, 400);
  const record = await newPasswordRecord(newPassword);
  await env.DB.batch([
    env.DB.prepare("UPDATE auth_users SET password_hash = ?, password_salt = ?, password_iterations = ?, failed_attempts = 0, locked_until = NULL WHERE id = ?").bind(record.passwordHash, record.passwordSalt, record.passwordIterations, user.id),
    env.DB.prepare("DELETE FROM auth_sessions WHERE user_id = ? AND token_hash <> ?").bind(user.id, user.tokenHash)
  ]);
  return json({ ok: true });
}
__name(changeOwnPassword, "changeOwnPassword");
let transferredColumnReady;
async function ensureTransferredColumn(env) {
  if (!transferredColumnReady) {
    transferredColumnReady = (async () => {
      const columns = (await env.DB.prepare("PRAGMA table_info(financial_reports)").all()).results || [];
      if (!columns.some((column) => column.name === "transferred")) {
        await env.DB.prepare("ALTER TABLE financial_reports ADD COLUMN transferred REAL NOT NULL DEFAULT 0").run();
      }
    })().catch((error) => {
      transferredColumnReady = null;
      throw error;
    });
  }
  return transferredColumnReady;
}
__name(ensureTransferredColumn, "ensureTransferredColumn");
async function listReports(env) {
  await ensureTransferredColumn(env);
  const reports = (await env.DB.prepare(`SELECT fr.*, c.totvs_code
    FROM financial_reports fr
    LEFT JOIN churches c ON c.id = fr.church_id
    ORDER BY fr.created_at DESC LIMIT 100`).all()).results || [];
  const documents = (await env.DB.prepare("SELECT id, report_id, filename, content_type, size FROM financial_documents ORDER BY created_at ASC").all()).results || [];
  const byReport = /* @__PURE__ */ new Map();
  for (const document of documents) {
    if (!byReport.has(document.report_id)) byReport.set(document.report_id, []);
    byReport.get(document.report_id).push(document);
  }
  return reports.map((report) => ({ ...report, documents: byReport.get(report.id) || [] }));
}
__name(listReports, "listReports");
async function dashboardData(month, env) {
  if (!/^\d{4}-\d{2}$/.test(month)) return null;
  await ensureTransferredColumn(env);
  const churches = (await env.DB.prepare("SELECT id, name, totvs_code, classification, city, state FROM churches ORDER BY name COLLATE NOCASE").all()).results || [];
  const reports = (await env.DB.prepare(`SELECT church_id, church, income, expenses, balance, tithe, transferred, report_date, created_at
    FROM financial_reports
    WHERE substr(report_date, 7, 4) || '-' || substr(report_date, 4, 2) = ?
    ORDER BY created_at DESC`).bind(month).all()).results || [];
  const totalsByChurch = /* @__PURE__ */ new Map();
  for (const report of reports) {
    if (!report.church_id) continue;
    const current = totalsByChurch.get(report.church_id) || { income: 0, expenses: 0, balance: 0, tithe: 0, transferred: 0, last_report: report.report_date };
    current.income += Number(report.income) || 0;
    current.expenses += Number(report.expenses) || 0;
    current.balance += Number(report.balance) || 0;
    current.tithe += Number(report.tithe) || 0;
    current.transferred += Number(report.transferred) || 0;
    totalsByChurch.set(report.church_id, current);
  }
  const rows = churches.map((church) => {
    const totals = totalsByChurch.get(church.id);
    return { ...church, status: totals ? "Fechado" : "Pendente", income: totals?.income || 0, expenses: totals?.expenses || 0, balance: totals?.balance || 0, tithe: totals?.tithe || 0, transferred: totals?.transferred || 0, last_report: totals?.last_report || null };
  });
  const closed = rows.filter((church) => church.status === "Fechado").length;
  const summary = rows.reduce((all, church) => ({ ...all, income: all.income + church.income, expenses: all.expenses + church.expenses, balance: all.balance + church.balance, tithe: all.tithe + church.tithe, transferred: all.transferred + church.transferred }), { income: 0, expenses: 0, balance: 0, tithe: 0, transferred: 0 });
  return { month, updated_at: (/* @__PURE__ */ new Date()).toISOString(), summary: { ...summary, total: rows.length, closed, pending: rows.length - closed, percent: rows.length ? Math.round(closed / rows.length * 100) : 0 }, churches: rows };
}
__name(dashboardData, "dashboardData");
function dashboardCsv(data) {
  const safeCsv = /* @__PURE__ */ __name((value) => {
    let text = String(value ?? "");
    if (/^[=+\-@]/.test(text)) text = "'" + text;
    return '"' + text.replace(/"/g, '""') + '"';
  }, "safeCsv");
  const decimal = /* @__PURE__ */ __name((value) => Number(value || 0).toFixed(2).replace(".", ","), "decimal");
  const headers = ["M\xEAs de refer\xEAncia", "Igreja", "TOTVS", "Classifica\xE7\xE3o", "Cidade", "Estado", "Situa\xE7\xE3o", "Entradas", "Sa\xEDdas", "Saldo", "D\xEDzimo informativo", "Transfer\xEAncia para o pr\xF3ximo m\xEAs (reserva para despesas b\xE1sicas)", "\xDAltimo envio"];
  const rows = data.churches.map((church) => [
    data.month,
    church.name,
    church.totvs_code || "",
    church.classification,
    church.city || "",
    church.state || "",
    church.status,
    decimal(church.income),
    decimal(church.expenses),
    decimal(church.balance),
    decimal(church.tithe),
    decimal(church.transferred),
    church.last_report || ""
  ]);
  const summary = [data.month, "TOTAL GERAL", "", "", "", "", `${data.summary.closed} fechadas / ${data.summary.pending} pendentes`, decimal(data.summary.income), decimal(data.summary.expenses), decimal(data.summary.balance), decimal(data.summary.tithe), decimal(data.summary.transferred), ""];
  const content = [headers, ...rows, summary].map((row) => row.map(safeCsv).join(";")).join("\r\n");
  return new Response("\uFEFF" + content, { headers: {
    "content-type": "text/csv; charset=UTF-8",
    "content-disposition": `attachment; filename="auditoria-financeira-${data.month}.csv"`,
    "cache-control": "no-store",
    "x-content-type-options": "nosniff"
  } });
}
__name(dashboardCsv, "dashboardCsv");
async function listChurches(env) {
  return (await env.DB.prepare(`SELECT c.*, p.name AS parent_name
    FROM churches c LEFT JOIN churches p ON p.id = c.parent_church_id
    ORDER BY c.name COLLATE NOCASE`).all()).results || [];
}
__name(listChurches, "listChurches");
async function saveChurch(request, env, churchId = null) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: "Dados da igreja inv\xE1lidos." }, 400);
  }
  const clean = /* @__PURE__ */ __name((value) => String(value || "").trim(), "clean");
  const name = clean(data.name), classification = clean(data.classification), address = clean(data.address), parentChoice = clean(data.parent_church_id);
  if (!name || !classification || !address) return json({ error: "Informe nome, classifica\xE7\xE3o e endere\xE7o da igreja." }, 400);
  const allowed = /* @__PURE__ */ new Set(["Local", "Setorial", "Estadual", "Regional", "Central"]);
  if (!allowed.has(classification)) return json({ error: "Classifica\xE7\xE3o inv\xE1lida." }, 400);
  if (classification !== "Estadual" && !parentChoice) return json({ error: "Selecione a igreja \xE0 qual esta unidade pertence." }, 400);
  let parentChurchId = null;
  if (classification !== "Estadual") {
    if (churchId && parentChoice === churchId) return json({ error: "Uma igreja n\xE3o pode pertencer a ela mesma." }, 400);
    const parent = await env.DB.prepare("SELECT id FROM churches WHERE id = ?").bind(parentChoice).first();
    if (!parent) return json({ error: "Selecione uma igreja respons\xE1vel v\xE1lida." }, 400);
    if (churchId) {
      const cycle = await env.DB.prepare(`WITH RECURSIVE descendants(id) AS (
        SELECT id FROM churches WHERE parent_church_id = ?
        UNION ALL SELECT c.id FROM churches c JOIN descendants d ON c.parent_church_id = d.id
      ) SELECT id FROM descendants WHERE id = ? LIMIT 1`).bind(churchId, parentChoice).first();
      if (cycle) return json({ error: "Este v\xEDnculo criaria um ciclo entre as igrejas." }, 400);
    }
    parentChurchId = parent.id;
  }
  const id = churchId || crypto.randomUUID(), totvs = clean(data.totvs_code) || null;
  try {
    if (churchId) {
      const existing = await env.DB.prepare("SELECT id FROM churches WHERE id = ?").bind(churchId).first();
      if (!existing) return json({ error: "Igreja n\xE3o encontrada." }, 404);
      await env.DB.prepare(`UPDATE churches SET name = ?, totvs_code = ?, classification = ?, address = ?, neighborhood = ?, city = ?, state = ?, postal_code = ?, address_number = ?, reference_point = ?, parent_church_id = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?`).bind(
        name,
        totvs,
        classification,
        address,
        clean(data.neighborhood),
        clean(data.city),
        clean(data.state),
        clean(data.postal_code),
        clean(data.address_number),
        clean(data.reference_point),
        parentChurchId,
        churchId
      ).run();
      return json({ ok: true, id: churchId });
    }
    await env.DB.prepare(`INSERT INTO churches (id, name, totvs_code, classification, address, neighborhood, city, state, postal_code, address_number, reference_point, parent_church_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(
      id,
      name,
      totvs,
      classification,
      address,
      clean(data.neighborhood),
      clean(data.city),
      clean(data.state),
      clean(data.postal_code),
      clean(data.address_number),
      clean(data.reference_point),
      parentChurchId
    ).run();
    return json({ ok: true, id }, 201);
  } catch (error) {
    if (String(error).includes("UNIQUE")) return json({ error: "Este c\xF3digo TOTVS j\xE1 est\xE1 cadastrado." }, 409);
    return json({ error: "N\xE3o foi poss\xEDvel salvar a igreja." }, 500);
  }
}
__name(saveChurch, "saveChurch");
async function deleteChurch(id, env) {
  const church = await env.DB.prepare("SELECT id, name FROM churches WHERE id = ?").bind(id).first();
  if (!church) return json({ error: "Igreja n\xE3o encontrada." }, 404);
  const childCount = Number((await env.DB.prepare("SELECT COUNT(*) AS total FROM churches WHERE parent_church_id = ?").bind(id).first())?.total || 0);
  const memberCount = Number((await env.DB.prepare("SELECT COUNT(*) AS total FROM members WHERE church_id = ?").bind(id).first())?.total || 0);
  const reportCount = Number((await env.DB.prepare("SELECT COUNT(*) AS total FROM financial_reports WHERE church_id = ?").bind(id).first())?.total || 0);
  if (childCount || memberCount || reportCount) return json({ error: `N\xE3o \xE9 poss\xEDvel excluir: existem ${childCount} igreja(s), ${memberCount} membro(s) e ${reportCount} relat\xF3rio(s) vinculados.` }, 409);
  await env.DB.prepare("DELETE FROM churches WHERE id = ?").bind(id).run();
  return json({ ok: true });
}
__name(deleteChurch, "deleteChurch");
async function listMembers(env) {
  return (await env.DB.prepare(`SELECT m.*, c.name AS church_name
    FROM members m JOIN churches c ON c.id = m.church_id
    ORDER BY m.full_name COLLATE NOCASE`).all()).results || [];
}
__name(listMembers, "listMembers");
async function saveMember(request, env, memberId = null) {
  let data, photo = null;
  try {
    const formData = await request.formData();
    data = JSON.parse(String(formData.get("member") || "{}"));
    const candidate = formData.get("photo");
    if (candidate && typeof candidate !== "string" && candidate.size > 0) photo = candidate;
  } catch {
    return json({ error: "Dados do membro inv\xE1lidos." }, 400);
  }
  const clean = /* @__PURE__ */ __name((value) => String(value || "").trim(), "clean");
  const fullName = clean(data.full_name), churchId = clean(data.church_id), status = clean(data.status), ministryRole = clean(data.ministry_role);
  if (!fullName || !churchId || !ministryRole) return json({ error: "Informe o nome, a igreja e a fun\xE7\xE3o ministerial do membro." }, 400);
  if (!(/* @__PURE__ */ new Set(["Ativo", "Inativo"])).has(status)) return json({ error: "Situa\xE7\xE3o do membro inv\xE1lida." }, 400);
  if (!(/* @__PURE__ */ new Set(["Cooperador", "Obreiro", "Di\xE1cono", "Membro", "Presb\xEDtero", "Pastor"])).has(ministryRole)) return json({ error: "Fun\xE7\xE3o ministerial inv\xE1lida." }, 400);
  const church = await env.DB.prepare("SELECT id FROM churches WHERE id = ?").bind(churchId).first();
  if (!church) return json({ error: "Selecione uma igreja v\xE1lida." }, 400);
  const cpfDigits = clean(data.cpf).replace(/\D/g, "");
  if (cpfDigits && cpfDigits.length !== 11) return json({ error: "Informe um CPF com 11 d\xEDgitos." }, 400);
  const imageTypes = /* @__PURE__ */ new Set(["image/jpeg", "image/png", "image/webp"]);
  if (photo && !imageTypes.has(photo.type)) return json({ error: "A foto deve estar em JPG, PNG ou WEBP." }, 400);
  if (photo && photo.size > 5 * 1024 * 1024) return json({ error: "A foto pode ter no m\xE1ximo 5 MB." }, 400);
  const existing = memberId ? await env.DB.prepare("SELECT * FROM members WHERE id = ?").bind(memberId).first() : null;
  if (memberId && !existing) return json({ error: "Membro n\xE3o encontrado." }, 404);
  const id = memberId || crypto.randomUUID();
  let photoKey = null;
  try {
    if (photo) {
      const extension = photo.type === "image/png" ? ".png" : photo.type === "image/webp" ? ".webp" : ".jpg";
      photoKey = "members/" + id + extension;
      await env.DOCUMENTS.put(photoKey, photo.stream(), { httpMetadata: { contentType: photo.type }, customMetadata: { memberId: id, filename: String(photo.name) } });
    }
    const isLeader = data.is_leader === "1" || data.is_leader === true;
    const isFinancial = data.is_financial === "1" || data.is_financial === true;
    if (existing) {
      await env.DB.prepare(`UPDATE members SET church_id = ?, full_name = ?, cpf = ?, phone = ?, birth_date = ?, status = ?, ministry_role = ?, photo_key = ?, photo_type = ?, photo_name = ?, is_leader = ?, is_financial = ? WHERE id = ?`).bind(
        churchId,
        fullName,
        cpfDigits || null,
        clean(data.phone),
        clean(data.birth_date),
        status,
        ministryRole,
        photoKey || existing.photo_key,
        photo ? photo.type : existing.photo_type,
        photo ? String(photo.name) : existing.photo_name,
        isLeader ? 1 : 0,
        isFinancial ? 1 : 0,
        id
      ).run();
      if (photoKey && existing.photo_key && existing.photo_key !== photoKey) await env.DOCUMENTS.delete(existing.photo_key);
      return json({ ok: true, id });
    }
    await env.DB.prepare(`INSERT INTO members
      (id, church_id, full_name, cpf, phone, birth_date, status, ministry_role, photo_key, photo_type, photo_name, is_leader, is_financial)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(
      id,
      churchId,
      fullName,
      cpfDigits || null,
      clean(data.phone),
      clean(data.birth_date),
      status,
      ministryRole,
      photoKey,
      photo ? photo.type : null,
      photo ? String(photo.name) : null,
      isLeader ? 1 : 0,
      isFinancial ? 1 : 0
    ).run();
    return json({ ok: true, id }, 201);
  } catch (error) {
    if (photoKey) await env.DOCUMENTS.delete(photoKey);
    if (String(error).includes("UNIQUE")) return json({ error: "J\xE1 existe um membro cadastrado com este CPF." }, 409);
    return json({ error: "N\xE3o foi poss\xEDvel salvar o membro." }, 500);
  }
}
__name(saveMember, "saveMember");
async function deleteMember(id, env) {
  const member = await env.DB.prepare("SELECT id, photo_key FROM members WHERE id = ?").bind(id).first();
  if (!member) return json({ error: "Membro n\xE3o encontrado." }, 404);
  await env.DB.prepare("DELETE FROM members WHERE id = ?").bind(id).run();
  if (member.photo_key) await env.DOCUMENTS.delete(member.photo_key);
  return json({ ok: true });
}
__name(deleteMember, "deleteMember");
async function serveMemberPhoto(id, env) {
  const member = await env.DB.prepare("SELECT photo_key, photo_type FROM members WHERE id = ?").bind(id).first();
  if (!member?.photo_key) return new Response("Foto n\xE3o encontrada", { status: 404 });
  const object = await env.DOCUMENTS.get(member.photo_key);
  if (!object) return new Response("Foto n\xE3o encontrada", { status: 404 });
  return new Response(object.body, { headers: {
    "content-type": member.photo_type || "image/jpeg",
    "cache-control": "private, max-age=3600",
    "x-content-type-options": "nosniff"
  } });
}
__name(serveMemberPhoto, "serveMemberPhoto");
async function saveReport(request, env, reportId = '') {
  await ensureTransferredColumn(env);
  let formData;
  try {
    formData = await request.formData();
  } catch {
    return json({ error: "Envio inv\xE1lido. Preencha o relat\xF3rio e anexe os documentos novamente." }, 400);
  }
  let report;
  try {
    report = JSON.parse(String(formData.get("report") || "{}"));
  } catch {
    return json({ error: "Dados do relat\xF3rio inv\xE1lidos." }, 400);
  }
  const church = String(report.church || "").trim();
  const churchId = String(report.church_id || "").trim();
  const responsible = String(report.responsible || "").trim();
  if (!church || !responsible) return json({ error: "Informe a igreja e o respons\xE1vel." }, 400);
  const files = formData.getAll("documents").filter((item) => typeof item !== "string" && item.size > 0);
  if (!reportId && !files.length) return json({ error: "Anexe pelo menos um documento para salvar o relat\xF3rio." }, 400);
  if (files.length > 10) return json({ error: "Envie no m\xE1ximo 10 documentos por relat\xF3rio." }, 400);
  if (files.some((file) => file.size > 10 * 1024 * 1024)) return json({ error: "Cada documento pode ter no m\xE1ximo 10 MB." }, 400);
  const accepted = /* @__PURE__ */ new Set(["application/pdf", "image/jpeg", "image/png", "image/webp"]);
  if (files.some((file) => !accepted.has(file.type))) return json({ error: "Use somente arquivos PDF, JPG, PNG ou WEBP." }, 400);
  const existing = reportId ? await env.DB.prepare("SELECT id FROM financial_reports WHERE id = ?").bind(reportId).first() : null;
  if (reportId && !existing) return json({ error: "Relat\xF3rio n\xE3o encontrado." }, 404);
  reportId = reportId || crypto.randomUUID();
  const stored = [];
  try {
    for (const file of files) {
      const documentId = crypto.randomUUID();
      const extension = String(file.name).includes(".") ? "." + String(file.name).split(".").pop().replace(/[^a-zA-Z0-9]/g, "").slice(0, 8) : "";
      const key = reportId + "/" + documentId + extension;
      await env.DOCUMENTS.put(key, file.stream(), { httpMetadata: { contentType: file.type }, customMetadata: { filename: String(file.name), reportId } });
      stored.push({ id: documentId, key, filename: String(file.name), type: file.type, size: file.size });
    }
    const values = [String(report.report_date || ""), church, responsible, Math.max(0, Number(report.members) || 0), Number(report.income) || 0, Number(report.expenses) || 0, (Number(report.income) || 0) - (Number(report.expenses) || 0), Number(report.tithe) || 0, Number(report.transferred) || 0, churchId || null];
    const statements = [existing ? env.DB.prepare(`UPDATE financial_reports SET report_date = ?, church = ?, responsible = ?, members = ?, income = ?, expenses = ?, balance = ?, tithe = ?, transferred = ?, church_id = ? WHERE id = ?`).bind(...values, reportId) : env.DB.prepare(`INSERT INTO financial_reports (report_date, church, responsible, members, income, expenses, balance, tithe, transferred, church_id, id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`).bind(...values, reportId)];
    for (const document of stored) statements.push(env.DB.prepare(`INSERT INTO financial_documents
      (id, report_id, r2_key, filename, content_type, size) VALUES (?, ?, ?, ?, ?, ?)`).bind(document.id, reportId, document.key, document.filename, document.type, document.size));
    await env.DB.batch(statements);
    return json({ ok: true, id: reportId }, existing ? 200 : 201);
  } catch (error) {
    await Promise.all(stored.map((document) => env.DOCUMENTS.delete(document.key)));
    return json({ error: "N\xE3o foi poss\xEDvel guardar o relat\xF3rio e seus documentos." }, 500);
  }
}
__name(saveReport, "saveReport");
async function deleteReport(id, env) {
  const report = await env.DB.prepare("SELECT id FROM financial_reports WHERE id = ?").bind(id).first();
  if (!report) return json({ error: "Relat\xF3rio n\xE3o encontrado." }, 404);
  const documents = (await env.DB.prepare("SELECT r2_key FROM financial_documents WHERE report_id = ?").bind(id).all()).results || [];
  await env.DB.prepare("DELETE FROM financial_reports WHERE id = ?").bind(id).run();
  await Promise.all(documents.map(document => env.DOCUMENTS.delete(document.r2_key)));
  return json({ ok: true });
}
__name(deleteReport, "deleteReport");
async function serveDocument(id, env) {
  const document = await env.DB.prepare("SELECT * FROM financial_documents WHERE id = ?").bind(id).first();
  if (!document) return new Response("Documento n\xE3o encontrado", { status: 404 });
  const object = await env.DOCUMENTS.get(document.r2_key);
  if (!object) return new Response("Arquivo n\xE3o encontrado", { status: 404 });
  return new Response(object.body, { headers: {
    "content-type": document.content_type,
    "content-length": String(document.size),
    "content-disposition": `inline; filename*=UTF-8''${encodeURIComponent(document.filename)}`,
    "cache-control": "private, max-age=300",
    "x-content-type-options": "nosniff"
  } });
}
__name(serveDocument, "serveDocument");
async function printableReport(id, env) {
  await ensureTransferredColumn(env);
  const report = await env.DB.prepare(`SELECT fr.*, c.totvs_code
    FROM financial_reports fr
    LEFT JOIN churches c ON c.id = fr.church_id
    WHERE fr.id = ?`).bind(id).first();
  if (!report) return new Response("Relat\xF3rio n\xE3o encontrado", { status: 404 });
  const documents = (await env.DB.prepare("SELECT * FROM financial_documents WHERE report_id = ? ORDER BY created_at").bind(id).all()).results || [];
  const money = /* @__PURE__ */ __name((value) => Number(value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" }), "money");
  const attachments = documents.length ? documents.map((document, index) => {
    const href = "/financeiro/documentos/" + encodeURIComponent(document.id);
    const preview = String(document.content_type).startsWith("image/") ? `<img src="${href}" alt="${safeText(document.filename)}">` : "";
    return `<article class="attachment"><h3>Documento ${index + 1}: ${safeText(document.filename)}</h3>${preview}<p><a href="${href}" target="_blank">Abrir documento anexado</a></p></article>`;
  }).join("") : "<p>Nenhum documento anexado.</p>";
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Relat\xF3rio financeiro - ${safeText(report.church)}</title><style>
    body{font-family:Arial,sans-serif;color:#243b2e;margin:0;background:#edf5ef}.sheet{width:min(900px,calc(100% - 28px));margin:24px auto;background:#fff;padding:36px;box-shadow:0 5px 20px #123d291a}.top{border-bottom:3px solid #d7a92e;padding-bottom:18px;margin-bottom:24px}.top h1{color:#14532d;margin:0 0 5px}.top p{margin:0;color:#607567}.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px 28px}.item{border-bottom:1px solid #d5e5d9;padding:10px 0}.item small{display:block;color:#607567;margin-bottom:4px}.item strong{font-size:1.05rem}.balance{color:${Number(report.balance) < 0 ? "#ba2d39" : "#087a55"}}.attachments{margin-top:28px}.attachment{break-inside:avoid;border-top:1px solid #d5e5d9;padding-top:16px;margin-top:16px}.attachment img{max-width:100%;max-height:650px;object-fit:contain;border:1px solid #d5e5d9}.print{position:fixed;right:20px;bottom:20px;background:#14532d;color:#fff;border:0;border-radius:8px;padding:13px 18px;font-weight:bold;cursor:pointer}@media print{body{background:#fff}.sheet{width:auto;margin:0;padding:0;box-shadow:none}.print{display:none}}@media(max-width:600px){.sheet{padding:22px}.grid{grid-template-columns:1fr}}
  </style></head><body><main class="sheet"><header class="top"><h1>Relat\xF3rio Financeiro</h1><p>Igreja Pentecostal Deus \xE9 Amor</p></header><section class="grid"><div class="item"><small>Data</small><strong>${safeText(report.report_date)}</strong></div><div class="item"><small>Igreja</small><strong>${safeText(report.church)}</strong></div><div class="item"><small>C\xF3digo TOTVS</small><strong>${safeText(report.totvs_code || "\u2014")}</strong></div><div class="item"><small>Respons\xE1vel</small><strong>${safeText(report.responsible)}</strong></div><div class="item"><small>Membros ativos</small><strong>${Number(report.members)}</strong></div><div class="item"><small>Entradas</small><strong>${money(report.income)}</strong></div><div class="item"><small>Sa\xEDdas</small><strong>${money(report.expenses)}</strong></div><div class="item"><small>Saldo (entradas \u2212 sa\xEDdas)</small><strong class="balance">${money(report.balance)}</strong></div><div class="item"><small>D\xEDzimo (informativo)</small><strong>${money(report.tithe)}</strong></div><div class="item"><small>Transfer\xEAncia para o pr\xF3ximo m\xEAs</small><strong>${money(report.transferred)}</strong><span style="display:block;color:#607567;font-size:.78rem;margin-top:4px">Reserva para despesas b\xE1sicas da igreja; n\xE3o representa transfer\xEAncia banc\xE1ria.</span></div></section><section class="attachments"><h2>Documentos anexados</h2>${attachments}</section></main><button class="print" onclick="window.print()">Salvar em PDF / Imprimir</button></body></html>`;
  return new Response(html, { headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "no-store" } });
}
__name(printableReport, "printableReport");
var worker_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/financeiro" || url.pathname === "/financeiro/") {
      return new Response(page, { headers: { "content-type": "text/html; charset=UTF-8", "cache-control": "no-store", "x-content-type-options": "nosniff" } });
    }
    if (url.pathname === "/financeiro/api/login" && request.method === "POST") return loginUser(request, env);
    if (url.pathname === "/financeiro/api/logout" && request.method === "POST") return logoutUser(request, env);
    if (url.pathname === "/financeiro/api/solicitar-acesso" && request.method === "POST") return requestAccess(request, env);
    if (url.pathname === "/financeiro/api/solicitar-nova-senha" && request.method === "POST") return requestPasswordReset(request, env);
    if (url.pathname === "/financeiro/api/session" && request.method === "GET") {
      const user = await currentSession(request, env);
      return user ? json({ user: { id: user.id, name: user.name, login: user.login, role: user.role } }) : json({ error: "Sess\xE3o n\xE3o autenticada." }, 401);
    }
    if (url.pathname === "/financeiro/api/minha-senha" && request.method === "POST") {
      const auth = await authorize(request, env, ["admin", "agent", "member"]);
      return auth.response || changeOwnPassword(request, env, auth.user);
    }
    if (url.pathname === "/financeiro/api/usuarios" && request.method === "GET") {
      const auth = await authorize(request, env, ["admin"]);
      return auth.response || json(await listAuthUsers(env));
    }
    if (url.pathname === "/financeiro/api/solicitacoes-senha" && request.method === "GET") {
      const auth = await authorize(request, env, ["admin"]);
      return auth.response || json(await listPasswordResets(env));
    }
    const resetActionMatch = url.pathname.match(/^\/financeiro\/api\/solicitacoes-senha\/([^/]+)\/(approve|reject)$/);
    if (resetActionMatch && request.method === "POST") {
      const auth = await authorize(request, env, ["admin"]);
      return auth.response || reviewPasswordReset(env, decodeURIComponent(resetActionMatch[1]), resetActionMatch[2], auth.user);
    }
    const userActionMatch = url.pathname.match(/^\/financeiro\/api\/usuarios\/([^/]+)\/(approve|reject|delete)$/);
    if (userActionMatch && request.method === "POST") {
      const auth = await authorize(request, env, ["admin"]);
      return auth.response || updateAuthUser(request, env, decodeURIComponent(userActionMatch[1]), userActionMatch[2], auth.user);
    }
    if (url.pathname === "/financeiro/api/relatorios" && request.method === "GET") {
      const auth = await authorize(request, env, ["admin"]);
      return auth.response || json(await listReports(env));
    }
    if (url.pathname === "/financeiro/api/relatorios" && request.method === "POST") {
      const auth = await authorize(request, env, ["admin", "agent", "member"]);
      return auth.response || saveReport(request, env);
    }
    const reportMatch = url.pathname.match(/^\/financeiro\/api\/relatorios\/([^/]+)$/);
    if (reportMatch && ["PUT", "DELETE"].includes(request.method)) {
      const auth = await authorize(request, env, ["admin"]);
      if (auth.response) return auth.response;
      const id = decodeURIComponent(reportMatch[1]);
      return request.method === "PUT" ? saveReport(request, env, id) : deleteReport(id, env);
    }
    if (url.pathname === "/financeiro/api/dashboard/exportar.csv" && request.method === "GET") {
      const auth = await authorize(request, env, ["admin"]);
      if (auth.response) return auth.response;
      const data = await dashboardData(url.searchParams.get("month") || "", env);
      return data ? dashboardCsv(data) : json({ error: "M\xEAs de refer\xEAncia inv\xE1lido." }, 400);
    }
    if (url.pathname === "/financeiro/api/dashboard" && request.method === "GET") {
      const auth = await authorize(request, env, ["admin", "agent"]);
      if (auth.response) return auth.response;
      const data = await dashboardData(url.searchParams.get("month") || "", env);
      return data ? json(data) : json({ error: "M\xEAs de refer\xEAncia inv\xE1lido." }, 400);
    }
    if (url.pathname === "/financeiro/api/igrejas" && request.method === "GET") {
      const auth = await authorize(request, env, ["admin", "agent", "member"]);
      return auth.response || json(await listChurches(env));
    }
    if (url.pathname === "/financeiro/api/igrejas" && request.method === "POST") {
      const auth = await authorize(request, env, ["admin", "agent"]);
      return auth.response || saveChurch(request, env);
    }
    const churchMatch = url.pathname.match(/^\/financeiro\/api\/igrejas\/([^/]+)$/);
    if (churchMatch && ["PUT", "DELETE"].includes(request.method)) {
      const auth = await authorize(request, env, ["admin", "agent"]);
      if (auth.response) return auth.response;
      return request.method === "PUT" ? saveChurch(request, env, decodeURIComponent(churchMatch[1])) : deleteChurch(decodeURIComponent(churchMatch[1]), env);
    }
    if (url.pathname === "/financeiro/api/membros" && request.method === "GET") {
      const auth = await authorize(request, env, ["admin", "agent"]);
      return auth.response || json(await listMembers(env));
    }
    if (url.pathname === "/financeiro/api/membros" && request.method === "POST") {
      const auth = await authorize(request, env, ["admin", "agent"]);
      return auth.response || saveMember(request, env);
    }
    const memberMatch = url.pathname.match(/^\/financeiro\/api\/membros\/([^/]+)$/);
    if (memberMatch && ["PUT", "DELETE"].includes(request.method)) {
      const auth = await authorize(request, env, ["admin", "agent"]);
      if (auth.response) return auth.response;
      return request.method === "PUT" ? saveMember(request, env, decodeURIComponent(memberMatch[1])) : deleteMember(decodeURIComponent(memberMatch[1]), env);
    }
    const memberPhotoMatch = url.pathname.match(/^\/financeiro\/membros\/([^/]+)\/foto$/);
    if (memberPhotoMatch && request.method === "GET") {
      const auth = await authorize(request, env, ["admin", "agent"]);
      return auth.response || serveMemberPhoto(decodeURIComponent(memberPhotoMatch[1]), env);
    }
    const documentMatch = url.pathname.match(/^\/financeiro\/documentos\/([^/]+)$/);
    if (documentMatch && request.method === "GET") {
      const auth = await authorize(request, env, ["admin"]);
      return auth.response || serveDocument(decodeURIComponent(documentMatch[1]), env);
    }
    const printMatch = url.pathname.match(/^\/financeiro\/relatorios\/([^/]+)\/imprimir$/);
    if (printMatch && request.method === "GET") {
      const auth = await authorize(request, env, ["admin"]);
      return auth.response || printableReport(decodeURIComponent(printMatch[1]), env);
    }
    return new Response("N\xE3o encontrado", { status: 404 });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
