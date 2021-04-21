import Comment from '../models/Comment';

class CommentController {
  async index(request, response) {
    try {
      const { where } = request;

      const comments = await Comment.findAll({
        where,
      });

      return response.json(comments);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }

  async store(request, response) {
    const { name, content } = request.body;

    if (!name || !content) {
      return response.status(400).json({
        message: 'Invalid data',
      });
    }

    const comment = await Comment.create({
      name,
      content,
    });

    return response.json(comment);
  }

  async delete(request, response) {
    try {
      const { comment } = request;

      await comment.destroy();

      return response.sendStatus(204);
    } catch (error) {
      return response.status(error.status || 400).json(error.message);
    }
  }
}

export default new CommentController();
