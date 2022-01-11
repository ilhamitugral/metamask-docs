(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{425:function(e,t,a){"use strict";a.r(t);var n=a(11),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"snaps-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snaps-tutorial"}},[e._v("#")]),e._v(" Snaps Tutorial")]),e._v(" "),a("h2",{attrs:{id:"what-is-snaps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-snaps"}},[e._v("#")]),e._v(" What is Snaps?")]),e._v(" "),a("p",[e._v("Snaps are a new evolution of MetaMask's functionality. By using MetaMask Flask in conjunction with the Snaps API, developers are able to bring their own code to the wallet in a custom-made code laboratory. MetaMask is the first wallet to provide this openness and flexibility to developers, paving the way to scale the number of features and personalization available to the wallet and your Dapp.")]),e._v(" "),a("p",[e._v("Snaps allows developers to build and plug in their own APIs to MetaMask. No longer do you have to rely on MetaMask to roll out features and updates. The rate of innovation, and MetaMask's flexibility, are limited only by your imagination and your capacity to build.")]),e._v(" "),a("h2",{attrs:{id:"metamask-snaps-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metamask-snaps-overview"}},[e._v("#")]),e._v(" MetaMask Snaps: Overview")]),e._v(" "),a("p",[e._v("Broadly speaking, MetaMask Snaps consists of two things: (1) a way to run untrusted JavaScript inside the MetaMask application, and (2) APIs for websites and MetaMask to communicate with individual snaps. As with MetaMask’s "),a("a",{attrs:{href:"https://docs.metamask.io/guide/ethereum-provider.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ethereum JavaScript provider API"),a("OutboundLink")],1),e._v(", communication occurs via JSON-RPC requests and responses.")]),e._v(" "),a("h3",{attrs:{id:"current-functionality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#current-functionality"}},[e._v("#")]),e._v(" Current functionality")]),e._v(" "),a("p",[e._v("At present, snaps can make JSON-RPC requests of MetaMask, and websites can make JSON-RPC requests of MetaMask and snaps running inside MetaMask. In this way, snaps can expand MetaMask’s RPC API and change the behavior of the MetaMask application at runtime. Over time, MetaMask will use this to support different blockchains and other decentralized protocols, novel kinds of cryptography, novel kinds of crypto assets, and a countless number of other features.")]),e._v(" "),a("p",[e._v("For the prototype Snaps system, snaps cannot modify the MetaMask UI, but can extend the MetaMask RPC API, and exchange arbitrary messages with websites visited by the user. Therefore, the user interface for any snap must exist entirely in the website during the prototype stage.")]),e._v(" "),a("h3",{attrs:{id:"execution-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution-environment"}},[e._v("#")]),e._v(" Execution Environment")]),e._v(" "),a("p",[e._v("As stated, snaps are untrusted JavaScript programs, but execute safely inside the MetaMask application. To isolate snaps from the rest of the application, and to provide a “fully virtualizable” execution environment, MetaMask uses "),a("a",{attrs:{href:"https://github.com/endojs/endo/tree/master/packages/ses",target:"_blank",rel:"noopener noreferrer"}},[e._v("Secure EcmaScript (SES)"),a("OutboundLink")],1),e._v(", a subset of JavaScript developed by "),a("a",{attrs:{href:"https://agoric.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Agoric"),a("OutboundLink")],1),e._v(". Among other things, SES allows us to restrict access to global JavaScript APIs and to isolate untrusted code from other parts of the application. SES does this at the cost of some performance, and incompatibility with some JavaScript practices, such as modifying prototypes of intrinsic objects, e.g. the Promise constructor.")]),e._v(" "),a("h2",{attrs:{id:"sample-snap-tutorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-snap-tutorial"}},[e._v("#")]),e._v(" Sample snap tutorial")]),e._v(" "),a("p",[e._v("There are a number of simple snaps available for you to learn from and begin to get an idea of what your own snap needs. The following tutorial will walk you through a Hello World snap.")]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("ul",[a("li",[e._v("nodejs "),a("code",[e._v("^14.15")])]),e._v(" "),a("li",[e._v("nvm (recommended)")]),e._v(" "),a("li",[e._v("git")]),e._v(" "),a("li",[e._v("yarn v1")]),e._v(" "),a("li",[e._v("macOS, Linux, or Windows Subsystem Linux")])]),e._v(" "),a("h3",{attrs:{id:"getting-flask-running-in-your-local-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-flask-running-in-your-local-environment"}},[e._v("#")]),e._v(" Getting Flask running in your local environment")]),e._v(" "),a("p",[e._v("Flask, as described [here](LINK TO FLASK PAGE REQUIRED HERE), is a distribution channel for developmental, experimental, kooky stuff for MetaMask, and Snaps is the first feature to be released through it.")]),e._v(" "),a("ul",[a("li",[e._v("Start by downloading [Flask](LINK HERE) and adding it to Chrome")])]),e._v(" "),a("p",[e._v("At this point, you should see Flask added to your browser as an extension. If you currently have another build of MetaMask installed in your browser, disable it (but make sure you have your Secret Recovery Phrase backed up!).")]),e._v(" "),a("h3",{attrs:{id:"serving-a-snap-to-your-local-environment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serving-a-snap-to-your-local-environment"}},[e._v("#")]),e._v(" Serving a snap to your local environment")]),e._v(" "),a("p",[e._v("Now that you have Flask in your browser, it's time to find something to plug into it. If you don't want to download any code for the moment, check out the example snap "),a("a",{attrs:{href:"https://metamask.github.io/snap-template/",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployed here"),a("OutboundLink")],1),e._v(" and follow the instructions below under 'Interacting with the Snap'.")]),e._v(" "),a("p",[e._v("If you're ready to jump in and see how a Snap looks on the backend, follow the steps below!")]),e._v(" "),a("p",[e._v("Open up a new terminal window, and do the following:")]),e._v(" "),a("ul",[a("li",[e._v("clone the snaps monorepo "),a("a",{attrs:{href:"https://github.com/MetaMask/snaps-skunkworks",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("code",[e._v("cd")]),e._v(" into the repo, and run "),a("code",[e._v("nvm use 14.15")]),e._v(" to make sure you're using the right version of nodejs")]),e._v(" "),a("li",[e._v('navigate to the "Hello, World!" snap: '),a("code",[e._v("cd packages/example-snap")])]),e._v(" "),a("li",[e._v("install "),a("a",{attrs:{href:"https://npmjs.com/package/@metamask/snaps-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("@metamask/snaps-cli"),a("OutboundLink")],1),e._v(" package locally: "),a("code",[e._v("yarn add snaps-cli")])]),e._v(" "),a("li",[e._v("run "),a("code",[e._v("yarn mm-snap serve")])])]),e._v(" "),a("p",[e._v("Your terminal window should now be serving the example Snap locally. Time to see the functionality in action!")]),e._v(" "),a("h3",{attrs:{id:"interacting-with-the-snap"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-the-snap"}},[e._v("#")]),e._v(" Interacting with the snap")]),e._v(" "),a("p",[e._v("If you're serving the snap locally, open up a browser window, and navigate to "),a("code",[e._v("http://localhost:8080")]),e._v(".")]),e._v(" "),a("p",[e._v("You should see a simple message, explaining the functionality of the snap, and two buttons. Start by clicking the "),a("code",[e._v("Connect")]),e._v(" button; your Flask extension should pop up, and require you to click through two notifications.")]),e._v(" "),a("p",[e._v("Once you've connected to Flask, smash that "),a("code",[e._v("Send Hello")]),e._v(" button, and watch that Snap say hello!")]),e._v(" "),a("h2",{attrs:{id:"where-to-go-from-here"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-go-from-here"}},[e._v("#")]),e._v(" Where to go from here")]),e._v(" "),a("p",[e._v("Of course this is just the starting point, as all Hello World exercises are. There are other example snaps available in this repo, and chances are, by the time you're reading this, someone else has already begun developing something interesting that may give you further insight, as well.")])])}),[],!1,null,null,null);t.default=o.exports}}]);