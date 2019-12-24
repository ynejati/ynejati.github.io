
export const Webpack: string = `
  # Webpack Fundamentals
  
  ## Yousuf Nejati
  #### December 18, 2018

  * What is webpack
  * Why use it
  * An overview (concepts)
  * Getting started
  * Development configuration
  * Production configuration
  * Other useful configurations
  * Gotchas
  * Closing and things to remember (what is webpack, why use it, most important concepts)

If you’ve done any kind of front-end development lately you’ve likely encountered or heard of Webpack.  But what is Webpack?

Webpack is a module bundler for your static assets and JavaScript modules.  It is currently the king among module bundlers such 
as Parcel, Browserify, RequireJS, and others predominantly because of Webpack’s featureset, API, and tremendous support from the 
community.  First, before diving further into Webpack it’s helpful to understand modules, what it means to bundle modules and 
static assets, and why it has practically become a standard in front-end development.

Modular programming is a software design technique that encourages the breaking down of large and complex programs into 
independently functioning and well defined subprograms in an effort to help reduce overall program complexity. 
JavaScript modules are decoupled, reusable, blocks of code that prevent namespace collision and pollution of the 
global scope.  Prior to JavaScript adopting the ECMAScript 2015 (ES6) standard, there were various agreed upon ways 
in which to define JavaScript modules so that they did not pollute the global scope, including AMD, CommonJS, and UMD.  
At the moment, it’s not important that you know the difference between the three, but it is certainly good 
to know that they exist. 

By now you can probably grasp as to why one might be interested in module bundlers, and how they help with managing the 
many modules of a complex application. Module bundlers, like Webpack, take all of your modules and static assets and combine 
them all into a single file to be used by your JavaScript application.  There’s no need to inject modules into the application 
one by one via script tags, which can be devastating for page load performance and the overall user experience.  Bundlers 
really help simplify the build cycle of a web application by not only combining everything into one file, but also 
translating, transforming, and manipulating your modules via a long list of available loaders and plugins configurable by you,
 the developer. 

Getting started with Webpack is easy, and as of Webpack 4, requires no configuration out of the box.  In order to do so, Webpack
 assumes the path to your entry file (‘./src/index.js’) and output file (‘./dist/main.js’).  These assumptions might be great for 
 a simple web application, but as scale and complexity grows it is likely we might want to take control of the webpack configurations
 to leverage Webpack to its fullest potential.

Let's begin with a simple webpack configuration file and break it down so that we understand what each piece does.

<pre>
var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [
        {
          loader: "awesome-typescript-loader"
        },
      ],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.css$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" }
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'dist'
          },
        },
      ],
    }]
  },
  devtool: 'inline-source-map'
};
</pre>

Entry

As the name suggests, this the entry point to your application.  This is where we direct Webpack to begin building its internal 
dependency graph of your application’s modules.  There are multiple ways in which you can designate the entry point of your application.  

There is the shorthand method:

<pre>
module.exports = {
    entry: './path/to/my/entry/file.js'
};
</pre>

And, there is the more verbose and configurable object method:

<pre>
module.exports = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
</pre>

The object method is most ideal for application scaling. They can be reused and 
combined with other partial configurations using plugins like webpack-merge.  Each declared entry point will create a separate dependency 
graph.  If we have multiple dependency graphs that share application code between them, we can use the CommonsChunkPlugin to create 
bundles of application code shared between each bundle.

By default, Webpack assumes the context which contains the entry file is the current working directory.  It is recommended that when 
configuring webpack that you provide it an entry context as a hint for resolving entry points and loaders.  The entry context is an 
absolute path respresented as a string.

<pre>
module.exports = {
  context: path.resolve(__dirname, 'app')
};
</pre>

`;