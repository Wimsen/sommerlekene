export const asyncCall = async (
    endpoint,
    body,
    methodParam,
    headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
) => {
    let method =
        methodParam === undefined
            ? body === undefined
                ? "GET"
                : "POST"
            : methodParam;

    return new Promise(async (resolve, reject) => {
        try {
            console.log(endpoint, JSON.stringify({
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            }, null, 2));

            let response = await fetch(endpoint, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            });
            const contentType = response.headers.get("content-type");
            if (response.ok) {
                if (contentType && contentType.indexOf("application/json") !== -1) {
                    let responseJson = await response.json();
                    resolve(responseJson);
                } else {
                    resolve();
                }
            } else {
                reject();
            }
        } catch (error) {
            reject(error);
        }
    });
};
