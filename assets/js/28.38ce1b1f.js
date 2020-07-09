(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{368:function(e,t,a){"use strict";a.r(t);var o=a(7),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"signing-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-data"}},[e._v("#")]),e._v(" Signing Data")]),e._v(" "),a("p",[e._v("Since MetaMask makes cryptographic keys available to each user, websites can use these signatures for a variety of uses. Here are a few guides related to specific use cases:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://medium.com/hackernoon/writing-for-blockchain-wallet-signature-request-messages-6ede721160d5",target:"_blank",rel:"noopener noreferrer"}},[e._v("Authenticating websites"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Some examples of signing off-chain messages for an on-chain protocol from our "),a("a",{attrs:{href:"https://medium.com/metamask/our-metatransaction-hackathon-winner-a620551ccb9b",target:"_blank",rel:"noopener noreferrer"}},[e._v("MetaTransaction Hackathon"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"signing-data-with-metamask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signing-data-with-metamask"}},[e._v("#")]),e._v(" Signing Data with MetaMask")]),e._v(" "),a("p",[e._v("If you’d like to jump to some working signature examples, "),a("a",{attrs:{href:"https://github.com/danfinlay/js-eth-personal-sign-examples",target:"_blank",rel:"noopener noreferrer"}},[e._v("you can visit this repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If you’d like to read our JavaScript implementations of these methods, they are all available in the npm package "),a("a",{attrs:{href:"https://github.com/MetaMask/eth-sig-util",target:"_blank",rel:"noopener noreferrer"}},[e._v("eth-sig-util"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Note that MetaMask supports signing transactions with Trezor and Ledger hardware wallets. These hardware wallets currently only support signing data using the "),a("code",[e._v("personal_sign")]),e._v(" method. If you have trouble logging in to a website or dapp when using a Ledger or Trezor, the site may be requesting you sign data via an unsupported method, in which case we recommend using your standard MetaMask account.")]),e._v(" "),a("h2",{attrs:{id:"a-brief-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-brief-history"}},[e._v("#")]),e._v(" A Brief History")]),e._v(" "),a("p",[e._v("There are currently five signing methods in MetaMask, and you might wonder the history of these methods. Studying the history of these methods has some lessons in it for the emergent lessons of decentralized standards emergence. Our current five methods are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("eth_sign")])]),e._v(" "),a("li",[a("code",[e._v("personal_sign")])]),e._v(" "),a("li",[a("code",[e._v("signTypedData")]),e._v(" (currently identical to "),a("code",[e._v("signTypedData_v1")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("signTypedData_v1")])]),e._v(" "),a("li",[a("code",[e._v("signTypedData_v3")])])]),e._v(" "),a("p",[e._v("There are likely to be many more over time. When MetaMask first started, the Provider API wasn’t designed to be exposed to untrusted websites, and so some considerations weren’t taken as seriously as they were later.")]),e._v(" "),a("p",[e._v("In particular, the method "),a("code",[e._v("eth_sign")]),e._v(" is an open-ended signing method that allows signing an arbitrary hash, which means it can be used to sign transactions, or any other data, making it a dangerous phishing risk.")]),e._v(" "),a("p",[e._v("For this reason, we make this method show the most frightening possible message to the user, and generally discourage using this method in production. However, some applications (usually admin panels internal to teams) use this method for the sake of its ease of use, and so we have continued to support it for the sake of not breaking the workflows of active projects.")]),e._v(" "),a("p",[e._v("Eventually, the "),a("code",[e._v("personal_sign")]),e._v(" "),a("a",{attrs:{href:"https://github.com/ethereum/go-ethereum/pull/2940",target:"_blank",rel:"noopener noreferrer"}},[e._v("spec"),a("OutboundLink")],1),e._v(" was proposed, which added a prefix to the data so it could not impersonate transactions. We also made this method able to display human readable text when UTF-8 encoded, making it a popular choice for site logins.")]),e._v(" "),a("p",[e._v("However, the text-prefix made those signatures expensive to verify on-chain, and so with the help of the "),a("a",{attrs:{href:"https://0x.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("0xProtocol"),a("OutboundLink")],1),e._v(" team and "),a("a",{attrs:{href:"https://spankchain.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SpankChain"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-712",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 712"),a("OutboundLink")],1),e._v(" spec was written.")]),e._v(" "),a("p",[e._v("The strange part of EIP 712, and this decentralized standards ecosystem, is that the proposal changed several times while retaining the same EIP. This means what we initially implemented as "),a("code",[e._v("signTypedData")]),e._v(" was the earliest proposed version, while other groups implemented later versions under the same method name.")]),e._v(" "),a("p",[e._v("To avoid compatibility issues between clients, we recommend using the hard-versioned method names "),a("code",[e._v("signTypedData_v1")]),e._v(" and "),a("code",[e._v("signTypedData_v3")]),e._v(". The missing "),a("code",[e._v("v2")]),e._v(" represents an intermediary design that was implemented by the Cipher browser, so that we have room to implement it if there is ever enough developer demand for it.")]),e._v(" "),a("p",[e._v("In the future, it may help to have method names include a hash of their exact proposal, since in a decentralized ecosystem, there is no absolute source of truth of what a given name should map to. Instead, we are forced to invent new patterns of collaboration, where we can drive forward and innovate, while simultaneously avoiding creating a brittle ecosystem by changing our meanings out from under the words.")]),e._v(" "),a("p",[e._v("I hope this has been a useful introduction to the history of our signing methods!")]),e._v(" "),a("h2",{attrs:{id:"sign-typed-data-v1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-typed-data-v1"}},[e._v("#")]),e._v(" Sign Typed Data v1")]),e._v(" "),a("p",[e._v("This early version of the spec lacked some later security improvements, and should generally be neglected in favor of "),a("a",{attrs:{href:"#sign-typed-data-v3"}},[e._v("signTypedData_v3")]),e._v(".")]),e._v(" "),a("p",[e._v("Also known as "),a("code",[e._v("signTypedData")]),e._v(", originally premiered October 2017 in "),a("a",{attrs:{href:"https://medium.com/metamask/scaling-web3-with-signtypeddata-91d6efc8b290",target:"_blank",rel:"noopener noreferrer"}},[e._v("this blog post"),a("OutboundLink")],1),e._v(", this method was the original state-channel-centric signing method.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("signTypedData")]),e._v(" family has a few major design considerations:")]),e._v(" "),a("ul",[a("li",[e._v("Cheap to verify on chain")]),e._v(" "),a("li",[e._v("Still somewhat human readable")]),e._v(" "),a("li",[e._v("Hard to phish signatures")])]),e._v(" "),a("p",[e._v("If on-chain verifiability cost is a high priority for you, you might want to consider it.")]),e._v(" "),a("h2",{attrs:{id:"sign-typed-data-v3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-typed-data-v3"}},[e._v("#")]),e._v(" Sign Typed Data v3")]),e._v(" "),a("p",[e._v("The method "),a("code",[e._v("signTypedData_v3")]),e._v(" currently represents the latest version of the "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-712",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 712 spec"),a("OutboundLink")],1),e._v(", making it the most secure method for signing cheap-to-verify data on-chain that we have yet.")]),e._v(" "),a("p",[e._v("This does not mean it is perfect, and does not mean we will not eventually have a "),a("code",[e._v("v4")]),e._v(", but we do intend to protect this namespace and keep it compatible going forwards.")]),e._v(" "),a("p",[e._v("We have a "),a("a",{attrs:{href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26",target:"_blank",rel:"noopener noreferrer"}},[e._v("great introductory blog post to this method here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Hopefully soon we will also have good examples for parsing method input into structs for verification on-chain (great contribution opportunity!)")]),e._v(" "),a("h2",{attrs:{id:"sign-typed-data-v4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sign-typed-data-v4"}},[e._v("#")]),e._v(" Sign Typed Data v4")]),e._v(" "),a("p",[e._v("The method "),a("code",[e._v("signTypedData_v4")]),e._v(" currently represents the latest version of the "),a("a",{attrs:{href:"https://eips.ethereum.org/EIPS/eip-712",target:"_blank",rel:"noopener noreferrer"}},[e._v("EIP 712 spec"),a("OutboundLink")],1),e._v(", with added support for arrays and with a breaking fix for the way structs are encoded.")]),e._v(" "),a("p",[e._v("This does not mean it is perfect, and does not mean we will not eventually have a "),a("code",[e._v("v5")]),e._v(", but we do intend to protect this namespace and keep it compatible going forwards.")]),e._v(" "),a("p",[e._v("We have a "),a("a",{attrs:{href:"https://medium.com/metamask/eip712-is-coming-what-to-expect-and-how-to-use-it-bb92fd1a7a26",target:"_blank",rel:"noopener noreferrer"}},[e._v("great introductory blog post to this method here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Hopefully soon we will also have good examples for parsing method input into structs for verification on-chain (great contribution opportunity!)")])])}),[],!1,null,null,null);t.default=n.exports}}]);