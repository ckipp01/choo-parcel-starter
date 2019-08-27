'use strict'

import html from 'choo/html'

import header from '../partials/header'

export default () => {
  return html`
    <div id="container">
      ${header()}
      <main>
        <p>
          I've started to really enjoy this combination.
          It's a no-nonsense simple way to get up and running
          quickly with minimal configuration. This is how I've
          been starting my projects that use both choo and parcel lately,
          so this is opinionated to my liking, but you should easily
          be able to switch anything around. Enjoy.
        </p>
        <a target="_blank" href="https://choo.io/">choo.io</a>
        <a target="_blank" href="https://parceljs.org/">parceljs.org</a>
      </main>
    </div>
  `
}
