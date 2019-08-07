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
            let response = await fetch(endpoint, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            });
            let responseJson = await response.json();
            if (response.ok) {
                resolve(responseJson);
            } else {
                reject(responseJson);
            }
        } catch (error) {
            reject(error);
        }
    });
};
