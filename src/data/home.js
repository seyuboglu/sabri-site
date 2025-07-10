
export const DATA = {
    "research": [
        {
            "id": "cartridges",
            "title": "Cartridges: Lightweight and general-purpose languge model memory via self-study",
            "authors": [
                "Sabri Eyuboglu*", "Ryan Ehrlich*", "Simran Arora*", "Neel Guha", "Dylan Zinsley", "Emily Liu", "Will Tennien", "Atri Rudra", "James Zou", "Azalia Mirhoseini", "Christopher Ré"
            ],
            "venues": [
                {
                    "name": "Preprint",
                    "year": "2025",
                    "notes": [""]
                },
                {
                    "name": "ICML (Efficient Systems for Foundation Models Workshop)",
                    "year": "2025",
                    "notes": ["Oral Presentation"]
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/cartridges",
            "manuscript": "https://arxiv.org/abs/2506.06266",
            "description": "When we put lots of text (e.g. a whole code repo) into a language model’s context, generation cost soars because of the KV cache’s size. What if we trained a smaller KV cache for our documents offline? Using a test-time training recipe called self-study, we show that this simple idea can improve throughput by 26x while maintaining quality.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2025-06-08-cartridges",
            },
            "pinned": true
        },
        {
            "id": "minions",
            "title": "Minions: Cost-efficient collaboration between on-device and cloud language models",
            "authors": [
                "Avanika Narayan*", "Dan Biderman*", "Sabri Eyuboglu*", "Avner May", "Scott Linderman", "James Zou", "Christopher Ré"
            ],
            "venues": [
                {
                    "name": "ICML",
                    "year": "2025",
                    "notes": [""]
                },
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/minions",
            "manuscript": "https://arxiv.org/abs/2502.15964",
            "description": "We shift a substantial portion of LLM workloads to consumer devices by having small on-device models collaborate with frontier models in the cloud. By only reading long contexts locally, we reduce cloud costs with minimal or no quality degradation.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2025-02-24-minions",
            },
            "pinned": true
        },
        {
            "id": "rana",
            "title": "Adaptive Rank Allocation: Speeding up modern transformers with RaNA adapters",
            "authors": [
                "Roberto Garcia", "Jerry Liu", "Daniel Sorvisto", "Sabri Eyuboglu"],
            "venues": [
                {
                    "name": "ICLR",
                    "year": "2025",
                    "notes": [""]
                },
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch",
            "manuscript": "https://openreview.net/forum?id=uAtDga3q0r",
            "description": "One way to speedup LLMs is by dynamically dropping neurons from MLPs at test time. However, due to superposition, sparsity in neurons may be hard to find. Instead, we learn to drop ranks from the SVD of any linear projetion, which provides larger speedups at the same accuracy.",
            "links": {
            },
            "pinned": false
        },
        {
            "id": "layer-looping",
            "title": "Towards smaller language models via layer looping",
            "authors": [
                "Sabri Eyuboglu", "Dylan Zinsley", "Jon Saad-Falcon", "Simran Arora", "Atri Rudra", "James Zou", "Christopher Ré"],
            "venues": [
                {
                    "name": "ICML (Efficient Systems for Foundation Models Workshop)",
                    "year": "2024",
                    "notes": []
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/zoology",
            "manuscript": "https://openreview.net/pdf?id=2N3CtUdoB0",
            "description": "Can a Transformer act as an efficient data structure? We show that Transformers cannot efficiently answer complex queries over the factual knowledge in their parameters. However, two simple modifications, looped + conditional computation, improve space + time complexity!",
            "links": {
            },
            "pinned": false
        },
        {
            "id": "jrt",
            "title": "Just read twice: closing the recall gap for recurrent language models",
            "authors": ["Simran Arora", "Aman Timalsina", "Aaryan Singhal", "Benjamin Spector", "Sabri Eyuboglu", "Xinyi Zhao", "Ashish Rao", "Atri Rudra", "Christopher Ré"],
            "manuscript": "https://arxiv.org/abs/2407.05483",
            "github": "https://github.com/HazyResearch/prefix-linear-attention",
            "description": "We show that using a bidirectional encoder and a recurrent decoder (e.g. linear attention) can close some of the recall gap we identified in prior work (Zoology and Based). ",
            "venues": [
                {
                    "name": "ICML (Efficient Systems for Foundation Models Workshop)",
                    "year": "2024",
                    "notes": []
                }
            ],
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2024-07-01-jrt",
            }
        },
        {
            "id": "based",
            "title": "Simple linear attention models balance the recall-throughput tradeoff",
            "authors": [
                "Sabri Eyuboglu*", "Simran Arora*", "Michael Zhang*", "Aman Timalsina", "Silas Alberti", "Dylan Zinsley", "James Zou", "Atri Rudra", "Christopher Ré"],
            "venues": [
                {
                    "name": "ICML",
                    "year": "2024",
                    "notes": ["Spotlight Presentation"]
                },
                {
                    "name": "ICML (Efficient Systems for Foundation Models Workshop)",
                    "year": "2024",
                    "notes": ["Best Paper Award"]
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/based",
            "manuscript": "https://arxiv.org/abs/2402.18668",
            "description": "We highlight a fundamental tradeoff between a language model's memory consumption during generation and it's capacity to perfrom recall (e.g. remember information from the prompt). We show that simple linear attention models sit at the pareto frontier of this tradeoff.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2024-03-03-based",
                "🎤 ICML Talk": "https://www.youtube.com/watch?v=KCIcBnR-67s"
            },
            "pinned": true
        },
        {
            "id": "zoology",
            "title": "Zoology: Measuring and improving recall in efficient language models",
            "authors": [
                "Simran Arora*", "Sabri Eyuboglu*", "Aman Timalsina", "Isys Johnson", "Michael Poli", "James Zou", "Atri Rudra", "Christopher Ré"],
            "venues": [
                {
                    "name": "ICLR",
                    "year": "2024",
                    "notes": []
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/zoology",
            "manuscript": "https://arxiv.org/abs/2312.04927",
            "description": "We explain why a broad class of efficient language model architectures struggle to recall information seen in-context (e.g. remember information from the prompt).",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-12-11-zoology1-analysis",
                "🎤 ICLR Talk": "https://iclr.cc/virtual/2024/poster/18860"
            },
            "pinned": true
        },
        {
            "id": "monarch-mixer",
            "title": "Monarch Mixer: A simple sub-quadratic GEMM-based architecture",
            "authors": [
                "Daniel Y. Fu", "Simran Arora*", "Jessica Grogan*", "Isys Johnson*", "Sabri Eyuboglu*", "Armin W. Thomas*", "Benjamin Spector", "Michael Poli", "Atri Rudra", "Christopher Ré"   
            ],
            "venues": [
                {
                    "name": "NeurIPS",
                    "year": "2023",
                    "notes": ["Oral Presentation"], 
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/evaporate",
            "manuscript": "https://arxiv.org/abs/2304.09433",
            "description": "We swap out the attention and MLPs in a Transformer with fast, structured matrices that can be computed in sub-quadratic time.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-04-12-batch",
            },
            "pinned": false
        },
        {
            "id": "evaporate",
            "title": "Language models enable simple systems for generating structured views of heterogeneous data lakes",
            "authors": [
                "Simran Arora", "Brandon Yang*", "Sabri Eyuboglu*", "Avanika Narayan", "Andrew Hojel", "Immanuel Trummer", "Christopher Ré"],
            "venues": [
                {
                    "name": "VLDB",
                    "year": "2024",
                    "notes": []
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/evaporate",
            "manuscript": "https://arxiv.org/abs/2304.09433",
            "description": "Using LLMs to process unstructured data is expensive. We show how they can be used to generate and evalute code snippets that do the processing at a fraction of the cost.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-04-12-batch",
            },
            "pinned": false
        },    
        {
            "id": "model-changelists",
            "title": "Model ChangeLists: Characterizing changes to machine learning APIs",
            "authors": ["Sabri Eyuboglu", "Karan Goel", "Arjun Desai", "Lingjiao Chen", "Mathew Monfort", "Christopher Ré", "James Zou"],
            "venues": [
                {
                    "name": "FAccT",
                    "year": "2024",
                    "notes": ["Oral Presentation"]
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/meerkat",
            "manuscript": "",
            "description": "We explore how slice discovery techniques like Domino can be used to create a \"ChangeList\" comparing two machine learning models (e.g. before and after an update).",
            "links": {},
            "pinned": false
        },
        {
            "id": "hapi",
            "title": "Hapi: A large-scale longitudinal dataset of commercial ml api predictions",
            "authors": ["Lingjiao Chen", "Zhihua Jin", "Sabri Eyuboglu", "Christopher Ré", "Matei Zaharia", "James Y. Zou"],
            "venues": [
                {
                    "name": "NeurIPS",
                    "year": "2022",
                    "notes": ["Datasets and Benchmarks"]
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/lchen001/HAPI",
            "manuscript": "https://arxiv.org/abs/2209.08443",
            "description": "We collect predictions from ML-as-a-Service APIs over time and explore how they change.",
            "links": {},
            "pinned": false
        },
        {
            "id": "domino",
            "title": "Domino: Discovering systematic errors with cross-modal embeddings ",
            "authors": ["Sabri Eyuboglu*", "Maya Varma*", "Khaled Saab*", "Jean-Benoit Delbrouck", "Christopher Lee-Messer", "Jared Dunnmon", "James Zou", "Christopher Ré"],
            "venues": [
                {
                    "name": "ICLR",
                    "year": "2022",
                    "notes": ["Oral Presentation"], 
                }
            ],
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/domino/tree/main/domino",
            "manuscript": "https://arxiv.org/abs/2203.14960",
            "description": "We show how you can use multi-modal foundation models to discover the systematic errors made by machine learning models.",
            "links": {
                // "📘 Docs": "https://domino-slice.readthedocs.io/en/latest/",
                // "🧩 Demo": "https://hazyresearch.stanford.edu/blog/2022-04-02-domino",
                "🌍 Blog post": "https://ai.stanford.edu/blog/domino/",
                // "📒 Google Colab": "https://colab.research.google.com/github/HazyResearch/domino/blob/main/examples/01_intro.ipynb",
                "🎤 ICLR talk": "https://iclr.cc/virtual/2022/oral/6149"
            },
            "pinned": true
        },
        {
            "id": "dcbench",
            "title": "DCBench: A benchmark for data-centric AI systems",
            "authors": ["Sabri Eyuboglu*", "Bojan Karlaš*", "Christopher Ré", "Ce Zhang", "James Zou"],
            "venues": [
                {
                    "name": "DEEM",
                    "year": "2022",
                    "notes": ["Best Presentation Award"], 
                }
            ],
            "image": "res/hapi-preview.png",
            "description": "We create a benchmark for the parts of the machine-learning lifecycle beyond model training (e.g. data selection, subgroup analysis, data cleaning).",
            "github": "https://github.com/data-centric-ai/dcbench",
            "manuscript": "https://dl.acm.org/doi/abs/10.1145/3533028.3533310",
            "links": {
                "🌍 Website": "https://www.datacentricai.cc/benchmark/",
                "🎥 Demo": "https://drive.google.com/file/d/1BVLfPuXfqldrdJd1WI1SRBlcklcOyNC5/view"
            }

        },
        // {
        //     "title": "A large-scale longitudinal dataset of commercial ML API predictions",
        //     "authors": ["Lingjiao Chen", "Zhihua Jin", "Sabri Eyuboglu", "Christopher Ré", "Matei Zaharia", "James Zou"],
        //     "venue": "NeurIPS",
        //     "year": "2022",
        //     "image": "res/hapi-preview.png",
        //     "notes": ["Datasets and Benchmarks"],
        //     "description": "We collect predictions from ML APIs (e.g. GPT-3) over time and explore how they change.",
        //     "github": "https://github.com/lchen001/HAPI",
        //     "manuscript": "https://arxiv.org/abs/2209.08443",
        //     "links": {
        //         "🌍 Website": "http://hapi.stanford.edu/",
        //     }

        // },
        {
            "id": "mutual-interactors",
            "title": "Mutual interactors as a principle for the discovery of phenotypes in molecular networks",
            "authors": ["Sabri Eyuboglu*", "Marinka Zitnik*", "Jure Leskovec"],
            "venues": [
                {
                    "name": "PSB",
                    "year": "2023",
                    "notes": ["Oral Presentation"], 
                }
            ],
            "image": "res/mi_preview.png",
            "description": "We show that a super simple network principle can be used to identify disease-related genes.",
            "manuscript": "https://cs.stanford.edu/people/sabrieyuboglu/psb-mi.pdf",
            "github": "https://github.com/seyuboglu/milieu",
            "links": {
                "🎤 PSB talk": "https://youtu.be/WAE3spTP9PI",
                "🛝 Slides": "https://drive.google.com/file/d/1268p4qqwSP48MlQGtemnsenkz4iRYz18/view?usp=sharing"
            },
            "pinned": false
        },
        {
            "id": "pet-ct",
            "title": "Multi-task weak supervision enables anatomically-resolved abnormality detection in whole-body FDG-PET/CT",
            "authors": ["Sabri Eyuboglu*", "Geoffrey Angus*", "Bhavik Patel", "Anuj Pareek", "Guido Davidzon", "Jin Long", "Jared Dunnmon**", "Matthew Lungren**"],
            "venues": [
                {
                    "name": "Nature Communications",
                    "year": "2021",
                    "notes": [], 
                }
            ],
            "image": "res/pet_ct_preview.png",
            "github": "https://github.com/seyuboglu/weakly-supervised-petct",
            "manuscript": "https://www.nature.com/articles/s41467-021-22018-1",
            "description": "We train language models to read complicated radiology reports and use them to train multi-task models that can detect fine-grained abnormalities in large scans.",
            "links": {
            },
            "pinned": false
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
            "id": "meerkat",
            "title": "meerkat",
            "banner": "software/meerkat/meerkat_banner_small.png",
            "description": "Meerkat is an open-source Python library that helps users visualize, explore, and annotate any dataset.",
            "github": "https://github.com/HazyResearch/meerkat",
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
            "id": "zoology-software",
            "title": "zoology",
            "banner": "software/zoology/zoology_banner_small.png",
            "description": "Zoology provides a simple playground for understanding and testing language models on synthetic tasks.",
            "github": "https://github.com/HazyResearch/zoology",
            "docs": "http://cs106r.com/",
            "pypi": "meerkat-ml",
            "install": "http://meerkat.wiki/docs/start/install.html",
            "links": {
                "💻 GitHub":"https://github.com/HazyResearch/zoology", 
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-12-11-zoology1-analysis",
            }
        },
        {
            "id": "minions-software",
            "title": "minions",
            "banner": "software/minions/minions_banner_small.png",
            "description": "Minions provides communication protocols for on-device and cloud language models to collaborate.",
            "github": "https://github.com/HazyResearch/minions",
            "docs": "http://cs106r.com/",
            "pypi": "minions",
            "install": "http://meerkat.wiki/docs/start/install.html",
            "links": {
                "💻 GitHub":"https://github.com/HazyResearch/minions", 
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2025-02-24-minions",
            }
        },
        {
            "id": "based-software",
            "title": "based",
            "banner": "software/based/based_banner.png",
            "description": "Training and evaluation for training simple, linear attention variants.",
            "github": "https://github.com/HazyResearch/based",
            "docs": "http://cs106r.com/",
            "pypi": "minions",
            "install": "http://meerkat.wiki/docs/start/install.html",
            "links": {
                "💻 GitHub":"https://github.com/HazyResearch/based", 
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2024-03-03-based",
            }
        },
        {
            "id": "cartridges-software",
            "title": "cartridges",
            "banner": "software/cartridges/cartridges_banner.png",
            "description": "Store huge contexts in tiny KV caches with a synthetic data recipe called self-study.",
            "github": "https://github.com/HazyResearch/cartridges",
            "docs": "http://cs106r.com/",
            "pypi": "minions",
            "install": "http://meerkat.wiki/docs/start/install.html",
            "links": {
                "💻 GitHub":"https://github.com/HazyResearch/cartridges", 
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2025-06-08-cartridges",
            }
        },
        {
            "id": "tokasaurus",
            "title": "tokasaurus",
            "banner": "software/tokasaurus/toka-banner.png",
            "description": "An LLM inference engine optimized for throughput-critical workloads (e.g. offline self-study in Cartridges).",
            "github": "https://github.com/ScalingIntelligence/tokasaurus",
            "docs": "http://cs106r.com/",
            "pypi": "minions",
            "install": "http://meerkat.wiki/docs/start/install.html",
            "links": {
                "💻 GitHub":"https://github.com/ScalingIntelligence/tokasaurus", 
                "🌍 Blog post": "https://scalingintelligence.stanford.edu/blogs/tokasaurus/",
            }
        },
        
    ]
}
