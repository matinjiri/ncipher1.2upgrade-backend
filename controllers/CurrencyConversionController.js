const CurrencyConversionService = require("../services/CurrencyConversionService");


exports.convertCurrency = async (req, res) => {
    const { from, to } = req.query;

    if (!from || !to ) {
        return res.status(400).json({ error: 'Missing required parameters: from, to' });
    }

    try {
        const rate = await CurrencyConversionService.getExchangeRate(from, to);

        res.json({ rate });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};