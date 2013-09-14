// ==UserScript==
// @name           GameFAQs "New Poll" Link in Topic List
// @namespace      OTACON120
// @author         OTACON120
// @version        1.0.1
// @description    Adds "New Poll" link on topic list pages.
// @updateURL      http://userscripts.org/scripts/source/139588.meta.js
// @downloadURL    http://userscripts.org/scripts/source/139588.user.js
// @website        http://otacon120.com/user-scripts/gamefaqs-related/new-poll-link-in-topic-list/
// @include        http://www.gamefaqs.com/boards/*-*
// @match          http://www.gamefaqs.com/boards/*-*
// ==/UserScript==

var userLinks,
	newPollLink,
	newTopicLink,
	i;

userLinks = document.getElementById('content').getElementsByClassName('user')[0].getElementsByTagName('a');
	newPollLink = document.createElement('a');
	newPollLink.textContent = 'New Poll';

	for (i = 0; i < userLinks.length; i++) {
		if (userLinks[i].textContent == 'New Topic') {
			newTopicLink = userLinks[i];
			newPollLink.href = newTopicLink.href + '&amp;poll=1';
			newTopicLink.parentNode.insertBefore(newPollLink, newTopicLink.nextSibling);
			newTopicLink.parentNode.innerHTML = newTopicLink.parentNode.innerHTML.replace('<a href="' + newTopicLink.href + '&amp;amp;poll=1', ' | <a href="' + newPollLink.href);
			break;
		}
	}
