
export const DATA = {
    "research": [
        {
            "title": "Domino: Discovering Systematic Errors with Cross-modal Embeddings ",
            "authors": ["Sabri Eyuboglu*", "Maya Varma",  "Khaled Saab", "Jean-Benoit Delbrouck", "Christopher Lee-Messer", "Jared Dunnmon**", "James Zou", "Christopher Ré"],
            "venue": "ICLR",
            "year": "2022",
            "image": "res/domino_preview.png",
            "github": "https://github.com/HazyResearch/domino/tree/main/domino", 
            "manuscript": "https://arxiv.org/pdf/2203.14960.pdf",
            "description": "Machine learning models that achieve high overall accuracy often make systematic errors on important subsets (or slices) of data. Identifying underperforming slices is particularly challenging when working with high-dimensional inputs (e.g. images, audio), where important slices are often unlabeled. In order to address this issue, recent studies have proposed automated slice discovery methods (SDMs), which leverage learned model representations to mine input data for slices on which a model performs poorly. To be useful to a practitioner, these methods must identify slices that are both underperforming and coherent (i.e. united by a human-understandable concept). However, no quantitative evaluation framework currently exists for rigorously assessing SDMs with respect to these criteria. Additionally, prior qualitative evaluations have shown that SDMs often identify slices that are incoherent. In this work, we address these challenges by first designing a principled evaluation framework that enables a quantitative comparison of SDMs across 1,235 slice discovery settings in three input domains (natural images, medical images, and time-series data). Then, motivated by the recent development of powerful cross-modal representation learning approaches, we present Domino, an SDM that leverages cross-modal embeddings and a novel error-aware mixture model to discover and describe coherent slices.",
        },
        {
            "title": "Multi-task weak supervision enables anatomically-resolved abnormality detection in whole-body FDG-PET/CT",
            "authors": ["Sabri Eyuboglu*", "Geoffrey Angus*",  "Bhavik Patel", "Anuj Pareek", "Guido Davidzon", "Jin Long", "Jared Dunnmon**", "Matthew Lungren**"],
            "venue": "Nature Communications",
            "year": "2021",
            "image": "res/pet_ct_preview.png",
            "github": "https://github.com/seyuboglu/weakly-supervised-petct", 
            "manuscript": "https://www.nature.com/articles/s41467-021-22018-1",
            "description": "Computational decision support systems could provide clinical value in whole-body FDG-PET/CT workflows. However, limited availability of labeled data combined with the large size of PET/CT imaging exams make it challenging to apply existing supervised machine learning systems. Leveraging recent advancements in natural language processing, we describe a weak supervision framework that extracts imperfect, yet highly granular, regional abnormality labels from free-text radiology reports. Our framework automatically labels each region in a custom ontology of anatomical regions, providing a structured profile of the pathologies in each imaging exam. Using these generated labels, we then train an attention-based, multi-task CNN architecture to detect and estimate the location of abnormalities in whole-body scans. We demonstrate empirically that our multi-task representation is critical for strong performance on rare abnormalities with limited training data. The representation also contributes to more accurate mortality prediction from imaging data, suggesting the potential utility of our framework beyond abnormality detection and location estimation.",
        },
        {
            "title": "Mutual interactors as a principle for the discovery of phenotypes in molecular networks",
            "authors": ["Sabri Eyuboglu*", "Marinka Zitnik*",  "Jure Leskovec"],
            "venue": "Preprint",
            "year": "2021",
            "image": "res/mi_preview.png",
            "description": "Biological networks are powerful resources for the discovery of molecular phenotypes. Here, we show that proteins are more likely to have similar phenotypes, not if they directly interact in a molecular network, but if they interact with the same proteins. We call this the mutual interactor principle and show that it holds for several kinds of molecular networks, including protein-protein interaction, genetic interaction, and signaling networks. We then develop a machine learning framework for predicting molecular phenotypes on the basis of mutual interactors. Strikingly, the framework can predict drug targets, disease proteins, and protein functions in different species, and it performs better than much more complex algorithms. The framework is robust to incomplete biological data and capable of generalizing to phenotypes it has not seen during training.",
            "manuscript": "https://cs.stanford.edu/people/sabrieyuboglu/mutual-interactors.pdf",
            "github": "https://github.com/seyuboglu/milieu",
        },
    ],
    "teaching":[
        {
            "title": "Computação no Ensino Medio",
            "organization": "Sabri Eyuboglu and Geoffrey Angus",
            "year": "2018",
            "school": "Colégio SESC São Jose – Curitiba, Brasil",
            "image": "res/cem_preview.png",
            "description": " I spent the summer of 2018 in Curitiba, Brazil teaching an introductory computer science course to over 300 awesome high schoolers from all over the city. Every week Geoff Angus (another master's student at Stanford) and I co-taught eleven different classes at three different high schools in the city. We designed a full curriculum from scratch that uses the pedagogical methods of CS106A, but is tailored for high-school students that speak English as a second language. We wrote all of the assignments, course notes and slides from scratch. You can find all these materials on our website. We worked with school administrators and math teachers at the high schools to ensure the continuation of CS curriculum at the high school after we left. Also, because many students spoke little english, we lectured primarily in Portuguese (I had spent the school year before that summer studying Portuguese in preparation",
            "github": "https://github.com/geoffreyangus/cs106r",
            "website": "http://cs106r.com/"
        },
        {
            "title": "CS 198 Section Leader",
            "organization": "Computer Science Department",
            "year": "2015-2018",
            "school": "Stanford University",
            "image": "res/cem_preview.png",
            "description": "From sophomore to senior year of undergrad, I was a CS 106A/B section leader at Stanford. I taught a weekly class of twelve students, graded assignments and held office hours.",
            "github": "https://github.com/geoffreyangus/cs106r",
            "website": "http://web.stanford.edu/class/cs106b/"
        },
        {
            "title": "CS Bridge Section Leader",
            "organization": "Computer Science Department",
            "year": "2019",
            "school": "Koç University – Istanbul, Turkey",
            "image": "res/cem_preview.png",
            "description": "I spent two weeks this past summer in Istanbul teaching computer science at Koç University. I helped develop some of the curriculum and materials for the course.",
            "github": "https://github.com/geoffreyangus/cs106r",
            "website": "https://koc.csbridge.org/en/index.html"
        }
    ],
}
