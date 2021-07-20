const getParamValue = (param) => {
    const params = new URLSearchParams(window.location.search);
    const valueOfParam = params.get(param)
    return valueOfParam
}

export default getParamValue
