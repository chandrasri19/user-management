const { injectBabelPlugin } =require('react-app-required');
const rootImportConfig=[
	"root-import",
	{
		rootPathPrefix:'~',
		rootPathSuffix:'src'
	}
];
module.exports=config=>injectBabelPlugin(rootImportConfig,config);