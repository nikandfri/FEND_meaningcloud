export const getUrl = (input) => {
    console.log("Inside of getURL", input)
    const model = "&model=general&lang=en"
    const apiKey = process.env.S3_API
    console.log("API key consoled:", apiKey)
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
    const textEncoded = input
    const url = baseUrl + apiKey + textEncoded + model
    console.log("returning of url in getURL:", url)
    return url
}

export const update = (response) => {
    console.log("Inside of Update", response)
    const textSubjectivity = response.data[1]
    const textAgreement = response.data[0]
    const textConfidence = response.data[2]
    const textIrony = response.data[3]
    const textScoreTag = response.data[4]

    console.log("Inside of textSubjectv", textSubjectivity)


    const subjectivity = document.getElementById('results1')
    const agreement = document.getElementById('results2')
    const confidence = document.getElementById('results3')
    const irony = document.getElementById('results4')
    const scoreTag = document.getElementById('results5')

    console.log("Getting the subjectivity", subjectivity.innerHTML)
    console.log("Getting textSubjectivity", textSubjectivity)

    subjectivity.textContent = textSubjectivity
    agreement.textContent = textAgreement
    confidence.textContent = textConfidence
    irony.textContent = textIrony
    scoreTag.textContent = textScoreTag

    console.log("Nach update", subjectivity.innerHTML)
    
}
