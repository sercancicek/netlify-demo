(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{178:function(e,a,t){"use strict";t.r(a);var n=t(200),l=t(0),r=t.n(l),c=t(185),s=t(181);a.default=function(){var e=n.data;return r.a.createElement(c.a,null,r.a.createElement("h1",null,"Blog"),r.a.createElement("ol",null,e.allMarkdownRemark.edges.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(s.a,{to:"/blog/"+e.node.fields.slug},r.a.createElement("h2",null,e.node.frontmatter.title),r.a.createElement("p",null,e.node.frontmatter.date)))})))}},180:function(e,a,t){var n;e.exports=(n=t(183))&&n.default||n},181:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=t(58),o=t.n(s);t.d(a,"a",function(){return o.a});t(180),l.a.createContext({});c.a.object,c.a.string.isRequired,c.a.func,c.a.func},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Full-Stack Bootcamp"}}}}},183:function(e,a,t){"use strict";t.r(a);t(20);var n=t(0),l=t.n(n),r=t(11),c=t.n(r),s=t(82),o=function(e){var a=e.location,t=e.pageResources;return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},184:function(e){e.exports={data:{site:{siteMetadata:{author:"Andrew Mead"}}}}},185:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(182),c=t(181),s=t(186),o=t.n(s),i=function(){var e=r.data;return l.a.createElement("header",{className:o.a.header},l.a.createElement("h1",null,l.a.createElement(c.a,{className:o.a.title,to:"/"},e.site.siteMetadata.title)),l.a.createElement("nav",null,l.a.createElement("ul",{className:o.a.navList},l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/blog"},"Blog")),l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(c.a,{className:o.a.navItem,activeClassName:o.a.activeNavItem,to:"/contact"},"Contact")))))},u=t(184),m=function(){var e=u.data;return l.a.createElement("footer",null,l.a.createElement("p",null,"Created by ",e.site.siteMetadata.author,", © 2019"))},d=(t(187),t(188)),v=t.n(d);a.a=function(e){return l.a.createElement("div",{className:v.a.container},l.a.createElement("div",{className:v.a.content},l.a.createElement(i,null),e.children),l.a.createElement(m,null))}},200:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{fields:{slug:"gatsby"},frontmatter:{title:"The Great Gatsby",date:"2019-04-06"}}},{node:{fields:{slug:"react"},frontmatter:{title:"React",date:"2019-01-06"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-js-64f6741c8d65f4fd324b.js.map