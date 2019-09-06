# Readme for researcher_homepage

# How to use this template to create your homepage
This repository contains a template for the homepage of the LASTIG researchers. You can find below a tutorial to create your homepage using this template.

## Create a Github account and get invited in UMR LASTIG organization
The first step is to create an account on Github and to become a member of the [UMR LASTIG organization on Github](https://github.com/umrlastig/).
The website architecture is described in the image below. Github repositories are contained in the [UMR LASTIG organization](https://github.com/umrlastig/). There is one repository for the [homepage of the lab](https://github.com/umrlastig/website), one repository for the homepage of each of the four research teams (e.g. [GEOVIS team repository](https://github.com/umrlastig/geovis)), and one repository for each member of the LASTIG to host his/her homepage (e.g. [Guillaume Touya's homepage repository](https://github.com/umrlastig/gtouya_homepage)). The architecture of the website was designed this way for a simple management of administration rights: as each researcher creates his/her own repository to host his/her homepage, each researcher is the administrator of the homepage, and has the responsibility to keep it up-to-date.

![LASTIG website architecture](img/website_architecture.png)

A template to build a homepage is provided in the [researcher_homepage repository](https://github.com/umrlastig/researcher_homepage). The following sections of this tutorial explain how to use this template.

To get invited in this LASTIG organization, please contact one of the administrators of the organization (for instance one person among Guillaume Touya, Imran Lokhat, Sidonie Christophe, Clément Mallet, Bruno Vallet, Arnaud Le Guilcher, Mathieu Brédif, Marie-Dominique Van Damme) with the login of your Github account.

## Create your homepage repository
Once you are a member of the [UMR LASTIG organization](https://github.com/umrlastig/), you can create a new repository on the Github website by clicking on the green up-right button "New". Then, you have to give information on your repository (see the example in the image below). Please select a "Public" repository, it will help for the management of the website, and check the box "Initialize this repository with a README".

![Create a new repository](img/new_repo.png)

Once the repository is created navigate to the webpage of the repository. The website will be hosted here thanks to the [Github pages technology](https://pages.github.com/). To have a website hosted here and generated from the files in the repository, you have to create a branch of the repository called "gh-pages". So, click on the button "Branch:master" (see image below), type "gh-pages", and then click below on "Create branch: gh-pages".

![Create a new repository](img/branch_ghpages.png)

Then, Github should switch to this new gh-pages branch, to contains only the license and the readme files from the master branch. Arrived here, you already have your homepage at the following address "https://umrlastig.github.io/name_of_your_repo". For now, the homepage is quite empty and only displays the content of the readme.md file.

## Clone the repository on your computer
From now on, most of the work to create your homepage will be done from your desktop computer and not online on the Github website anymore. So, you need to clone your repository on your computer (the one you created on Github in the last step). You have two options to clone the repository with a git terminal, or with the [Github Desktop application](https://desktop.github.com/).

### Clone with Git terminal

* In the repository Github page, click "Clone or download" green button on the right.

* In the popup that opens, copy the URL of the repository (see image below).

![Clone the repository](img/clone_repo.png)

* Open a Bash or a Terminal.

* Change the current working directory to the location where you want the cloned directory to be made.

* Type git clone, and then paste the URL you copied just before

> $ git clone https://github.com/umrlastig/your_repo_name.git

* Press Enter. Your local clone of the repository will be created.

* Then, switch to the "gh-pages" branch you create earlier:

> $ git checkout gh-pages

### Clone with Github Desktop

* Install the Github Desktop application

* In the repository Github page, click "Clone or download" green button on the right.

* In the popup that opens (see image above), click on the "Open in Desktop" button. See this [Github tutorial](https://help.github.com/en/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop/) for more information.

* Then, switch to the "gh-pages" branch you create earlier:

![Switch the branch in Desktop](img/switch_branch.png)

## Copy the template into your repository

Arrived here, you have the files of the repository branch gh-pages in a folder called "your_repo_name" (e.g. "qttruong_homepage" in the tutorial images). You can check the folder on your computer, it should contain two files (LICENSE, and README.md). Now we are going to copy the template homepage into this folder.

The easiest way to do this is the following:
* Go to the [template repository](https://github.com/umrlastig/researcher_homepage/tree/gh-pages).

* Click on the "Clone or download" green button and then click on "Download ZIP" (see image below).

![Download zip file](img/download_zip.png)

* Download the .zip file somewhere on your computer. Then, unzip it somewhere and copy all the files directly into your repository local folder. You should have the files displayed in the image below copied in your local folder.

![Download zip file](img/local_files.png)

Now, your website is ready but only in your local folder. You need to commit and push it to Github to have it available on the web. You can do both either with the Git shell or with Github desktop. Here is the command line with the Git shell:

> $ git commit -a -m "Commit the template"

 Don't forget to push your new files to your remote Github repo after you commit them. Here is the command line if you don't use Desktop:

> $ git push origin gh-pages

After the Push, if you look at the address of your homepage ("https://umrlastig.github.io/name_of_your_repo"), you should now see the template homepage rather than the README.md file. You are now ready to modify the template with your own information.

## Fill the template with your personal information

This part of the tutorial explains how to modify the template with your own information.

> Please note that not all sections of this template apply to all researchers, so feel free to remove the ones that don't apply to you and to add sections that were not provided in the template. It is up to each LASTIG researcher to improve his/her homepage as he/she wishes.

### General guidelines with Bootstrap framework

This homepage is built with the Bootstrap framework, a simple framework for responsive webpages that works with HTML, CSS and JavaScript. There are plenty of tutorials on Bootrap on the web, for [instance](https://websitesetup.org/bootstrap-tutorial-for-beginners/).

To update the content of the template, you just have to edit the html file **index.html**. For instance, to change the name that appears on top of the homepage, edit the html line below:

>     <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
      <div class="w-100">
        <h1 class="mb-0">Guillaume
          <span class="text-primary">Touya</span>
        </h1>
        ...

To change the style of the template, you have to edit the css file **resume.css** located in the *css* folder, and overwrite the properties of the webpage you want to change. For instance, to change the primary text color, i.e. the one used for your lastname, you have to change the color code in the code below:

> .text-primary {
  color: #94c01a !important;
}

The template contains more information than need for most homepages. You just need to comment or remove the parts of the code you don't need in **index.html**. For instance, if you don't need a news section, remove (or comment for later uses) the following block code:

>     <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="news">
      <div class="w-100">
        <h2 class="mb-5">News</h2>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/orthez_google.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First news</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/orthez_IGN.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second news</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/orthez_OSM.png" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third news</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>

Then, to remove the section from the left navigation bar, remove the following lines at the beginning of the document:

>         <li class="nav-item">
          <a class="nav-link js-scroll-trigger lang-en" href="#news">News</a>
          <a class="nav-link js-scroll-trigger lang-fr" href="#news">Actualités</a>
        </li>

Only some advanced modification of the template requires the edition of the main Javascript file of the template, *js/resume.js*.

### Publications

The "Publications" section is generated from the HAL repository of each researcher, using the hal.js library. To have your publications displayed inside your homepage you have to:

1. Fill your HAL repository with all your publications.
2. Edit the HAL-id used when the page is loaded: in the index.html, modify the line below by changing 'guillaume-touya' to your own HAL-id.

> \<body id="page-top" onload="reviewingVis('reviewing.json');getJournalPublicationsAuthor('guillaume-touya');getConfPublicationsAuthor('guillaume-touya');getBookPublicationsAuthor('guillaume-touya');getOtherPublicationsAuthor('guillaume-touya');">

3. If you want to change the style or the categories, please feel free to edit your copy of the hal.js library.

> There is no difference in HAL metadata between a conference paper selected on long paper peer-reviewing and a paper selected on abstract or short paper tracks. To make sure your abstract-selected publications do fall in the good category, you have to add in the "Commentaire" metadata one of the following keywords: "poster", "workshop", or "short".

### Experience section

The *Experience* section is proposed in two ways in the template, a simple list presentation similar to the *Education* section, and a vertical timeline. You have to keep the one you prefer and remove the other from the *index.html* file. Be careful to keep the consistency between the **id** of the section and the one referenced in the navigation bar (see code below that refers to the timeline):

>         <li class="nav-item">
          <a class="nav-link js-scroll-trigger lang-en" href="#timeline">Experience</a>
          <a class="nav-link js-scroll-trigger lang-fr" href="#timeline">Parcours professionnel</a>
        </li>

### Reviewing
For those who have reviewing activities, this template proposes a d3.js based visualization of reviewing activities.

The content of the visualization, i.e. your reviewing activities, is stored in json file named **reviewing.json**. There are three categories of reviewing activities: *journals*, *conferences*, and *books*.

Regarding the reviewing activities in *books*, the metadata to fill in the json files are the following:
- *name*, i.e. the text that appears on the left of the line in the visualization, the default value is "Books" for each instance.
- *role*, which can be either "Reviewer" or "Editor".
- *year*, the year of the reviewing activity, which may be different from the publication year of the book.
- *type* that encodes the role, "BREW" for Reviewer, and "BED" for Editor
- *description*, i.e. the name of the book ("Abstracting geographic information in a data rich world: methodologies and applications of map generalisation" in the first example below).
- *url*, the URL of the published book that is used when clicking on the square.

In the example below, there is only one book per year, so everything is put in the same "Books" line, but different lines can be used to cover several books reviewed in the same years.

> "books": [
    {"name": "Books", "role": "Reviewer", "year": 2013, "type": "BREW", "description": "Abstracting geographic information in a data rich world: methodologies and applications of map generalisation", "url": "https://www.springer.com/us/book/9783319002026"},
    {"name": "Books", "role": "Reviewer", "year": 2014, "type": "BREW", "description": "OpenStreetMap in GIScience: experiences, research, and applications", "url": "https://www.springer.com/gp/book/9783319142791"},
    {"name": "Books", "role": "Reviewer", "year": 2015, "type": "BREW", "description": "European Handbook of Crowdsourced Geographic Information", "url": "https://www.ubiquitypress.com/site/books/10.5334/bax/"}
],

Regarding the reviewing activities in *journals*, the metadata to fill in the json files are the following:
- *name*, i.e. the text that appears on the left of the line in the visualization, which is the short name of the journal or a short name that gathers several journals (for instance "Other GIS" below gathers reviewing activities in several journals where the activities are not regular enough to deserve a full line).
- *role*, which can be either "Reviewer" or "Guest Editor".
- *year*, the year of the reviewing activity, which may be different from the publication year of the article (if it is published).
- *type* that encodes the role and the amount of papers reviewed, "JREW1" for Reviewer of 1 paper that year,  "JREW2" for Reviewer of 2 papers that year,  "JREW3" for Reviewer of 3 or more papers that year, and "JGED3" for Guest Editor. Other possible options can be added here, but it will require a modification of the **reviewing.js** file.
- *description*, i.e. the full name of the journal ("Transactions in GIS" in the first example below, for the "TiGIS" name).
- *url*, the URL of the journal, not of the reviewed papers.

>  "journals": [
   {"name": "TiGIS", "role": "Reviewer", "year": 2011, "type": "JREW1", "description": "Transactions in GIS", "url": "https://onlinelibrary.wiley.com/journal/14679671"},
   {"name": "IJGI", "role": "Reviewer", "year": 2012, "type": "JREW1", "description": "ISPRS International Journal of Geo-Information", "url": "https://www.mdpi.com/journal/ijgi"},
   {"name": "IJGI", "role": "Reviewer", "year": 2013, "type": "JREW1", "description": "ISPRS International Journal of Geo-Information", "url": "https://www.mdpi.com/journal/ijgi"},
   {"name": "Other GIS", "role": "Reviewer", "year": 2017, "type": "JREW1", "description": "Other journals in GIS", "url": ""},
],

Regarding the reviewing activities in *conferences*, the metadata to fill in the json files are the following:
- *name*, i.e. the text that appears on the left of the line in the visualization, which is the short name of the conference series (for instance "GeneICA" below stands for the reviewing activities in the ICA Workshops on Generalisation and Multiple Representation).
- *role*, which can be either "Reviewer", "PC Member/Associate Chair", or "Chair".
- *year*, the year of the reviewing activity, which may be different from the  year of the conference.
- *type* that encodes the role, "CHAIR" for chair of the conference,  "JREW2" for Reviewer of 2 papers that year,  "PCM" for program committee member, and "CREW" for simple reviewer. Other possible options can be added here, but it will require a modification of the **reviewing.js** file.
- *description*, i.e. the full name of the conference.
- *url*, the URL of the conference, not of the reviewed papers.

>  "conferences": [
     {"name": "GeneICA", "role": "Reviewer", "year": 2011, "type": "CREW", "description": "14th ICA Workshop on Generalisation and Multiple Representation", "url": "https://generalisation.icaci.org/prevevents/72-workshop-2011-general-information.html"},
     {"name": "GeneICA", "role": "Reviewer", "year": 2012, "type": "CREW", "description": "15th ICA Workshop on Generalisation and Multiple Representation", "url": "https://generalisation.icaci.org/prevevents/60-workshop-2012-general-info.html"},
     {"name": "GeneICA", "role": "Reviewer", "year": 2013, "type": "CREW", "description": "16th ICA Workshop on Generalisation and Multiple Representation", "url": "https://generalisation.icaci.org/prevevents/43-workshop2013general.html"},
  ],      

The rendering of the reviewing graphics is set up by default to fit the height and width necessary to show this years span, and this number of lines (journals/conferences). If your reviewing activities span from 2015 to 2019, you need to change the values in the constants declared in the **reviewing.js** file (see code below).

> const CVIS = {
    BOOK_LIST: ["Books"],
    JOUR_LIST: ["IJGIS", "CaGIS", "TiGIS", "JOSIS", "IJGI", "IJC", "Carto", "Other GIS", "SpatialCog", "IEEE", "ISPRS"],
    CONF_LIST: ["ICC", "GIScience", "GeneICA", "SAGEO", "ISPRS", "ISSDQ"],
    TIME_INTERVAL: ["2006", "2021"],
    SVG_W: 800,
    TITLE_Y: 26,
    CAPTION_X: 40,
    TRACK_WIDTH: 300,
    TRACK_HEIGHT: 18,
    TRACK_X: 110,
    CELL_SIZE: 12,
    CELL_STROKE: 2,
    CELL_MARGIN: 2,
};

If you have more or less journals, you have to change the height of the graph. This can be done in the **reviewing.js** file: in the example below, the *320* corresponds to the height of the graph and can be changed if necessary.

>  reviewing4x(data.journals, CVIS.JOUR_LIST, LEGENDS.journals, "#revj", 320, "Journals");


### Languages
The homepage is available in two languages for now, French and English. You just have to use the checkbox to switch the language. The language switch works with the html classes "lang-en" and "lang-fr": when the language is English, the html components with the class "lang-fr" are hidden and when the language is set to French, the components with class "lang-en" are hidden. So, you just have to double each text component in the index.html to allow different languages. For instance, this piece of code below adds a navigation bar entry displayed "About" in English and "Présentation" in French

>     <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link js-scroll-trigger lang-en" href="#about">About</a>
          <a class="nav-link js-scroll-trigger lang-fr" href="#about">Présentation</a>
        </li>

## Copyright and License

This template was inspired from the "Resume" Bootstrap template:
Copyright 2013-2019 Blackrock Digital LLC. Code released under the [MIT](https://github.com/BlackrockDigital/startbootstrap-resume/blob/gh-pages/LICENSE) license.
