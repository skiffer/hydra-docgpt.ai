(() => {
	const style = `.poopup-toast-container {
    position: fixed;
    z-index: 2147483647;
    top: 3rem;
    left: 3rem;
    right: 3rem;
    bottom: 16px;
    user-select: none;
    pointer-events: none;
  }
  @media (max-width: 640px) {
    .poopup-toast-container {
      left: 1.5rem;
      right: 1.5rem;
    }
  }

  .poopup-toast {
    background: transparent;
    padding: 0 0 16px 0;
    display: flex;
    justify-content: flex-end;
    animation: slideIn 0.3s ease-in-out;
  }

  .poopup-toast-content {
    width: 100%;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 0.75rem;
    padding: 12px;
    background-color: rgb(229 231 235 / 0.75);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px); 
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color),
      0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    border-radius: 10px;
    font-size: 1rem;
    line-height: 1.5rem;
    z-index: 50;
    color: rgb(47, 48, 60);
    box-sizing: border-box;
    font-family: "Gabarito", ui-sans-serif, system-ui, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    text-align: left;
		margin: 0;
  }

  /* poopup-toast-content max-width is 350px on tablet and larger devices */
  @media (min-width: 640px) {
    .poopup-toast-content {
      max-width: 350px;
    }
  }

  .toast-hide {
    animation: fadeOut 0.4s forwards;
  }

  @keyframes slideIn {
    from {
      opacity: 0.8;
      transform: translateX(5%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }`;
	let i = 0;
	let toastTimeout;
	let toastInterval;
	let toasting = [];
	let messages = [];
	let waitFor;
	let toastEvery;
	let toastDuration;
	let visitorId;
	const localStorageVisitorIdName = "poopup-visitor-id";
	const domain = document.currentScript.getAttribute("data-domain");
	const endpoint = "https://poopup.co/api/script";
	// if the environment is development, use the localhost endpoint, else use the production endpoint
	// window?.location?.hostname === "localhost"
	// 	? "http://localhost:3000/api/script"
	// 	: "https://poopup.co/api/script";

	const getVisitorId = () => {
		visitorId = localStorage.getItem(localStorageVisitorIdName);

		if (!visitorId) {
			visitorId =
				Date.now().toString(36) +
				Math.random()?.toString(36)?.substr(2);

			localStorage.setItem(localStorageVisitorIdName, visitorId);
		}

		return visitorId;
	};

	const fetchFont = async () => {
		const link = document.createElement("link");
		link.href =
			"https://fonts.googleapis.com/css2?family=Gabarito:wght@400..900&display=swap";
		link.rel = "stylesheet";
		document.head.appendChild(link);
	};

	const fetchData = async () => {
		// make an API call to fetch the messages (endpoint is endpoint) and pass the data-domain as a param
		// const response = await fetch(endpoint, {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify({
		// 		domain,
		// 		visitorId,
		// 		type: "pageview",
		// 		referrer: document?.referrer,
		// 	}),
		// });

		// const data = await response.json();

		// if (response.ok) {
		// 	return data;
		// }

		// console.error(data.error);
		return {
		  messages: [
		    {
		      text: "Can I have an invoice?",
		      author: "Annoying Customer",
		      timeAgo: "now",
		      src: "https://d3m8mk7e1mf7xn.cloudfront.net/64224402d24ae443b84e744a/1700208280014icon.png",
		      id: "1",
		    },
		    {
		      text: "Add my VAT to invoice please",
		      author: "Pierre Quiroule",
		      timeAgo: "1m",
		      src: "https://images.unsplash.com/photo-1708710301724-6121560b6de0?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		      id: "2",
		    },
		    {
		      text: "Invoice or refund 😡",
		      author: "Elias X.",
		      timeAgo: "yesterday",
		      src: "https://d3m8mk7e1mf7xn.cloudfront.net/64224402d24ae443b84e744a/1699863293388icon.png",
		      id: "3",
		    },
		    {
		      text: "Reason: No invoice provided",
		      author: "Stripe Refund ⚠️",
		      timeAgo: "now",
		      src: "https://d3m8mk7e1mf7xn.cloudfront.net/64224402d24ae443b84e744a/1699863293388icon.png",
		      id: "4",
		    },
		    {
		      text: "Schicken Sie mir jetzt eine INVOIZE?",
		      author: "Georg Borg",
		      timeAgo: "2m",
		      src: "https://d3m8mk7e1mf7xn.cloudfront.net/64224402d24ae443b84e744a/1699863293388icon.png",
		      id: "5",
		    },
		  ],
		  waitFor: 1000,
		  toastEvery: 1500,
		  toastDuration: 12000,
		};
	};

	function ensureToastContainer() {
		if (!document.querySelector("#poopup-toast-container")) {
			const container = document.createElement("div");
			container.id = "poopup-toast-container";
			container.className = "poopup-toast-container";
			document.body.appendChild(container);
		}
	}

	function showToast(content, options = {}) {
		ensureToastContainer();

		const id = `toast-${Date.now()}`;
		const toast = document.createElement("div");
		toast.id = id;
		toast.className = "poopup-toast";

		// Check if content is a string of HTML or just text
		if (options.isHTML) {
			toast.innerHTML = content; // Set inner HTML directly
		} else {
			toast.textContent = content; // Safer way to insert text
		}

		// if user is on mobile, remove all other toasts
		if (window.innerWidth < 640) {
			toasting.forEach((id) => removeToast(id, true));
		}

		// add the toast at the top  of the container (poopup-toast-container) — it should be the first element
		document.querySelector("#poopup-toast-container").prepend(toast);
		// document.querySelector("#poopup-toast-container").appendChild(toast);

		toasting.push(id);

		// Set auto-dismissal
		if (!options.stay || options.duration) {
			setTimeout(() => removeToast(id), options.duration || 10000);
		}
	}

	function removeToast(id, force = false) {
		const toast = document.getElementById(id);

		if (!toast) {
			return;
		}

		if (force) {
			toast.remove();
			toasting = toasting.filter((t) => t !== id);
		} else {
			toast.className += " toast-hide";
			setTimeout(() => {
				// Delay to allow for hide animation
				if (toast) {
					toast.remove();
					toasting = toasting.filter((t) => t !== id);
				}
			}, 400); // Match this delay with the CSS animation duration
		}
	}

	function cleanup() {
		console.log("cleaning up toaster");
		toastTimeout && clearTimeout(toastTimeout);
		toastInterval && clearInterval(toastInterval);
		toasting.forEach((id) => removeToast(id));
	}

	const toast = {
		custom: (htmlContent, options = {}) => {
			options.isHTML = true; // Mark content as HTML
			showToast(htmlContent, options);
		},
	};

	const main = async () => {
		getVisitorId();

		fetchFont();

		// add the styles to the head
		const styleEl = document.createElement("style");
		styleEl.innerHTML = style;
		document.head.appendChild(styleEl);

		// fetch the data from the API
		const data = await fetchData();

		if (!data) {
			console.error("No data found");
			return;
		}

		messages = data.messages;
		waitFor = data.waitFor;
		toastEvery = data.toastEvery;
		toastDuration = data.toastDuration;

		// preload images
		messages.forEach((message) => {
			const img = new Image();
			img.src = message.img;
		});

		// if the page unmounts, call cleanup
		window.addEventListener("beforeunload", cleanup);

		// if route changes, or user navigates away, call cleanup
		window?.navigation?.addEventListener("navigate", cleanup);

		// wait for waitFor before starting the toast
		toastTimeout = setTimeout(() => {
			toastInterval = setInterval(() => {
				const message = messages[i];

				// stop if there are no more messages
				if (!message) {
					clearInterval(toastInterval);
					return;
				}

				let html = `
                <img src="${message.img}" style="width: 48px; height: 48px; object-fit: cover; object-position: center; flex-shrink: 0; border-radius: 8px;" width="48" height="48" alt="" />
                <div style="width: 100%;">
                  <div style="font-size: 1rem; font-weight: 600; color: rgb(3 7 18);">${message.title}</div>
                  <div style="font-size: 1rem; font-weight: 400; line-height: 1.25; color: rgb(55 65 81);">${message.body}</div>
                </div>
                <div style="color: #616d80;">${message.timeAgo}</div>
            `;

				// add <a target="_blank"> wrapper if there's a link, and add a little animation to the toast when hover
				if (message?.link && message?.link?.includes("http")) {
					html = `
              <a class="poopup-toast-content" href="${message.link}" target="_blank" style="pointer-events: auto; width: 100%; cursor: pointer; transition: transform 0.2s ease-in-out;" onmouseover="this.style.transform = 'scale(1.01)';" onmouseout="this.style.transform = 'scale(1)';">
                  ${html}
              </a>
            
              `;
				} else {
					// add pointer-events: none; to the toast if there's no link
					html = `
            <div class="poopup-toast-content" style="pointer-events: none;">
              ${html}
            </div>
          `;
				}

				toast.custom(html, { duration: toastDuration });

				i++;
			}, toastEvery);
		}, waitFor);
	};

	main();
})();
