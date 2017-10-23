define({"414":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_product_label.html",a:"Upgrading from version 1.* to version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product label rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"415":{i:0.00106261585616371,u:"../enablement/migration_guides/mg_product_management.html",a:"Upgrading from Version 0.7.* to Version 0.8.*\n If you’re migrating the ProductManagement module from version 0.7.x to version 0.8.x, you need to follow the steps described below.\n\n ProductManagement module persistence layer was moved into the new ProductAttribute module. ORM Entities Changed The ...",t:"Migration Guide - ProductManagement"},"416":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_product_option.html",a:"Upgrading from version 4.* to version 5.* In version 5 Product Options were updated to work with the new calculator concept. Therefore, the SalesAggregator plugin was moved to the SalesAggregator module SubtotalWithProductOptionsAggregatorPlugin. The sales option database tables received new columns ...",t:"Migration Guide - Product Option"},"417":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"418":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"419":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"420":{i:0.00233173876294704,u:"../enablement/migration_guides/mg_rabbitmq.html",a:"Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: `bindingQueue` ...",t:"Migration Guide - RabbitMQ"},"421":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"422":{i:0.00253737831973691,u:"../enablement/migration_guides/mg_sales.html",a:"Upgrading from Version 7.* to Version 8.* \n            In Sales module version 8 we have added multicurrency support, this release added two new fields to spy_sales table to persist \"currency\" and \"store\". Also Order saver now stores currency and store where order is placed.\n\n            Run the ...",t:"Migration Guide - Sales"},"423":{i:0.00216879398419856,u:"../enablement/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"424":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_sales_aggregator_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\SalesAggregator\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - SalesAggregator Migration Console Command"},"425":{i:0.00332507602855628,u:"../enablement/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"426":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_search.html",a:"Upgrading from version 3.* to version 4.* With the version 4 of the Search module, the logic and configuration of how the results are sorted are changed. Previously there were two request parameters that controlled what field are we sorting by and what is the direction of the sort (e.g ...",t:"Migration Guide - Search"},"427":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"428":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_shipment.html",a:"Upgrading from version 4.* to version 5.* In version 5, shipment lost the direct foreign key sales.fk_shipment_method to the sales_order table, it was replaced with the spy_sales_shipment table where all shipment information is stored. A new SalesOrderHydration plugin was added to populate ...",t:"Migration Guide - Shipment"},"429":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_stepengine.html",a:"Upgrading from version 2.* to version 3.*\n \nIf you\u0027re migrating the StepEngine bundle from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine"},"430":{i:0.00685824326487579,u:"../enablement/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},"431":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_transfer.html",a:"Upgrading from version 2.* to version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer"},"432":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_wishlist.html",a:"Upgrading from version 2.* to version 3.*\n If you’re migrating the Wishlist module from version 2 to version 3, you need to follow the steps described below.\n\n Version 3 of the Wishlist module introduced new schema, and old tables have to be deleted while new created.\n\n First you need to drop old ...",t:"Migration Guide - Wishlist"},"433":{i:0.00124372907188133,u:"../enablement/tutorials/advanced_tutorials/tutorials.html",a:"Tutorials are instructions that describe an entire process including information about performing several tasks. We provide the following tutorials: Introduction tutorials - Tutorials that describe how to perform basic tasks Advanced tutorials- Advanced Spryker OS activities   Academy Navigation To ...",t:"Tutorials"},"434":{i:0.00086725306086281,u:"../enablement/tutorials/introduction_tutorials/introduction_tutorials.html",a:"Introduction tutorials describe how to perform basic tasks with Spryker Os. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"Introduction Tutorials"},"435":{i:0.00086725306086281,u:"../enablement/tutorials/introduction_tutorials/t_hello_world.html",a:"Challenge Description Build a HelloWorld module in Yves that will render the Hello world! string on the page. Manually building the HelloWorld module in Yves  Using Code Generator To save even more time, you can use code generator from development tools shipped with Spryker  Code Generator console ...",t:"Tutorial - Hello World"},"436":{i:0.00086725306086281,u:"../enablement/tutorials/introduction_tutorials/t_architectural_walkthrough.html",a:"This is an architecture walkthrough as a coding exercise. Challenge Description Build a HelloSpryker module in Zed that will render the Hello Spryker! string, in reverse order, on the screen. The string must be retrieved from the config. Build a HelloSpryker module in Yves that will render the Hello ...",t:"Tutorial - Architectural Walkthrough"},"437":{i:0.00086725306086281,u:"../enablement/tutorials/introduction_tutorials/t_dynamic_content_page.html",a:"Challenge Description Create a CMS page that displays some (marketing) text and a list of personalized products as offers. Challenge Solving Highlights Static page For creating a CMS page, follow these steps: Create a CMS template called personalized_products.twig under ...",t:"Tutorial - Dynamic Content Page"},"438":{i:0.00086725306086281,u:"../enablement/tutorials/introduction_tutorials/t_boosting_cart_based_search.html",a:"Challenge Description Based on the colors of the products that are in the cart of the user, the catalog should first display products that have the same color. Let’s say for example that there’s a red product in the cart, then the top results in the catalog should also contain red products. ...",t:"Tutorial - Boosting Cart Based Search"},"439":{i:0.00086725306086281,u:"../enablement/tutorials/introduction_tutorials/t_checkout.html",a:"Challenge Description Integrate an additional step into the checkout process; a Voucher step where a customer enters a voucher code and gets a discount. Add the Voucher step after the Payment one. To explore further before starting, you can read about the  Checkout  and the  StepEngine  modules. ...",t:"Tutorial - Checkout"},"440":{i:0.00086725306086281,u:"../enablement/tutorials/introduction_tutorials/t_oms_state_machine.html",a:"Challenge Description Create a simple state machine that demonstrates an order process. The simple order process has the following states: new, paid, shipped, closed, returned, and invalid. We use the invalid state in case a payment is unauthorized (could be used with some other cases as well). In ...",t:"Tutorial - OMS State Machine"},"441":{i:0.00249216288046074,u:"../enablement/tutorials/introduction_tutorials/t_stores.html",a:"Challenge Description Override a Zed core module on project level, and then override it on store level. You can also repeat the same challenge for a Yves module. Challenge Solving Highlights Project Level Let’s first override on the project level. Add an IndexController::indexAction() to ...",t:"Tutorial - Stores"},"442":{i:0.00346430039767178,u:"../enablement/tutorials/introduction_tutorials/ht_setup_hello_world_queue.html",a:"This Tutorial demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"Tutorial - Set Up a \"Hello World\" Queue"},"443":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/advanced_tutorials.html",a:"Advanced Tutorials Advanced tutorials describe advanced Spryker OS activities. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"advanced_tutorials"},"444":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_add_button_table.html",a:"Depending on the button type that needs to be added (Update/Create/Remove/View), the following operations can be called : \u003c?php\n$this-\u003egenerateCreateButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array $buttonOptions);\n$this-\u003egenerateEditButton(\u0027destination_URL\u0027, \u0027Button title\u0027, array ...",t:"Tutorial - Adding Buttons to Tables"},"445":{i:0.00101468679507815,u:"../enablement/tutorials/advanced_tutorials/t_add_navigation_zed.html",a:"This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{BundleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed"},"446":{i:0.00252159819746011,u:"../enablement/tutorials/advanced_tutorials/t_add_new_bundle.html",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New module"},"447":{i:0.00130164951632243,u:"../enablement/tutorials/advanced_tutorials/t_calculator_plugin.html",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  Calculation module. First, there are ...",t:"Tutorial - Calculator Plugin"},"448":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_console_commands.html",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"449":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_create_table_view.html",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new module ( Tutorial - Adding a New module ). Create a QueryContainer Create the QueryContainer class in the HelloWorld module: mkdir -p ...",t:"Tutorial - Creating a Table View"},"450":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_customer_import.html",a:"This tutorial describes the steps you need to follow in order to extend the Importer module functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data file In order to import customer data from a legacy system, the ...",t:"Tutorial - Customer Import"},"451":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_database_transactions.html",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"452":{i:0.0016044217319395,u:"../enablement/tutorials/advanced_tutorials/t_extend_db_schema.html",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},"453":{i:0.00217769336275425,u:"../enablement/tutorials/advanced_tutorials/t_extend_spryker.html",a:"To extend the Spryker-Core functionality and to use the Spryker Engine to develop a project, it’s important to understand the folder structure used in Spryker. The project consists of two parts : Spryker-Core and project implementation. They both follow the same structure and the project ...",t:"Tutorial - Extending Spryker"},"454":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_internationalization.html",a:"Challenge When running international business it is important to fine tune the behavior of a shop depending on the country. Topics that differ: Design \u0026 Layout Currency \u0026 price Tax calculation Languages Expense calculation Available Stocks from a different ERP/client Availability of shipment methods ...",t:"Tutorial - Internationalization"},"455":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_new_relic_monitoring.html",a:"Spryker enables integration with New Relic for performance monitoring. New Relic contains a set of powerful features that helps you monitor the performance and health of your application. To be able to use New Relic you must first get an account. Next you will need to install the New Relic PHP ...",t:"Tutorial - New Relic Monitoring"},"456":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_optimizing_search_boosting.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show you how to optimize the search results you get by configuring boosts. Why use boost? The search engine is one of the most important and critical ...",t:"Tutorial - Optimizing Search Results with Boosting"},"457":{i:0.00121359623381415,u:"../enablement/tutorials/advanced_tutorials/t_search_.html",a:"Spryker provides a convenient way to search product data. You’re enabled to easily setup full-text and facet search. In this tutorial we will show how to implement a simple product search using Spryker. This tutorial will not cover all aspects in detail to keep it focused. There will be links ...",t:"Tutorial - Search"},"458":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_search_custom_setup.html",a:"There might be instances when you need to go beyond product search or you have very specific requirements regarding search. You’re not tied to the basic mapping that ships with Spryker. You can easily roll your own and set up custom analyzer very easily. The underlaying library that gets used by ...",t:"Tutorial - Search Custom Setup"},"459":{i:0.00141584519084507,u:"../enablement/tutorials/advanced_tutorials/t_transfer_data_yves_zed.html",a:"Yves gets most of its data from the client-side NoSQL data stores(data such as product details, product categories, prices, etc.). There are situations in which Yves needs to communicate with Zed either to submit data(e.g.: the customer has submitted a new order or subscribed to newsletter) or to ...",t:"Tutorial - Transfering Data Between Yves and Zed"},"460":{i:0.00106210908696333,u:"../enablement/tutorials/advanced_tutorials/t_twig_extensions.html",a:"As an example on how to implement a Twig extension, we’ll build a filter which can be used on displaying prices. Implement the filter Add the Twig extension Register the new Twig extension Test your Twig extension Implement the filter Add the logic in a dedicated class, in the module you’re ...",t:"Tutorial - Twig Extensions"},"461":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_using_translations.html",a:"The data stored in the key-value storage can be used for multiple purposes: URL mappings localized product details localized product categories details Translations - Using Twig Translator Twig Translator uses the data that comes from the Redis key-value storage. The glossary keys store static ...",t:"Tutorial - Using Translations"},"462":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_working_filter_facets.html",a:"A search engine is one of the most important functionalities in an online shops because it facilitates a better navigation, allowing the user to get to the products that are in his interest. The search engine should return a small number of items that match the query. Facets provide aggregated data ...",t:"Tutorial - Working with Filter Facets"},"463":{i:0.00660040473597368,u:"../enablement/tutorials/advanced_tutorials/t_working_forms.html",a:"Spryker uses Symfony forms; this tutorial will help you get started on working with forms. You will build a simple newsletter subscription form that contains a field for entering the email address and a submit button. Follow the steps described below to create the newsletter subscription form: ...",t:"Tutorial - Working with Forms"},"464":{i:0.0057813830681007,u:"../enablement/tutorials/advanced_tutorials/t_working_tables.html",a:"Spryker has a dedicated component to help you build tables for the Zed UI. This tutorial will help you get started on working with tables. Creating a New Table Configure the Table Prepare the Data Render the Table Creating a New Table To get started defining the new table, create a new class in your ...",t:"Tutorial - Working with Tables"},"465":{i:0.00086725306086281,u:"../enablement/tutorials/advanced_tutorials/t_yves_bootstrap.html",a:"Yves and Zed are both built upon the  Silex micro-framework . So most concepts about modern web frameworks apply here as well. In static/public/Yves/index.php you will find the entry for the front-end application. \u003c?php\n$errorHandlerEnvironment = new ...",t:"Tutorial - Yves Bootstrapping"},"466":{i:0.000892672670210282,u:"../enablement/videos___webinars/videos.html",a:"Spryker Videos We believe that good technology doesn’t stop with the code. You also need the examples and information to help you convert your vision into reality. Check out our videos for more information about Spryker OS here .",t:"Spryker Videos"},"467":{i:0.00188651225969832,u:"../enablement/videos___webinars/feature_walkthrough_videos.html",a:"The Spryker Academy has its own  Playlist  on the Spryker YouTube Channel. Be sure to, Like, Subscribe Follow and Share to receive the latest updates. You can also send us direct requests for videos and topics to  academy@spryker.com Product Management Introduction to the Demoshop Wishlists CMS ...",t:"Feature Walkthrough Videos"},"468":{i:0.00123583739640116,u:"../developing_with_spryker/store_administration_guide/shipment/bg_shipment_creating_carrier.html",a:"Creating a Carrier Company - Shipment",t:"Creating a Carrier Company - Shipment"},"469":{i:0.00086725306086281,u:"../developing_with_spryker/industry_partner_integration/ratepay/payment_integration_ratepay.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods. RatePAY bears the full risk and takes over the complete ...",t:"Payment Integration - RatePAY"},"470":{i:0.0107001351871455,u:"../disclaimer.html",a:"Urheber \u0026 Haftungsausschluss für Publikationen Veröffentlicht in Berlin von der: Spryker Systems GmbH Julie-Wolfthorn-Strasse 1 10115 Berlin – DEUTSCHLAND eMail:  info@spryker.com Telefon: +49 (0) 30 208498351 Der Inhalt dieser Publikation ist unverbindlich und dient ausschließlich ...",t:"Disclaimer"},"471":{i:0.00123583739640116,u:"../developing_with_spryker/store_administration_guide/shipment/bg_shipment_creating_method.html",a:"A shipment method is described by : delivery price (how is the price for a delivery calculated?) delivery time (what’s the estimated time for the delivery?) availability (when is the shipment method available?) Each shipment method has its own specificity, so these 3 aspects must be configured(this ...",t:"Creating a Shipment Method"},"472":{i:0.00086725306086281,u:"../first_name.html",a:"first name Delete this text and replace it with your own content.",t:"first name"},"473":{i:0.00086725306086281,u:"../index.html",a:"Spryker Knowledge Planning to use Spryker? All you need to know about using and setting up the Spryker Commerce Operating System. Understanding Spryker Get to know what Spryker is and how you can easily adopt the Commerce OS for building your\n                                    e-commerce presence. ...",t:"Spryker Academy"},"474":{i:0.00123583739640116,u:"../enablement/migration_guides/mg_navigation.html",a:"Upgrading from version 1.* to version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least 2.0.0 version in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation module"},"475":{i:0.00086725306086281,u:"../developing_with_spryker/industry_partner_integration/hosting_heroku.html",a:"This article describes the aspects you need to consider when using Heroku as an application hosting solution.\n\n In the scenario described below, 3 applications will be sharing the Redis, Elasticsearch and database add-ons between them.\n\n Preconditions\n     Applications\n     Heroku Configuration ...",t:"Hosting Provider- Heroku"},"476":{i:0.00086725306086281,u:"../enablement/migration_guides/mg_navigation_gui.html",a:"Upgrading from version 1.* to version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. Update ...",t:"Migration Guide - NavigationGui module"},"477":{i:0.00123583739640116,u:"../understanding_spryker/product_management.html",a:"Product data is central data for shops. It contains characteristics that describe the product as well as characteristics that define their appearance in the shop. For example, the color of a product is an important information that the customer might need, whereas the weight of the product is needed ...",t:"Product Management"},"478":{i:0.00086725306086281,u:"../developing_with_spryker/store_administration_guide/shipment/bg_shipment.html",a:"The carrier companies that you want to have integrated in the shop can be configured from the back-office UI. For each carrier company you can add one or more shipment methods that you want to enable in the shop. A carrier company refers to a company that provides shipment services (e.g.: DHL, UPS, ...",t:"Shipment"},});