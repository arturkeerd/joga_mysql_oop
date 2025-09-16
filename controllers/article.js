const articleDbModel = require('../models/article');
const articleModel = new articleDbModel();

class articleController {
    constructor() {
        const articles = []
    }
    async getAllArticles(req, res) {
            const articles = await articleModel.findAll();
            res.status(201).json({ articles: articles });
    }
    async getArticleBySlug(req, res) {
        const article = await articleModel.findOne(req.params.slug);
        res.status(201).json({ article: article });
    }

    async createNewArticle(req, res) {
        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        };
        const articleId = await articleModel.create(newArticle);
        res.status(201).json({ 
            message: `Article created with id ${articleId}`, 
            article: { id: articleId, ...newArticle }
         });
    }

    async updateArticle(req, res) {
        try  {
            const articleId = req.params.id;

            const updateArticle = {
                name: req.body.name,
                slug: req.body.slug,
                image: req.body.image,
                body: req.body.body,
                published: new Date().toISOString().slice(0, 19).replace('T', ' '),
                author_id: req.body.author_id
            };
            const affectedRows = await articleModel.update(articleId, updateArticle);
            if (affectedRows === 0) {
                return res.status(404).json({ error: 'Article not found or no changes made.' });
            }
            res.status(201).json({
                message: `Article with id ${req.params.id} updated`,
                article: { id: req.params.id, ...updateArticle }
            });
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while updating the article.' });
            console.error('Error updating article:', error);
        }
    }
}

module.exports = articleController