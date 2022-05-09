---
name: Assignment
about: Weekly assignment
title: '[Week 1] The Basics'
labels: 'assignment'
assignees: ''
---

### Tasks

- [ ] Create a fork of this repo
- [ ] Clone your fork to your local dev environment
- [ ] Install the dependencies and run the `npm run dev` command without issues
- [ ] Confirm access to the design Figma file
- [ ] Review the implementation approach with Lead Developer
- [ ] Create website "shell" layout on `_generic_page_layout.twig`
  - [ ] Review and define webfonts
  - [ ] Review and define colors
  - [ ] Review and define containers
  - [ ] Implement `_site_header.twig` component
  - [ ] Implement `_site_footer.twig` component
  - [ ] Implement `typography.twig` page
  - [ ] Make sure non-photo images are either inline SVG or URL encoded when used in CSS.

### Discussion to follow

This first week is about creating the website shell, which will be the base layout for the website. Working on the website shell is the best place to:

- Define the color scheme
- Define the `sans` and `serif` fonts
- Define the website main horizontal containers
- Define default typography
- Define other defaults

Rely primarily on `flexbox` when laying down the components. Use position `absolute` only when it's *absolutely* necessary.

### Deliverables

By the end of the week, you should have a `typography.twig` page, that extends the `_generic_page_layout.twig` layout, responsive, mobile first, with the main site header and footer implemented, progressively enhanced to agreed container sizes.

The contents of the typography page should be:

```html
<h1>Didn't melt fairer keepsakes since Fellowship elsewhere.</h1>
<p>Woodlands payment Osgiliath tightening. Barad-dur follow belly comforts tender tough bell? Many that live deserve death. Some that die deserve life. Outwitted teatime grasp defeated before stones reflection corset seen animals Saruman's call?</p>
<h2>Tad survive ensnare joy mistake courtesy Bagshot Row.</h2>
<p>Ligulas step drops both? You shall not pass! Tender respectable success Valar impressive unfriendly bloom scraped? Branch hey-diddle-diddle pony trouble'll sleeping during jump Narsil.</p>
<h3>North valor overflowing sort Iáve mister kingly money?</h3>
<p>Curse you and all the halflings! Deserted anytime Lake-town burned caves balls. Smoked lthilien forbids Thrain?</p>
<ul>
  <li>Adamant.</li>
  <li>Southfarthing!</li>
  <li>Witch-king.</li>
  <li>Precious.</li>
  <li>Gaffer's!</li>
</ul>
<ul>
  <li>Excuse tightening yet survives two cover Undómiel city ablaze.</li>
  <li>Keepsakes deeper clouds Buckland position 21 lied bicker fountains ashamed.</li>
  <li>Women rippling cold steps rules Thengel finer.</li>
  <li>Portents close Havens endured irons hundreds handle refused sister?</li>
  <li>Harbor Grubbs fellas riddles afar!</li>
</ul>
<h3>Narsil enjoying shattered bigger leaderless retrieve dreamed dwarf.</h3>
<p>Ravens wonder wanted runs me crawl gaining lots faster! Khazad-dum surprise baby season ranks. I bid you all a very fond farewell.</p>
<ol>
  <li>Narsil.</li>
  <li>Elros.</li>
  <li>Arwen Evenstar.</li>
  <li>Maggot's?</li>
  <li>Bagginses?</li>
</ol>
<ol>
  <li>Concerning Hobbits l golf air fifth bell prolonging camp.</li>
  <li>Grond humble rods nearest mangler.</li>
  <li>Enormity Lórien merry gravy stayed move.</li>
  <li>Diversion almost notion furs between fierce laboring Nazgûl ceaselessly parent.</li>
  <li>Agree ruling um wasteland Bagshot Row expect sleep.</li>
</ol>
<h3>Ere answering track forests shards roof!</h3>
<p>Delay freezes Gollum. Let the Ring-bearer decide. Bagshot Row chokes pole pauses immediately orders taught éored musing three-day? Disease rune repel source fire Goblinses already?</p>
<h4>Afraid smithy Fellowship debt carven hooks.</h4>
<p>What about second breakfast? Nags runt near Lindir lock discover level? Andûril breathe waited flatten union.</p>
<blockquote>
  <p>You shall be the Fellowship of the Ring.</p>
  <footer>—Númenor, <cite>sweeter burned verse</cite></footer>
</blockquote>
<h5>Should Shirelings extraordinary spends poison's willing enchantment.</h5>
<p>I think we should get off the road. Penalty sight splintered Misty Mountain mithril? Unrest lasts rode league bears absence Bracegirdle athletic contract nice parent slowed?</p>
<pre>Pardon Concerning Hobbits rune goblins? Twitching figure including rightful Thorin's level! Worth tubers threats Hornburg deadliest? Unfold thumping shh wants Homely!</pre>
<h6>Improve drops absolutely tight deceit potent Treebeard startled!</h6>
<p>J.R.R. Tolkien 3000 uttered veins <q>roaring winds moaning flaming</q>. Meddle <ins>measure pure</ins> Samwise Gamgee business! <sub>Lied</sub> mistake Proudfoots pon. Instance 80 <dfn>morbid ceremonial plunge</dfn> Anor mad. Questions shells hangs noble Proudfoots <var>throws</var>. <mark>Rampart damage</mark> questions Chubbs 3000 conjurer? Single tempt peasants <strong>Bolg Athelas Mordor Wraiths Azog Undómiel</strong> mangler? <samp>Nori Giants Undómiel Rivendell</samp> spike posts took. Fool's Underhill boarded <cite>vanishing twilight unheard-of</cite>. <abbr>Presence</abbr> Dunland lamb lair. Barricade <sup>didn't</sup> feelings purring vine Morgoth. Distract Giants nearing champion <kbd>T</kbd>. Clothing titles quick bother <em>Arod Gloin Beren</em> troop? Balls crashing bastards <small>arrives precisely rascal</small> stubbornness Snowbourn. Hobbitses rose barren <a>strengths tested mirrors moonlight password</a> center? Remade <x-code>free filthy</x-code> breaking respect amuse Arod? Vengeance <del>Elessar Wolves</del> posts remain doorway said! <time>Suspects</time> fight Merry hungers locked yelp.</p>
```

### Resources

- Customizing Container Sizes: https://tailwindcss.com/docs/screens#configuring-custom-screens


### Bonus

- Animate accessible mobile "hamburger" menu button with https://jonsuh.com/hamburgers/
