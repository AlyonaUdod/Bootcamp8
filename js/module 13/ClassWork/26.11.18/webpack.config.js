const path = require('path'); // дает возможность работать с путями
const argv = require('yargs').argv; // различать в каком режиме мы работаем - разработчика или продакшна.
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // все css в один запихивает
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // переводит в одну строку все
const HtmlWebpackPlugin = require('html-webpack-plugin'); // автоматом в html вставляет links и scripts

const isDevelopment = argv.mode === 'development'; // используются для того, чтобы говорить в каком режиме мы работаем и какие наборы плагинов запускать
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '/public'); // в какую папку мы будем выгружать все, что сделали

const config = { // 4 обязательных поля entry, output, module, plugins.
    entry : {
        main: './src/js/index.js' // основной файл, точка входа, за которым webPack будет следить и относительно него все собирать
    },
    output: {
        filename: 'bundle.js', // как будет называться результирующий файл и в какую папку будет выгружаться.
        path: distPath
    },
    module: { // в поле объект, в объекте rules - массив, в нем объекты
        rules : [{
                test: /\.html$/, // теперь webpack умеет работать с html 
                use: 'html-loader' // когда найдешь html запускай html-loader - загрузчик, который умеет работать с html
            }, {
                test: /\.js/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader'
                }]
            }, {
                  test: /\.scss$/,
                  exclude: /node_modules/,
                  use: [
                    isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                      loader: 'postcss-loader',
                      options: {
                        plugins: [
                          isProduction ? require('cssnano') : () => {},
                          require('autoprefixer')({
                            browsers: ['last 2 versions']
                          })
                        ]
                      }
                    },
                    'sass-loader'
                  ]
            }, {
                  test: /\.(gif|png|jpe?g|svg)$/i,
                  use: [{
                    loader: 'file-loader',
                    options: {
                      name: 'images/[name][hash].[ext]'
                    }
                  }, {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true,
                        quality: 70
                      }
                    }
                  },
                  ],
            }, {
                  test: /\.(eot|svg|ttf|woff|woff2)$/,
                  use: {
                    loader: 'file-loader',
                    options: {
                      name: 'fonts/[name][hash].[ext]'
                    }
                  },
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
          template: './src/index.html'
        })
      ],
    optimization: isProduction ? {  // необязательное поле. Пишем что будет происходить если мы будем работать в режиме продакшна.
        minimizer: [
          new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
              compress: {
                inline: false,
                drop_console: true
              },
            },
          }),
        ],
    } : {},
    devServer: {
      contentBase: distPath,
      port: 9000,
      compress: true,
      open: true
    }

};

module.exports = config;

// загрузчик - учит webpack работать с другими расширениями, кроме js. (ES6 тоже надо учить с ним работать)
// plugins - непосредственная работа с файлами, оптимизация. дополнительные npm пакеты 
// очередность загрузчиков в обратном порядке пишется. первым пишется тот, который должен быть загружен последним. 
// пользоваться web-pack сборкой от фейсбука