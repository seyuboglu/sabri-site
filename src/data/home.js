
export const DATA = {
    "research": [
        {
            "title": "Language Models Enable Simple Systems for Generating Structured Views of Heterogeneous Data Lakes",
            "authors": [
                "Simran Arora", "Brandon Yang*", "Sabri Eyuboglu*", "Avanika Narayan", "Andrew Hojel", "Immanuel Trummer", "Christopher Ré"],
            "venue": "VLDB",
            "year": "2024",
            "notes": [], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/evaporate",
            "manuscript": "https://arxiv.org/abs/2304.09433",
            "description": "A long standing goal of the data management community is to develop general, automated systems that ingest semi-structured documents and output queryable tables without human effort or domain specific customization. Given the sheer variety of potential documents, state-of-the art systems make simplifying assumptions and use domain specific training. In this work, we ask whether we can maintain generality by using large language models (LLMs). LLMs, which are pretrained on broad data, can perform diverse downstream tasks simply conditioned on natural language task descriptions. We propose and evaluate EVAPORATE, a simple, prototype system powered by LLMs. We identify two fundamentally different strategies for implementing this system: prompt the LLM to directly extract values from documents or prompt the LLM to synthesize code that performs the extraction. Our evaluations show a cost-quality tradeoff between these two approaches. Code synthesis is cheap, but far less accurate than directly processing each document with the LLM. To improve quality while maintaining low cost, we propose an extended code synthesis implementation, EVAPORATE-CODE+, which achieves better quality than direct extraction. Our key insight is to generate many candidate functions and ensemble their extractions using weak supervision. EVAPORATE-CODE+ not only outperforms the state-of-the art systems, but does so using a sublinear pass over the documents with the LLM. This equates to a 110x reduction in the number of tokens the LLM needs to process, averaged across 16 real-world evaluation settings of 10k documents each.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-04-12-batch",
            }
        },
        {
            "title": "Monarch Mixer: A Simple Sub-Quadratic GEMM-Based Architecture",
            "authors": [
                "Daniel Y. Fu", "Simran Arora*", "Jessica Grogan*", "Isys Johnson*", "Sabri Eyuboglu*", "Armin W. Thomas*", "Benjamin Spector", "Michael Poli", "Atri Rudra", "Christopher Ré"   
            ],
            "venue": "NeurIPS",
            "year": "2023",
            "notes": ["Oral Presentation"], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/evaporate",
            "manuscript": "https://arxiv.org/abs/2304.09433",
            "description": "Machine learning models are increasingly being scaled in both sequence length and model dimension to reach longer contexts and better performance. However, existing architectures such as Transformers scale quadratically along both these axes. We ask: are there performant architectures that can scale sub-quadratically along sequence length and model dimension? We introduce Monarch Mixer (M2), a new architecture that uses the same sub-quadratic primitive along both sequence length and model dimension: Monarch matrices, a simple class of expressive structured matrices that captures many linear transforms, achieves high hardware efficiency on GPUs, and scales sub-quadratically. As a proof of concept, we explore the performance of M2 in three domains: non-causal BERT-style language modeling, ViT-style image classification, and causal GPT-style language modeling. For non-causal BERT-style modeling, M2 matches BERT-base and BERT-large in downstream GLUE quality with up to 27% fewer parameters, and achieves up to 9.1× higher throughput at sequence length 4K. On ImageNet, M2 outperforms ViT-b by 1% in accuracy, with only half the parameters. Causal GPT-style models introduce a technical challenge: enforcing causality via masking introduces a quadratic bottleneck. To alleviate this bottleneck, we develop a novel theoretical view of Monarch matrices based on multivariate polynomial evaluation and interpolation, which lets us parameterize M2 to be causal while remaining sub-quadratic. Using this parameterization, M2 matches GPT-style Transformers at 360M parameters in pretraining perplexity on The PILE--showing for the first time that it may be possible to match Transformer quality without attention or MLPs.",
            "links": {
                "🌍 Blog post": "https://hazyresearch.stanford.edu/blog/2023-04-12-batch",
            }
        },
        {
            "title": "Domino: Discovering Systematic Errors with Cross-modal Embeddings ",
            "authors": ["Sabri Eyuboglu*", "Maya Varma*", "Khaled Saab*", "Jean-Benoit Delbrouck", "Christopher Lee-Messer", "Jared Dunnmon", "James Zou", "Christopher Ré"],
            "venue": "ICLR",
            "year": "2022",
            "notes": ["Oral Presentation"], 
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/domino/tree/main/domino",
            "manuscript": "https://arxiv.org/abs/2203.14960",
            "description": "Machine learning models that achieve high overall accuracy often make systematic errors on important subsets (or slices) of data. Identifying underperforming slices is particularly challenging when working with high-dimensional inputs (e.g. images, audio), where important slices are often unlabeled. In order to address this issue, recent studies have proposed automated slice discovery methods (SDMs), which leverage learned model representations to mine input data for slices on which a model performs poorly. To be useful to a practitioner, these methods must identify slices that are both underperforming and coherent (i.e. united by a human-understandable concept). However, no quantitative evaluation framework currently exists for rigorously assessing SDMs with respect to these criteria. Additionally, prior qualitative evaluations have shown that SDMs often identify slices that are incoherent. In this work, we address these challenges by first designing a principled evaluation framework that enables a quantitative comparison of SDMs across 1,235 slice discovery settings in three input domains (natural images, medical images, and time-series data). Then, motivated by the recent development of powerful cross-modal representation learning approaches, we present Domino, an SDM that leverages cross-modal embeddings and a novel error-aware mixture model to discover and describe coherent slices.",
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
            "description": "Biological networks are powerful representations for the discovery of molecular phenotypes. Fundamental to network analysis is the principle—rooted in social networks—that nodes that interact in the network tend to have similar properties. While this long-standing principle underlies powerful methods in biology that associate molecules with phenotypes on the basis of network proximity, interacting molecules are not necessarily similar, and molecules with similar properties do not necessarily interact. Here, we show that molecules are more likely to have similar phenotypes, not if they directly interact in a molecular network, but if they interact with the same molecules. We call this the mutual interactor principle and show that it holds for several kinds of molecular networks, including protein-protein interaction, genetic interaction, and signaling networks. We then develop a machine learning framework for predicting molecular phenotypes on the basis of mutual interactors. Strikingly, the framework can predict drug targets, disease proteins, and protein functions in different species, and it performs better than much more complex algorithms. The framework is robust to incomplete biological data and is capable of generalizing to phenotypes it has not seen during training. Our work represents a network-based predictive platform for phenotypic characterization of biological molecules.",
            "manuscript": "https://cs.stanford.edu/people/sabrieyuboglu/psb-mi.pdf",
            "github": "https://github.com/seyuboglu/milieu",
            "links": {
                "🎤 PSB talk": "https://youtu.be/WAE3spTP9PI",
                "🛝 Slides": "https://drive.google.com/file/d/1268p4qqwSP48MlQGtemnsenkz4iRYz18/view?usp=sharing"
            }
        },
        {
            "title": "A Large-scale Longitudinal Dataset of Commercial ML API Predictions",
            "authors": ["Lingjiao Chen", "Zhihua Jin", "Sabri Eyuboglu", "Christopher Ré", "Matei Zaharia", "James Zou"],
            "venue": "NeurIPS: Datasets and Benchmarks",
            "year": "2022",
            "image": "res/hapi-preview.png",
            "notes": [],
            "description": "Commercial ML APIs offered by providers such as Google, Amazon and Microsoft have dramatically simplified ML adoption in many applications. Numerous companies and academics pay to use ML APIs for tasks such as object detection, OCR and sentiment analysis. Different ML APIs tackling the same task can have very heterogeneous performance. Moreover, the ML models underlying the APIs also evolve over time. As ML APIs rapidly become a valuable marketplace and a widespread way to consume machine learning, it is critical to systematically study and compare different APIs with each other and to characterize how APIs change over time. However, this topic is currently underexplored due to the lack of data. In this paper, we present HAPI (History of APIs), a longitudinal dataset of 1,761,417 instances of commercial ML API applications (involving APIs from Amazon, Google, IBM, Microsoft and other providers) across diverse tasks including image tagging, speech recognition and text mining from 2020 to 2022. Each instance consists of a query input for an API (e.g., an image or text) along with the API's output prediction/annotation and confidence scores. HAPI is the first large-scale dataset of ML API usages and is a unique resource for studying ML-as-a-service (MLaaS). As examples of the types of analyses that HAPI enables, we show that ML APIs' performance change substantially over time--several APIs' accuracies dropped on specific benchmark datasets. Even when the API's aggregate performance stays steady, its error modes can shift across different subtypes of data between 2020 and 2022. Such changes can substantially impact the entire analytics pipelines that use some ML API as a component. We further use HAPI to study commercial APIs' performance disparities across demographic subgroups over time. HAPI can stimulate more research in the growing field of MLaaS.",
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
            "description": "Computational decision support systems could provide clinical value in whole-body FDG-PET/CT workflows. However, limited availability of labeled data combined with the large size of PET/CT imaging exams make it challenging to apply existing supervised machine learning systems. Leveraging recent advancements in natural language processing, we describe a weak supervision framework that extracts imperfect, yet highly granular, regional abnormality labels from free-text radiology reports. Our framework automatically labels each region in a custom ontology of anatomical regions, providing a structured profile of the pathologies in each imaging exam. Using these generated labels, we then train an attention-based, multi-task CNN architecture to detect and estimate the location of abnormalities in whole-body scans. We demonstrate empirically that our multi-task representation is critical for strong performance on rare abnormalities with limited training data. The representation also contributes to more accurate mortality prediction from imaging data, suggesting the potential utility of our framework beyond abnormality detection and location estimation.",
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
            "description": "Meerkat is an open-source Python library that helps users visualize, explore, and annotate any dataset. It is especially useful when processing unstructured data types (e.g. free text, PDFs, images, video) with machine learning models.",
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
    ]
}
