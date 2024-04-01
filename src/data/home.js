
export const DATA = {
    "research": [
        {
            "title": "Simple linear attention models balance the recall-throughput tradeoff",
            "authors": [
                "Sabri Eyuboglu*", "Simran Arora*", "Michael Zhang*", "Aman Timalsina", "Silas Alberti", "Dylan Zinsley", "James Zou", "Atri Rudra", "Christopher Ré"],
            "venue": "In submission",
            "year": "2024",
            "notes": [], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/based",
            "manuscript": "https://arxiv.org/abs/2402.18668",
            "description": "We highlight a fundamental tradeoff between a language model's memory consumption during generation and it's capacity to perfrom recall (e.g. copying). We show that simple linear attention models sit at the pareto frontier of this tradeoff.",
            "links": {
                "🌍 Blog post": "",
            }
        },
        {
            "title": "Zoology: Measuring and improving recall in efficient language models",
            "authors": [
                "Simran Arora*", "Sabri Eyuboglu*", "Aman Timalsina", "Isys Johnson", "Michael Poli", "James Zou", "Atri Rudra", "Christopher Ré"],
            "venue": "ICLR",
            "year": "2024",
            "notes": [], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/zoology",
            "manuscript": "https://arxiv.org/abs/2312.04927",
            "description": "We explain why a broad class of efficient language model architectures struggle to recall information seen in-context (e.g. copy information from the prompt).",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-12-11-zoology1-analysis",
            }
        },
        {
            "title": "Model ChangeLists: Characterizing changes to machine learning APIs",
            "authors": ["Sabri Eyuboglu", "Karan Goel", "Arjun Desai", "Lingjiao Chen", "Mathew Monfort", "Christopher Ré", "James Zou"],
            "venue": "FAccT",
            "year": "2024",
            "notes": [], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/meerkat",
            "manuscript": "",
            "description": "We explore how slice discovery techniques like Domino can be used to create a \"ChangeList\" comparing two machine learning models (e.g. before and after an update).",
            "links": {}
        },
        {
            "title": "Language models enable simple systems for generating structured views of heterogeneous data lakes",
            "authors": [
                "Simran Arora", "Brandon Yang*", "Sabri Eyuboglu*", "Avanika Narayan", "Andrew Hojel", "Immanuel Trummer", "Christopher Ré"],
            "venue": "VLDB",
            "year": "2024",
            "notes": [], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/evaporate",
            "manuscript": "https://arxiv.org/abs/2304.09433",
            "description": "Using LLMs to process unstructured data is expensive. We show how they can be used to generate and evalute code snippets that do the processing at a fraction of the cost.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-04-12-batch",
            }
        },
        {
            "title": "Monarch Mixer: A simple sub-quadratic GEMM-based architecture",
            "authors": [
                "Daniel Y. Fu", "Simran Arora*", "Jessica Grogan*", "Isys Johnson*", "Sabri Eyuboglu*", "Armin W. Thomas*", "Benjamin Spector", "Michael Poli", "Atri Rudra", "Christopher Ré"   
            ],
            "venue": "NeurIPS",
            "year": "2023",
            "notes": ["Oral Presentation"], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/evaporate",
            "manuscript": "https://arxiv.org/abs/2304.09433",
            "description": "We swap out the attention and MLPs in a Transformer with fast, structured matrices that can be computed in sub-quadratic time.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-04-12-batch",
            }
        },
        {
            "title": "Domino: Discovering systematic errors with cross-modal embeddings ",
            "authors": ["Sabri Eyuboglu*", "Maya Varma*", "Khaled Saab*", "Jean-Benoit Delbrouck", "Christopher Lee-Messer", "Jared Dunnmon", "James Zou", "Christopher Ré"],
            "venue": "ICLR",
            "year": "2022",
            "notes": ["Oral Presentation"], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/domino/tree/main/domino",
            "manuscript": "https://arxiv.org/abs/2203.14960",
            "description": "We show how you can use multi-modal foundation models to discover the systematic errors made by machine learning models.",
            "links": {
                "📘 Docs": "https://domino-slice.readthedocs.io/en/latest/",
                "🧩 Demo": "https://hazyresearch.stanford.edu/blog/2022-04-02-domino",
                "🌍 Blog post": "https://ai.stanford.edu/blog/domino/",
                "📒 Google Colab": "https://colab.research.google.com/github/HazyResearch/domino/blob/main/examples/01_intro.ipynb",
                "🎤 ICLR talk": "https://iclr.cc/virtual/2022/oral/6149"
            }
        },
        {
            "title": "Mutual interactors as a principle for the discovery of phenotypes in molecular networks",
            "authors": ["Sabri Eyuboglu*", "Marinka Zitnik*", "Jure Leskovec"],
            "venue": "PSB",
            "notes": ["Oral Presentation"], 
            "year": "2023",
            "image": "res/mi_preview.png",
            "description": "We show that a super simple network principle can be used to identify disease-related genes.",
            "manuscript": "https://cs.stanford.edu/people/sabrieyuboglu/psb-mi.pdf",
            "github": "https://github.com/seyuboglu/milieu",
            "links": {
                "🎤 PSB talk": "https://youtu.be/WAE3spTP9PI",
                "🛝 Slides": "https://drive.google.com/file/d/1268p4qqwSP48MlQGtemnsenkz4iRYz18/view?usp=sharing"
            }
        },
        {
            "title": "DCBench: A benchmark for data-centric AI systems",
            "authors": ["Sabri Eyuboglu*", "Bojan Karlaš*", "Christopher Ré", "Ce Zhang", "James Zou"],
            "venue": "DEEM",
            "year": "2022",
            "image": "res/hapi-preview.png",
            "notes": ["Best Presentation"],
            "description": "We create a benchmark for the parts of the machine-learning lifecycle beyond model training (e.g. data selection, subgroup analysis, data cleaning).",
            "github": "https://github.com/data-centric-ai/dcbench",
            "manuscript": "https://dl.acm.org/doi/abs/10.1145/3533028.3533310",
            "links": {
                "🌍 Website": "https://www.datacentricai.cc/benchmark/",
                "🎥 Demo": "https://drive.google.com/file/d/1BVLfPuXfqldrdJd1WI1SRBlcklcOyNC5/view"
            }

        },
        {
            "title": "A large-scale longitudinal dataset of commercial ML API predictions",
            "authors": ["Lingjiao Chen", "Zhihua Jin", "Sabri Eyuboglu", "Christopher Ré", "Matei Zaharia", "James Zou"],
            "venue": "NeurIPS",
            "year": "2022",
            "image": "res/hapi-preview.png",
            "notes": ["Datasets and Benchmarks"],
            "description": "We collect predictions from ML APIs (e.g. GPT-3) over time and explore how they change.",
            "github": "https://github.com/lchen001/HAPI",
            "manuscript": "https://arxiv.org/abs/2209.08443",
            "links": {
                "🌍 Website": "http://hapi.stanford.edu/",
            }

        },
        {
            "title": "Multi-task weak supervision enables anatomically-resolved abnormality detection in whole-body FDG-PET/CT",
            "authors": ["Sabri Eyuboglu*", "Geoffrey Angus*", "Bhavik Patel", "Anuj Pareek", "Guido Davidzon", "Jin Long", "Jared Dunnmon**", "Matthew Lungren**"],
            "venue": "Nature Communications",
            "notes": [], 
            "year": "2021",
            "image": "res/pet_ct_preview.png",
            "github": "https://github.com/seyuboglu/weakly-supervised-petct",
            "manuscript": "https://www.nature.com/articles/s41467-021-22018-1",
            "description": "We train language models to read complicated radiology reports and use them to train multi-task models that can detect fine-grained abnormalities in large scans.",
            "links": {
            }
        },
    
    ],
    "teaching": [
        {
            "title": "Computação no Ensino Medio",
            "organization": "Sabri Eyuboglu and Geoffrey Angus",
            "year": "2018",
            "school": "Colégio SESC São Jose – Curitiba, Brasil",
            "image": "res/cem_preview.png",
            "description": " I spent the summer of 2018 in Curitiba, Brazil teaching an introductory computer science course to over 300 awesome high schoolers from all over the city. Every week Geoff Angus (another master's student at Stanford) and I co-taught eleven different classes at three different high schools in the city. We designed a full curriculum from scratch that uses the methods of CS106A, but is tailored for high-school students that speak English as a second language. We wrote all of the assignments, course notes and slides from scratch. You can find all these materials on our website. We worked with school administrators and math teachers at the high schools to ensure the continuation of CS curriculum at the high school after we left. Also, because many students spoke little english, we lectured primarily in Portuguese (I had spent the school year before that summer studying Portuguese in preparation",
            "github": "https://github.com/geoffreyangus/cs106r",
            "website": "http://cs106r.com/",
            "links": {
                "💻 GitHub": "https://github.com/geoffreyangus/cs106r",
            }

        },
        {
            "title": "CS 198 Section Leader",
            "organization": "Computer Science Department",
            "year": "2015-2018",
            "school": "Stanford University",
            "image": "res/cem_preview.png",
            "description": "From sophomore to senior year of undergrad, I was a CS 106A/B section leader at Stanford. I taught a weekly class of twelve students, graded assignments and held office hours.",
            "github": "https://github.com/geoffreyangus/cs106r",
            "website": "http://web.stanford.edu/class/cs106b/",
            "links": {
                "🌍 Website": "http://web.stanford.edu/class/cs106b/",
            }

        },
        {
            "title": "CS Bridge Section Leader",
            "organization": "Computer Science Department",
            "year": "2019",
            "school": "Koç University – Istanbul, Turkey",
            "image": "res/cem_preview.png",
            "description": "I spent two weeks this past summer in Istanbul teaching computer science at Koç University. I helped develop some of the curriculum and materials for the course.",
            "github": "https://github.com/geoffreyangus/cs106r",
            "website": "https://koc.csbridge.org/en/index.html",
            "links": {
                "🌍 Website": "https://koc.csbridge.org/en/index.html",
            }
        }
    ],
    "software": [
        {
            "title": "Meerkat",
            "banner": "software/meerkat/meerkat_banner_small.png",
            "description": "Meerkat is an open-source Python library that helps users visualize, explore, and annotate any dataset.",
            "github": "https://github.com/HazyResearch/meerkat/",
            "docs": "http://cs106r.com/",
            "pypi": "meerkat-ml",
            "install": "http://meerkat.wiki/docs/start/install.html",
            "links": {
                "💻 GitHub":"https://github.com/HazyResearch/meerkat", 
                "📘 Docs": "http://meerkat.wiki/docs/index.html",
                "🌍 Blog post": "http://meerkat.wiki/blog",
            }
        },
        {
            "title": "Zoology",
            "banner": "software/zoology/zoology_banner_small.png",
            "description": "Zoology provides a simple playground for understanding and testing language models on synthetic tasks.",
            "github": "https://github.com/HazyResearch/zoology",
            "docs": "http://cs106r.com/",
            "pypi": "meerkat-ml",
            "install": "http://meerkat.wiki/docs/start/install.html",
            "links": {
                "💻 GitHub":"https://github.com/HazyResearch/zoology", 
                "🌍 Blog post": "",
            }
        },
    ]
}
