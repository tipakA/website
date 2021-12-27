"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[128],{1143:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={slug:"/",id:"introduction",title:"Introduction"},l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Spectacles is a collection of applications and libraries designed to help you make stable,",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/spec-tacles/website/edit/master/website/docs/introduction.md",version:"current",frontMatter:{slug:"/",id:"introduction",title:"Introduction"},sidebar:"docs",next:{title:"Gateway",permalink:"/docs/gateway"}},c=[{value:"Gateway",id:"gateway",children:[]},{value:"Proxy",id:"proxy",children:[]},{value:"RabbitMQ",id:"rabbitmq",children:[]},{value:"Command Handler",id:"command-handler",children:[]}],u={toc:c};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Spectacles is a collection of applications and libraries designed to help you make stable,\nmicroservice-oriented Discord bots."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture",src:n(654).Z})),(0,o.kt)("p",null,"A basic Spectacles bot runs 4 services:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Gateway"),(0,o.kt)("li",{parentName:"ol"},"Proxy"),(0,o.kt)("li",{parentName:"ol"},"RabbitMQ"),(0,o.kt)("li",{parentName:"ol"},"Command handler")),(0,o.kt)("p",null,"The Spectacles organization provides the gateway and proxy services. RabbitMQ is developed\nindependently. You are responsible for writing your own command handler (that's why you're here,\nafterall)."),(0,o.kt)("p",null,"Each of these services is fully stateless and can be easily scaled up or down across machines."),(0,o.kt)("h2",{id:"gateway"},"Gateway"),(0,o.kt)("p",null,"The gateway is a separate application that is solely responsible for connecting to Discord,\ningesting events, and publishing them to RabbitMQ. It handles everything related to the Discord\ngateway:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sharding"),(0,o.kt)("li",{parentName:"ul"},"Intents"),(0,o.kt)("li",{parentName:"ul"},"Reconnection"),(0,o.kt)("li",{parentName:"ul"},"Gateway ratelimits")),(0,o.kt)("h2",{id:"proxy"},"Proxy"),(0,o.kt)("p",null,"The proxy is responsible for handling all of the outgoing HTTP requests to Discord. It ensures that\nyour bot complies with Discord's ratelimits under any circumstance. Eventually, the proxy will also\ncache data and ensure that you never run into a performance bottleneck while fetching Discord data\nin your application."),(0,o.kt)("p",null,"Your applications publish requests to RabbitMQ. The proxy consumes these and sends them to\nDiscord as soon as possible. The proxy is responsible for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"HTTP ratelimits"),(0,o.kt)("li",{parentName:"ul"},"Caching (soon)")),(0,o.kt)("h2",{id:"rabbitmq"},"RabbitMQ"),(0,o.kt)("p",null,"RabbitMQ is a message broker that Spectacles relies on to consistently deliver messages to each\nservice. You don't need to know how it works or how to use it, only that it's responsible for\ndelivering messages between your applications."),(0,o.kt)("h2",{id:"command-handler"},"Command Handler"),(0,o.kt)("p",null,"Your command handler is where all of your normal bot logic happens. Here you consume messages from\nthe gateway, do any bot logic that you want, and maybe send messages back to the proxy. Spectacles\nprovides numerous client libraries that you can use to interact with the other Spectacles services."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JavaScript"),(0,o.kt)("li",{parentName:"ul"},"C#"),(0,o.kt)("li",{parentName:"ul"},"Go"),(0,o.kt)("li",{parentName:"ul"},"Rust")))}d.isMDXComponent=!0},654:function(e,t,n){t.Z=n.p+"assets/images/architecture-a4d8d9c8f5d9db4e57c59170966c69a2.svg"}}]);