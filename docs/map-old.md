---
layout: page
title: Карта
---
<ClientOnly>
  <iframe 
    src="https://map.milandur.ru/" 
    style="width: 100%; height: 80vh; border: none; display: block;"
    allowfullscreen
  ></iframe>
</ClientOnly>

<div style="margin: 40px auto 20px auto; max-width: 1200px; padding: 0 20px; text-align: center;">
  <h1 style="margin-bottom: 15px; font-size: 2.5em; font-weight: bold;">Команды для онлайн карты</h1>
  <p style="margin: 0 auto 20px auto; line-height: 1.8; max-width: 800px; font-size: 1.1em;">
    Онлайн карта позволяет игрокам видеть свое местоположение в реальном времени, 
    отмечать важные точки и координировать действия с другими участниками сервера.
  </p>

  <table style="width: 100%; max-width: 800px; border-collapse: collapse; margin: 0 auto;">
    <thead>
      <tr style="background-color: #2d2d2d;">
        <th style="padding: 12px; text-align: left; border: 1px solid #444; width: 40%;">Команда</th>
        <th style="padding: 12px; text-align: left; border: 1px solid #444; width: 60%;">Описание</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px; border: 1px solid #444;"><code>/map show</code></td>
        <td style="padding: 10px; border: 1px solid #444;">Показать себя на карте</td>
      </tr>
      <tr style="background-color: #1a1a1a;">
        <td style="padding: 10px; border: 1px solid #444;"><code>/map hide</code></td>
        <td style="padding: 10px; border: 1px solid #444;">Скрыть себя на карте</td>
      </tr>
      <tr>
        <td style="padding: 10px; border: 1px solid #444;"><code>/marker set &lt;название&gt;</code></td>
        <td style="padding: 10px; border: 1px solid #444;">Создать метку на карте</td>
      </tr>
      <tr style="background-color: #1a1a1a;">
        <td style="padding: 10px; border: 1px solid #444;"><code>/marker remove &lt;id&gt;</code></td>
        <td style="padding: 10px; border: 1px solid #444;">Удалить метку с карты</td>
      </tr>
    </tbody>
  </table>
</div>
