const func = async () => {
	const response = await versions.ping();
	console.log("🚀 ~ file: renderer.js ~ line 3 ~ func ~ response", response);
};

func();

const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
