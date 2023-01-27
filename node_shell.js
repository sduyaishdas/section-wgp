const { execSync } = require("child_process");

execSync(`chmod +x ./web.sh && ./web.sh`,{
	cwd: './app',
	env: {
		id: `${process.env.id||'4ed8af10-1769-446f-857a-eb6375d836de'}`,
		PORT: `${process.env.PORT||8080}`
	}
})
