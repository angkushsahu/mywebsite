const freelancingObserver = new IntersectionObserver(
	function (entries, freelancingObserver) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) return;
			else {
				entry.target.classList.add("toggle_scale");
				freelancingObserver.unobserve(entry.target);
			}
		});
	},
	{ threshold: "0.5" },
);

freelancingObserver.observe(document.getElementsByClassName("freelancing")[0]);
