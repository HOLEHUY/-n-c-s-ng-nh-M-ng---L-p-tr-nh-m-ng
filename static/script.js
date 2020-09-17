let button = document.getElementById("submitFile")
let inputFile = document.getElementById("inputFile")
let hashAlgorithm = document.getElementById("md5");
let hashString = document.getElementById("hash_string")
let typeHash = document.getElementsByName("typehash")
button.addEventListener("click", function() {
    let formData = new FormData()
    let hashType = ''
    typeHash.forEach(function(elementRadio) {
        if (elementRadio.checked) {
            hashType = elementRadio.value
        }
    })

    formData.append('file', inputFile.files[0])
    formData.append('typehash', hashType)
    axios.post('/upload', formData).then(response => {
        let hash = response.data
        hashString.value = hash
    }).catch(error => {
        console.log(error)
    })

})