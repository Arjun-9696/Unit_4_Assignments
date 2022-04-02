const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()) ;

const connect = () => {
  return mongoose.connect(
    'mongodb+srv://Arjun:Arjun009@cluster0.4dwre.mongodb.net/Day6?retryWrites=true&w=majority'
  );
};
//Section Model
const sectionSchema = new mongoose.Schema(
  {
    a: { type: String, required: true },
    b: { type: String, required: true },
    c: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Section = mongoose.model('section', sectionSchema);
// Books Model
const bookSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    body: { type: String, required: true },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'author',
      required: true,
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'author',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Book = mongoose.model('book', bookSchema);
// Author Model
const authorSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Author = mongoose.model('author', authorSchema);

app.post("/sections",async(req,res)=>{
    try{
        const section=await Section.create(req.body);
        return res.status(201).send(section);
    }catch(err){
        return res.status(500).send(err.message);
    }
});

app.get("/sections", async (req,res) =>{
    try{
        const sections= await Section.find().lean().exec();
        return res.status(200).send(sections);
    } 
    catch(err) {
        return res.status(500).send(err.message);
    }
});

app.get('/sections/:id', async (req, res) => {
  try {
    const section = await Section.findById(req.params.id).lean().exec();
    return res.send(section);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.post('/books', async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find()
      .populate({ path: 'author_id', select: 'name' })
      .populate({ path: 'section_id', select: 'a,b,c' })
      .lean()
      .exec();
    return res.status(200).send(books);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get('/books/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).lean().exec();
    return res.send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.post('/authors', async (req, res) => {
  try {
    const author = await Author.create(req.body);
    return res.status(201).send(author);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find().lean().exec();
    return res.status(200).send(authors);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get('/authors/:id', async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).lean().exec();
    return res.send(author);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


app.listen(5005, async (req, res) => {
  try {
    await connect();
    console.log('Listening at port 5005');
  } catch (e) {
    res.send(e.message);
  }
});
