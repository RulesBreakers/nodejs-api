const natural = require('natural');
const { PredictionRepository } = require('../../repository/predictionRepository');
const tokenizer = new natural.WordTokenizer();
const classifier = new natural.BayesClassifier();


const OnirixSimulator = {
    interprete : async (description) => {
        let data = await PredictionRepository.findAll();
        const predictions = data?.map(pred => pred?.dataValues);

        predictions.forEach(dream => {
            const tokens = tokenizer.tokenize(dream.dream);
            classifier.addDocument(tokens, JSON.stringify({ interpretation: dream?.description, events : dream?.EventInfos}));
        });
        classifier.train();
        const testTokens = tokenizer.tokenize(description);
        return classifier.classify(testTokens);
    }
}

module.exports = { OnirixSimulator }