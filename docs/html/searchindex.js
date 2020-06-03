Search.setIndex({docnames:["candle_lib","candle_lib/P1_utils","candle_lib/candle_keras","candle_lib/clr_keras_utils","candle_lib/data_preprocessing_utils","candle_lib/data_utils","candle_lib/default_utils","candle_lib/exp_logger","candle_lib/feature_selection_utils","candle_lib/file_utils","candle_lib/generic_utils","candle_lib/keras_utils","candle_lib/profiling_utils","candle_lib/pytorch_utils","candle_lib/solr_keras","candle_lib/uq_keras_utils","candle_lib/uq_utils","candle_lib/viz_utils","contribute","index","readme","tutorials/default_parameters","tutorials/index","tutorials/running_on_theta","tutorials/workflow_async_horovod","tutorials/workflow_async_search","tutorials/workflow_genetic_algorithm","tutorials/workflow_mlrMBO","tutorials/workflow_pbt","tutorials/workflow_upf","tutorials/writing_candle_code"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["candle_lib.rst","candle_lib/P1_utils.rst","candle_lib/candle_keras.rst","candle_lib/clr_keras_utils.rst","candle_lib/data_preprocessing_utils.rst","candle_lib/data_utils.rst","candle_lib/default_utils.rst","candle_lib/exp_logger.rst","candle_lib/feature_selection_utils.rst","candle_lib/file_utils.rst","candle_lib/generic_utils.rst","candle_lib/keras_utils.rst","candle_lib/profiling_utils.rst","candle_lib/pytorch_utils.rst","candle_lib/solr_keras.rst","candle_lib/uq_keras_utils.rst","candle_lib/uq_utils.rst","candle_lib/viz_utils.rst","contribute.rst","index.rst","readme.rst","tutorials/default_parameters.rst","tutorials/index.rst","tutorials/running_on_theta.rst","tutorials/workflow_async_horovod.rst","tutorials/workflow_async_search.rst","tutorials/workflow_genetic_algorithm.rst","tutorials/workflow_mlrMBO.rst","tutorials/workflow_pbt.rst","tutorials/workflow_upf.rst","tutorials/writing_candle_code.rst"],objects:{"":{P1_utils:[1,0,0,"-"],candle_keras:[2,0,0,"-"],clr_keras_utils:[3,0,0,"-"],data_preprocessing_utils:[4,0,0,"-"],data_utils:[5,0,0,"-"],default_utils:[6,0,0,"-"],exp_logger:[7,0,0,"-"],feature_selection_utils:[8,0,0,"-"],file_utils:[9,0,0,"-"],generic_utils:[10,0,0,"-"],keras_utils:[11,0,0,"-"],profiling_utils:[12,0,0,"-"],pytorch_utils:[13,0,0,"-"],solr_keras:[14,0,0,"-"],uq_keras_utils:[15,0,0,"-"],uq_utils:[16,0,0,"-"],viz_utils:[17,0,0,"-"]},"clr_keras_utils.CyclicLR":{clr:[3,3,1,""],on_batch_end:[3,3,1,""],on_epoch_end:[3,3,1,""],on_train_begin:[3,3,1,""]},"default_utils.Benchmark":{check_required_exists:[6,3,1,""],format_benchmark_config_arguments:[6,3,1,""],parse_from_benchmark:[6,3,1,""],parse_from_common:[6,3,1,""],read_config_file:[6,3,1,""],set_locals:[6,3,1,""]},"generic_utils.Progbar":{add:[10,3,1,""],update:[10,3,1,""]},"keras_utils.LoggingCallback":{on_epoch_end:[11,3,1,""]},"keras_utils.MultiGPUCheckpoint":{set_model:[11,3,1,""]},"keras_utils.PermanentDropout":{call:[11,3,1,""]},"solr_keras.CandleRemoteMonitor":{on_epoch_begin:[14,3,1,""],on_epoch_end:[14,3,1,""],on_train_begin:[14,3,1,""],on_train_end:[14,3,1,""],save:[14,3,1,""]},"solr_keras.TerminateOnTimeOut":{on_epoch_end:[14,3,1,""],on_train_begin:[14,3,1,""]},"uq_keras_utils.AbstentionAdapt_Callback":{on_epoch_end:[15,3,1,""]},P1_utils:{aprior:[1,1,1,""],bprior:[1,1,1,""],calculate_concordance_correlation_coefficient:[1,1,1,""],combat_batch_effect_removal:[1,1,1,""],coxen_multi_drug_gene_selection:[1,1,1,""],coxen_single_drug_gene_selection:[1,1,1,""],design_mat:[1,1,1,""],generalization_feature_selection:[1,1,1,""],generate_gene_set_data:[1,1,1,""],it_sol:[1,1,1,""],postmean:[1,1,1,""],postvar:[1,1,1,""]},clr_keras_utils:{CyclicLR:[3,2,1,""],clr_callback:[3,1,1,""],clr_check_args:[3,1,1,""],clr_set_args:[3,1,1,""]},data_preprocessing_utils:{generate_cross_validation_partition:[4,1,1,""],quantile_normalization:[4,1,1,""]},data_utils:{convert_to_class:[5,1,1,""],discretize_array:[5,1,1,""],discretize_dataframe:[5,1,1,""],drop_impute_and_scale_dataframe:[5,1,1,""],impute_and_scale_array:[5,1,1,""],load_X_data2:[5,1,1,""],load_X_data:[5,1,1,""],load_Xy_data2:[5,1,1,""],load_Xy_data_noheader:[5,1,1,""],load_Xy_one_hot_data2:[5,1,1,""],load_Xy_one_hot_data:[5,1,1,""],load_csv_data:[5,1,1,""],lookup:[5,1,1,""],scale_array:[5,1,1,""],to_categorical:[5,1,1,""]},default_utils:{ArgumentStruct:[6,2,1,""],Benchmark:[6,2,1,""],ListOfListsAction:[6,2,1,""],args_overwrite_config:[6,1,1,""],check_file_parameters_exists:[6,1,1,""],check_flag_conflicts:[6,1,1,""],directory_from_parameters:[6,1,1,""],eval_string_as_list:[6,1,1,""],eval_string_as_list_of_lists:[6,1,1,""],fetch_file:[6,1,1,""],finalize_parameters:[6,1,1,""],get_choice:[6,1,1,""],get_common_parser:[6,1,1,""],get_default_neon_parser:[6,1,1,""],keras_default_config:[6,1,1,""],set_seed:[6,1,1,""],set_up_logger:[6,1,1,""],str2bool:[6,1,1,""],verify_path:[6,1,1,""]},exp_logger:{end:[7,1,1,""],save:[7,1,1,""],start:[7,1,1,""]},feature_selection_utils:{select_decorrelated_features:[8,1,1,""],select_features_by_missing_values:[8,1,1,""],select_features_by_variation:[8,1,1,""]},file_utils:{get_file:[9,1,1,""],validate_file:[9,1,1,""]},generic_utils:{Progbar:[10,2,1,""],display_table:[10,1,1,""],func_dump:[10,1,1,""],func_load:[10,1,1,""],func_reconstruct_closure:[10,1,1,""],get_from_module:[10,1,1,""],make_tuple:[10,1,1,""]},keras_utils:{LoggingCallback:[11,2,1,""],MultiGPUCheckpoint:[11,2,1,""],PermanentDropout:[11,2,1,""],build_initializer:[11,1,1,""],build_optimizer:[11,1,1,""],corr:[11,1,1,""],covariance:[11,1,1,""],evaluate_autoencoder:[11,1,1,""],get_function:[11,1,1,""],mae:[11,1,1,""],mse:[11,1,1,""],r2:[11,1,1,""],register_permanent_dropout:[11,1,1,""],set_parallelism_threads:[11,1,1,""],set_seed:[11,1,1,""],xent:[11,1,1,""]},profiling_utils:{start_profiling:[12,1,1,""],stop_profiling:[12,1,1,""]},pytorch_utils:{build_activation:[13,1,1,""],build_optimizer:[13,1,1,""],get_function:[13,1,1,""],initialize:[13,1,1,""],mse:[13,1,1,""],set_parallelism_threads:[13,1,1,""],set_seed:[13,1,1,""],xent:[13,1,1,""]},solr_keras:{CandleRemoteMonitor:[14,2,1,""],TerminateOnTimeOut:[14,2,1,""],compute_trainable_params:[14,1,1,""]},uq_keras_utils:{AbstentionAdapt_Callback:[15,2,1,""],abs_acc:[15,1,1,""],abs_acc_class1:[15,1,1,""],abstention_loss:[15,1,1,""],abstention_variable_initialization:[15,1,1,""],acc_class1:[15,1,1,""],add_model_output:[15,1,1,""],modify_labels:[15,1,1,""]},uq_utils:{applying_calibration:[16,1,1,""],bining_for_calibration:[16,1,1,""],computation_of_valid_calibration_interval:[16,1,1,""],compute_empirical_calibration:[16,1,1,""],compute_limits:[16,1,1,""],compute_statistics_heteroscedastic:[16,1,1,""],compute_statistics_homoscedastic:[16,1,1,""],compute_statistics_homoscedastic_all:[16,1,1,""],compute_statistics_quantile:[16,1,1,""],fill_array:[16,1,1,""],generate_index_distribution:[16,1,1,""],generate_index_distribution_from_block_list:[16,1,1,""],generate_index_distribution_from_blocks:[16,1,1,""],generate_index_distribution_from_fraction:[16,1,1,""],overprediction_check:[16,1,1,""],split_data_for_empirical_calibration:[16,1,1,""]},viz_utils:{plot_2d_density_sigma_vs_error:[17,1,1,""],plot_calibration_and_errors:[17,1,1,""],plot_density_observed_vs_predicted:[17,1,1,""],plot_error:[17,1,1,""],plot_histogram_error_per_sigma:[17,1,1,""],plot_history:[17,1,1,""],plot_metrics:[17,1,1,""],plot_percentile_predictions:[17,1,1,""],plot_scatter:[17,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"10p":17,"10th":16,"12s":23,"50th":16,"8x4":23,"90p":17,"90th":16,"boolean":[1,5,6,8,9,10,17,26,28],"break":23,"case":28,"class":[3,5,6,10,11,14,15,17,28],"default":[1,3,4,5,6,8,10,11,15,16,18,21,23,27,28,30],"export":[23,24,26,27],"final":[1,25,26,27,29,30],"float":[5,8,11,15,16,17,21,26,28],"function":[1,3,4,5,6,8,10,11,15,16,17,21,24,25,26,28,29],"import":[25,30],"int":[5,6,8,10,15,16,26,28,30],"new":[16,19,24,25,26,27,28,29,30],"public":28,"return":[5,6,8,9,11,14,15,16,25,26,27,28,30],"switch":[25,26,27,28,29],"true":[1,5,6,13,14,15,16,17,21,28],"try":[15,23],"var":8,"while":[1,16,23,28],AND:16,For:[3,16,18,20,23,26,28],IDs:[1,6,21,23],Its:1,One:[5,6,16,26,28],That:28,The:[1,3,4,5,6,8,10,11,15,16,17,18,20,23,24,25,26,27,28,29,30],Then:[1,25,26,28],These:[20,24,25,26,27],Use:16,Uses:24,With:[28,30],___:27,_density_predict:17,_density_sigma_error:17,_empirical_calibr:17,_histogram_error_per_sigma:17,_pred:16,abl:[23,30],abolut:16,about:[25,26,27,28],abov:[3,6,23,25,26,28],abs:3,abs_acc:15,abs_acc_class1:15,abs_maximum:1,abs_mean:1,absolut:[1,8,9,16,27],absoult:16,abstain:15,abstent:15,abstention_loss:15,abstention_variable_initi:15,abstentionadapt_callback:15,acc:23,acc_class1:15,access:[6,23,28,30],accord:[1,11,16],account:16,accuraci:[15,21,23,28,30],action:6,activ:[15,21,23,26,28,30],actual:[3,30],adadelta:11,adagrad:11,adam:[11,23,26],adapt:15,add:[10,15,16,17,19,20,26,28,30],add_lr:17,add_model_output:15,added:[15,28],adding:[15,23,26],addit:[6,11,23,26,28],addition:28,additional_definit:[6,30],adoc:18,advanc:20,affect:1,after:[4,5,6,9,15,16,17,18,23,26,28],again:[23,28],against:[9,28],agnost:28,agre:16,aim:20,alcf:23,algo:26,algorithm:[19,22,23,24,25,28],algorithnm:28,all:[1,3,4,5,6,16,18,20,21,28],alloc:[23,24],allow:[4,8,16,18,21,23,28],almost:16,alon:20,along:[5,25,26],alreadi:[6,9,23,26,30],also:[3,17,18,20,24,25,26,27,28,29],alwai:[8,26],among:1,amount:28,amplitud:3,analysi:4,ani:[3,5,16,20,24,26,28,29,30],anl:[23,28],api:[19,24,26,28],app:[25,26,27],append:17,appli:[5,6,15,16,17],applic:[6,16,28],applying_calibr:16,approach:1,appropri:[11,26,28,30],aprior:1,aprun:24,arbitrari:15,arg:[3,6,10],argpars:[6,30],args_overwrite_config:6,argument:[3,6,11,15,21,23,25,26,27,28,30],argumentpars:6,argumentstruct:6,arrai:[1,4,5,8,15,16,17,21],artifact:20,arxiv:3,ascend:16,asciidoc:19,asid:5,assembl:29,assert:27,assign:[16,24],assocati:16,associ:[1,5,15],assum:[1,4,5,15,16,23,28,29],assumet:16,async:[24,25,26],asynchron:[19,22,24,28],attach:28,attain:[16,17],attempt:[1,26,28],auc:17,aug:23,author:3,auto:11,autoencod:20,automat:28,auxiliari:1,avail:[11,18,23,25,26,27,29],averag:[4,10,26],avg:26,awai:26,axi:5,back:[25,26,27],backend:30,background:[19,24],bar:[10,16,17],base:[1,3,4,6,8,10,11,14,15,16,17,19,22,28],base_lr:3,basi:3,basic:3,batch:[1,3,17,21,23],batch_label:1,batch_level:1,batch_norm:21,batch_siz:[21,23,26,28,30],becaus:[6,18],becom:[9,24],been:[5,6,15,16,24,26,28],befor:[1,8,16,25],begin:[23,28],behavior:[16,20],being:[5,9,20],belong:1,below:[18,23,25,26,28,30],benchmark:[6,19,22,24,28,29,30],benchmarkt:26,benefit:20,besid:17,best:[23,25,27],better:28,between:[1,3,6,11,16,26],beyond:16,big:20,bin:[5,8,16,17],binari:5,bining_for_calibr:16,binomi:[16,17],biocarta:1,biolog:1,block:16,blocklist:16,blockn:16,blocksiz:16,bmk:6,bodi:27,bool:6,both:[6,8,16,18],bottom:28,bound:[24,26,28],boundari:3,box:24,bprior:1,branch:[25,26,27,28,29],brief:30,budget:28,buffer:25,build:[5,19,30],build_activ:13,build_initi:11,build_optim:[11,13],built:[3,11,18],cach:[6,9,23],cache_subdir:9,cal_split:16,calcul:[1,4,8,14],calculate_concordance_correlation_coeffici:1,calibr:[16,17],call:[5,6,11,28],callback:[3,11,14,15,28],can:[3,4,5,6,8,18,20,23,24,25,26,27,28,29,30],cancer:19,candl:[6,16,22,28,29],candle_ecp:23,candle_kera:[0,19,30],candle_lib:18,candle_tutori:23,candleremotemonitor:14,cannot:6,captur:[7,14],carri:6,cat:23,categor:[1,5,15,26,28],categori:21,categorical_crossentropi:[5,30],caus:[1,5],ccc:1,cell:1,celllin:21,cellular:1,certain:[16,17],cfg:[23,24,25,26,27,29],cgp:1,chang:[6,15,18,20,24,28],charact:[5,6],check:[6,14,16,18,23,29],check_file_parameters_exist:6,check_flag_conflict:6,check_required_exist:6,checkout:[18,23],checksum:6,chemic:1,choos:[11,26,28],chosen:[26,28],chunk:16,cifar:3,circumst:25,class_col:5,classif:[5,15],client:28,clock:14,clone:[18,23,24,25,26,27,28,29],closur:10,clr:3,clr_callback:3,clr_check_arg:3,clr_fn:3,clr_keras_util:[0,19],clr_set_arg:3,cluster:20,coars:1,cobalt:23,cobaltlog:23,code:[10,16,19,20,22,24,27,28],coeffici:[1,8],coher:16,col:5,col_pr:16,col_pred_start:16,col_std_pr:16,col_std_pred_start:16,col_tru:16,colum:[16,17],column:[1,5,15,16,26],com:[6,18,23,25,26,27,28,29],combat_batch_effect_remov:1,combin:[20,26],combo:26,come:[5,26],comma:5,command:[6,18,23,29,30],comment:[26,28],commit:18,common:[6,9,16,25,26,27,29,30],commonroot:6,commun:[20,28],compar:28,compil:30,complet:[17,23,24],compliant:[19,22],compon:[1,20,28],compos:15,comput:[5,15,16,17,20,23,27,28,30],computation_of_valid_calibration_interv:16,compute_empirical_calibr:16,compute_limit:16,compute_statistics_heteroscedast:16,compute_statistics_homoscedast:16,compute_statistics_homoscedastic_al:16,compute_statistics_quantil:16,compute_trainable_param:14,concept:24,concord:1,concurr:[24,28],conda:[25,26],config:[6,23,25,26,30],config_fil:21,configproto:30,configu:6,configur:[6,20,21,23,30],configuraion:6,connect:21,consid:[5,8,28],consist:[6,11,26,28],consisten:16,constant:[3,11,13,21,26,28],construct:[5,6,16,17],constructor:28,contain:[1,4,5,8,14,16,23,25,26,27,28,29,30],content:19,continu:[5,20,28],contribut:19,control:[16,25,26,27],conv1_filt:21,conv1_filter_len:21,conv1_strid:21,conv2_filt:21,conv2_filter_len:21,conv2_strid:21,conv:[1,21],convent:6,convert:[5,6,16,19,30],convert_to_class:5,convolut:[21,28],copi:[23,25,26,27,28],core:[6,11,25],cori:[25,26,27,28,29],corr:11,correct:[1,16,26],correl:[1,8],correspon:16,correspond:[3,5,6,16,23,25],cost:15,could:[1,9,15,16,20,29],coupl:18,covari:[1,11],coverag:[16,17],coverage_percentil:[16,17],coxen:1,coxen_multi_drug_gene_select:1,coxen_single_drug_gene_select:1,creat:[3,6,18,23,25,26,28,29,30],criteria:16,criterion:16,cross:4,csv:28,current:[10,15,16,18,24,25,26,28,30],curv:17,custom:[3,30],customiz:28,cutoff:[1,5],cycl:[3,20],cyclic:3,cycliclr:3,d_hat:1,d_star:1,data1:1,data2:1,data:[1,4,5,6,8,16,17,20,21,23,25,26,27,28,29],data_dir:1,data_preprocessing_util:[0,19],data_typ:21,data_url:[21,30],data_util:[0,19],datadir:9,datafram:5,dataset:1,datastor:28,deap:26,deap_ga:26,debug:[6,23],decod:6,decoded_list:6,decompress:[6,9],decreas:15,deep:[16,19,22],deeplearning2:26,def:30,defaulf:6,default_datatyp:5,default_se:5,default_util:[0,5,19,30],defin:[3,5,6,10,15,16,17,25,26,28,30],definit:[26,28,30],defmodel:6,demonstr:20,dens:[15,21],depart:20,depend:[3,5,16,18,21,26,28],desc:[6,30],describ:[1,5,6,16,21,26,28],describen:16,descript:[6,11,30],descriptor:21,deseri:10,design:1,design_info:1,design_mat:1,design_s:23,designmatrix:1,desir:[11,13],desktop:28,dest:6,detail:[3,18,23,24],determin:[26,28],develop:20,deviat:[1,5,8,16,17,26],df_data:16,dictfileparam:6,dictionari:[6,14,16,26,28,30],differ:[6,16,20,21,23],direcotori:18,directli:25,directori:[6,9,18,21,23,24,25,26,27,28,29],directory_from_paramet:6,discard:28,discret:5,discretize_arrai:5,discretize_datafram:5,displai:10,display_t:10,distribut:[4,5,16,17,26,28],divid:16,divis:16,divisor:16,dnn:28,do_prof:12,doc:[18,28],docs_:18,document:[11,20,23],doe:[4,6,16,18,20,28,30],domain:28,don:[18,30],done:[16,23,28],doubl:15,down:23,download:[6,9],draw:[8,26,28],draw_histogram:8,drawn:[8,20,26,28],drop:[5,21],drop_col:5,drop_impute_and_scale_datafram:5,dropna:5,dropout:[11,17,21],dropt:5,drug:[1,21],drug_col:1,drug_response_col:1,drug_response_data:1,drwxr:23,dryrun:24,dtype:[5,6],dummi:[24,27],dunedin:27,dure:[15,16,17,28],eabs_r:16,each:[1,3,4,6,20,21,23,24,25,26,28,30],eamupluslambda:26,earli:20,easi:[25,26,27],easili:28,easimpl:26,ecp:[18,20,23,25,26,27,28,29],edit:[24,26,27,28,29],effect:[1,28],either:[1,5,28],element:[4,6,26,28],element_typ:[26,28],els:24,elu:[26,28],embed:26,empir:[16,17],empti:[8,28],enabl:30,encod:[1,5],end:[7,14,16,17,20,23,28,30],energi:20,ensembl:29,ensur:11,entir:23,entrez:1,entri:[6,26,28],env:[23,27],environ:[23,24,25,26,27,29,30],epoch:[3,11,14,15,17,21,23,26,28,30],eqpi:[25,26],equal:[1,4,16],er_vect_cal_orderedsigma_:16,err_err:[16,17],error:[16,17,23,25,26,27],error_threshold:[16,17],error_thresholds_smooth:[16,17],estim:[15,16,17],etc:[15,17,21,25,26,27,28,29,30],eval_bool:21,eval_string_as_list:6,eval_string_as_list_of_list:6,evalu:[3,8,16,19,21,22,23,25,26,27,28,30],evaluate_autoencod:11,evalut:25,event:6,everi:[1,14,28],everyth:24,evolv:20,exact:16,exactli:[8,28],exampl:[1,3,6,18,19,20,22,23,25,26,28,30],exceed:14,except:6,execut:[20,23,24,27,28,30],exercis:28,exist:[1,6,25,26,30],exit:[21,24],exp000:21,exp:7,exp_logg:[0,19],exp_rang:3,experi:[16,21,23,25,26,27,28,29],experiment_id:[7,21],expid:[25,26,27],explain:[16,30],explan:30,exploit:28,explor:[23,28],express:[1,16,17,21],extend:[6,30],extens:23,extern:28,extra:[15,16,23],extract:[6,14,16,29],f16:21,f32:21,f64:21,factor:15,fail:[5,24,27],fals:[1,5,6,8,9,10,11,17,21],fan_in:21,fan_out:21,faster:28,featur:[1,5,8,21,28],feature_selection_util:[0,19],feature_subsampl:21,fetch_fil:6,few:[20,25],fid:1,figprefix:17,figur:17,file:[5,6,9,14,16,17,18,19,21,22,23,24,25,27,30],file_ext:17,file_path:30,file_pr:17,file_util:[0,19],filenam:[5,6,7,17,21,23],filepath:[6,11],fill:16,fill_arrai:16,filter:16,final_results_2:26,finalize_paramet:6,finals_result:26,find:28,fine:[24,29],finish:[25,26],first:[1,5,8,16,18,20,23,26,28],fit:[1,3,30],fix:28,flag:[5,6],flat:23,flip:26,float32:5,fname:9,focu:20,focus:28,fold:4,folder:[6,18],follow:[4,16,18,26,28,30],forc:10,forg:25,forget:18,form:[25,26,27,30],format:[6,16,19,26,28],format_benchmark_config_argu:6,former:28,forth:[3,28],forward:20,found:28,four:23,fourth:20,fpath:9,fraction:[5,16,21],fragment:29,frame:[1,4,5,8,16],framework:[6,11,25,26,27,28,29],frequenc:3,frequent:[5,16,17],from:[5,6,9,14,16,17,18,20,21,24,25,26,28,29,30],ftp:28,full:[11,28,29],fulli:21,func:10,func_dump:10,func_load:10,func_reconstruct_closur:10,further:[5,26],futur:18,g_bar:1,g_hat:1,ga_strategi:26,ga_util:28,gamma:3,gamma_hat:1,gaussian:[16,26],gen:26,gene:1,gene_name_typ:1,gene_set:1,gene_set_categori:1,gene_set_data:1,gener:[1,4,5,6,8,15,16,17,18,20,21,24,25,26,27,28,30],generaliz:1,generalization_feature_select:1,generalization_power_measur:1,generate_cross_validation_partit:4,generate_gene_set_data:1,generate_index_distribut:16,generate_index_distribution_from_block:16,generate_index_distribution_from_block_list:16,generate_index_distribution_from_fract:16,generic_util:[0,19],genet:[1,19,22],genom:1,get:[25,26,27,28],get_choic:6,get_common_pars:6,get_default_neon_pars:6,get_fil:9,get_from_modul:10,get_funct:[11,13],git:[18,23,25,26,27,28,29],github:[18,23,25,26,27,28,29],given:[5,6,14,16,17,24,26,27,28,29,30],glob:[10,29],global:[6,15,26],global_param:30,glorot_uniform:[11,21],goe:24,good:16,gov:[23,28],gparam:6,gparamet:[6,30],gpu:21,greater:[15,16,23],greatli:30,greedi:16,grid:28,ground:[16,17],group:4,group_label:4,growth:17,guarante:16,guid:[23,30],h5py:25,half:3,handl:[5,6,29,30],handler:6,hard:[16,24],hard_sigmoid:[26,28],hardwar:11,has:[3,5,6,15,16,20,23,26,28],hash:[6,9],have:[1,5,6,8,16,18,20,23,24,26,28,29,30],he_norm:[11,21],header:5,height:17,help:[6,21,23,25,30],helper:10,here:[18,25,26,27,29,30],het:[15,16],heteroscedast:[15,16,17],hgnc:1,high:[16,17,30],higher:[8,16],highlight:26,histogram:[8,17],histori:[17,30],hold:23,hom:16,home:[21,23,24],home_dir:21,homoscedast:16,horovod:24,host:18,hot:[1,5],how:[4,19,22,25,26,27,28],howev:[18,20,28],hpc:28,hpo:30,hsyoo:23,html:[19,26],http:[3,6,18,23,26,28,29],hyper:[20,23,25],hyperparamet:[19,22,29,30],hyperparamt:28,ident:8,identifi:[10,21,28],idex:16,ignor:[3,6,8,26,28],illustr:30,imagin:20,implement:[3,6,14,24,28,29,30],implicit:15,improv:[20,28,30],imput:5,impute_and_scale_arrai:5,includ:[1,5,6,15,16,17,18,20,24,25,26,27,28],increas:[6,15,16,21],independ:[20,28],index:[1,4,5,10,16,17,18,24,26],index_perm_tot:16,index_sigma_range_test:16,indexarrai:16,indextest:16,indextrain:16,indexvalid:16,indic:[1,4,5,8,15,16,26,27,28],individu:[4,6,8,16,20,23,25,26,27,28,29],infer:[16,21],info:6,inform:[1,23,26,28,29],infrastructur:20,init_abs_epoch:15,init_s:25,initi:[3,11,13,15,21,25,26,27,28,29,30],initialis:15,initit:26,inner:[6,21],input:[1,4,5,6,11,16,30],input_asciidoc_fil:18,input_markdown_fil:18,insid:[16,18],inspect:29,instal:[19,23,25,26,27,29],instanc:[23,28],instanti:[6,10,30],instead:[21,27],instruct:18,integ:[1,4,5,8,11,13,15,16,17,21,24,30],integr:6,inter_op_parallelism_thread:30,interact:6,intercedil:16,interdecil:16,interest:20,interfac:[6,24,28],intern:21,interpol:[16,17],interpolatedunivariatesplin:[16,17],interpret:6,interspac:16,interv:[10,16,17],intervin:6,intial:[5,6],intra_op_parallelism_thread:30,introduc:20,investig:20,invoc:24,invok:[23,27,29],issu:[18,24,28,29],it_sol:1,iter:[3,23,25,26,27],its:[1,9,26,28],job:[23,25,28],jobid:23,jointli:28,json:[23,24,26,28,29],just:[1,5,18],keep:6,kegg:1,kei:[5,6,26,28],kendal:8,kera:[3,6,11,14,15,17,18,21,25,28,30],keras_default_config:6,keras_util:[0,19],kerasdefault:[11,13],keyword:[6,11,16],known:1,kwarg:[6,10,11],label:[1,4,5,15],lambda:3,lang:[25,26,27,29],laptop:28,larg:[8,29],larger:[1,4,8,25],largest:[5,16,17],last:[5,15,16],latter:[16,28],launch:[25,26,27,29],layer:[11,15,21,28,30],leadership:20,learn:[3,11,16,17,19,21,22,25,28],learning_r:21,least:[1,25],lecun_uniform:[11,21],len:4,length:[1,16,21],less:[6,15,16,25,26],let:[16,30],level:[1,6,14,18,20],leverag:28,lib:26,librari:[19,23,30],lightli:28,like:[18,20,23,28,30],lim:21,limit:[5,16,23],line:[6,23,26,30],linear:[1,21,26,28],link:[6,18],list:[1,4,5,6,10,11,16,17,26,28,30],listoflistsact:6,live:11,load:[5,28],load_csv_data:5,load_x_data2:5,load_x_data:5,load_xy_data2:5,load_xy_data_nohead:5,load_xy_one_hot_data2:5,load_xy_one_hot_data:5,local:[6,21,24,25,26,27,28],locally_connect:21,locat:[23,25,26,28],lock:28,log:[3,6,7,8,11,14,15,21,23,25,26,27,28],log_messag:14,logfil:[6,21],logger:6,loggingcallback:11,logic:[11,26,28],longer:9,look:5,lookup:5,loop:24,loss:[15,17,21,23,26,28,30],low:[16,17],lower:[3,16,23,26,28],lstm:21,lstm_size:21,machin:[20,23,27,28,30],machine_nam:[25,26,29],mad:8,made:[15,28],mae:11,mai:[1,3,16,18,20,24,26],main:[20,24,25,26,27,28],maintain:25,major:20,make:[18,20,30],make_tupl:10,makediscreteparam:23,makeintegerparam:23,makeparamset:23,manag:[20,28],mandat:30,mani:[4,5,23,25],map:[6,16,17],mapp:16,markdown:18,mask:[11,15],mask_:15,master:[23,25,26],mat:5,match:[1,5,15,29],matrix:[1,5],matter:9,max:[1,5,26],max_budg:23,max_budget:23,max_concurrent_evalu:23,max_ev:25,max_iter:23,max_lr:3,max_sigma:[16,17],max_threshold:25,maxab:5,maximum:[1,16,17,25,26],maxl_sigma:16,maxl_sigma_auto:16,maxsiz:16,mbo:30,mcs:28,md5:[6,9],md5_hash:[6,9],mean:[1,5,16,17,21],mean_sigma:[16,17],meaning:[16,17],measur:1,median:[5,8],membership:5,memori:28,mention:[23,28],merg:16,messag:[6,7,18,21,25,26,27,28],metadata:28,method:[3,5,6,8,17,23,28],metric:[1,8,15,17,21,28,30],mid:17,might:20,min:[1,26],min_sigma:[16,17],minab:21,minim:16,minimum:[1,6,16,17,26],minl_sigma:16,minl_sigma_auto:16,minmax:[5,21],minut:18,misc:24,miss:[1,4,5,8],mkdir:[23,28],mlrmbo:[19,22,30],mnist:[21,23,30],mnist_common:30,mnist_mlp:[21,30],mnist_mlp_candl:[23,30],mnist_param:30,mod:1,mode:[1,3,6,11,15],model:[1,3,6,11,13,14,15,16,20,21,23,25,26,27,29,30],model_fil:21,model_nam:[23,25,26,27,29],model_python_dir:23,model_python_script:23,model_runn:[25,26,27,29],modelcheckpoint:11,modelin:15,modelout:15,modelzoo:20,modif:[15,18],modifi:[15,23,25,26,27,28],modify_label:15,modul:[0,18,19,25,26,29],module_nam:10,module_param:10,molecular:1,monitor:[11,14,15],monoton:16,more:[3,15,20,23,24,25,26],most:[5,6,16],most_frequ:5,move:[6,23],mpi4pi:[25,28],mpi:28,mse:[11,13,21],msg:7,msigdb:1,mu0:15,mu_plus_lambda:26,multi:23,multi_drug_mod:1,multiclass:15,multigpucheckpoint:11,multipl:[1,18,20,23,28],must:[1,4,15,18,25,26,28],mutat:26,mutual:[1,8],mutual_info:1,myproject:23,n_col:5,n_featur:[1,4,8],n_fold:4,n_job:25,n_repeat:4,n_sampl:[1,4,8],n_samples_1:1,n_samples_2:1,n_source_sampl:1,n_target_sampl:1,name:[1,5,6,9,10,11,13,16,17,23,26,27,28,29,30],narg:30,nb_classes_:15,ncollier:26,ndarrai:15,necessari:[6,14,26,28],necessarili:20,need:[1,15,18,20,23,24,25,26,27,28,29,30],neg:[1,16,17],negat:26,neon:6,nersc:28,net:30,network:[3,30],neural:[3,30],neval:26,new_rst_fil:18,newli:29,next:16,node:[23,24,27],noisi:[16,17],non:[1,8,16,17,24],non_trainable_param:14,none:[1,3,4,5,6,8,9,10,11,13,14,15,17,21,30],nonzero:21,norm_data:4,normal:[4,5,11,21,24,25,29],note:[23,24,25,26,28],now:25,nrow:5,nt3:[20,26,27,29],nt3_mlrmbo:[27,29],num:25,num_add:15,num_buff:25,num_cal:16,num_class:5,num_generalizable_gen:1,num_inter_thread:30,num_intra_thread:30,num_iter:26,num_predictive_gen:1,num_work:25,number:[1,3,4,5,8,11,13,14,15,16,17,21,23,24,25,26,27,28,29,30],numblock:16,numclasses_out:15,numdata:16,numer:[1,4,8],numerical_covari:1,numpi:[1,4,5,8,15,16,17],numtest:16,numtrain:16,numvalid:16,obj:27,obj_app:[25,26,27,29],obj_dir:27,obj_fold:25,obj_modul:27,object:[1,5,6,10,16,17,24,25,26,29,30],observ:[8,16,17],obtain:[16,17,25,26,27,29],occur:[4,25,28],offer:23,omit:[23,30],ommit:28,ommun:28,on_batch_end:3,on_epoch_begin:14,on_epoch_end:[3,11,14,15],on_train_begin:[3,14],on_train_end:14,onc:28,oncogen:1,one:[1,3,5,6,8,16,17,20,24,25,26,27,28],onehot_col:5,ones:[24,25,26],onli:[6,8,11,15,17],onlin:28,onto:20,oper:[16,17,25,26,27],optim:[11,15,19,21,22,28],option:[5,6,11,15,21,24,25,26,30],option_str:6,order:[1,5,6,8,16,18,26,28,30],org:[3,28],organ:[18,20],origin:[5,9,15],other:[5,11,16,20,25,26,27,28,29],otherwis:[5,23,27],our:[18,20,28],out:[6,17,21,23,25,26],out_activ:21,outdir:17,outer:6,output:[1,4,5,6,14,15,18,21,23,24,28,29],output_dir:[17,21],outstand:24,over:[15,16,17,20],overestim:16,overprediction_check:16,overrid:21,overview:[24,30],overwrit:6,overwritten:30,own:[25,26,28,30],p1_util:[0,19],p1b1:[20,26],p1b2:20,pack_data:28,packag:[0,18,19,26,28],panda:[1,4,5,8,16,25,26],pandoc:18,paper:3,parallel:[11,20,23,24,25,28,30],param:[5,6,7,14,15,16,17,23],param_set_fil:23,paramat:3,paramet:[1,5,6,9,10,11,13,14,15,16,17,19,20,22,23,25,26,27,28],parameters_candl:6,params_benchmark:6,params_fil:6,params_pars:6,pars:6,parse_from_benchmark:6,parse_from_common:6,parser:[6,30],part:[16,26,28,30],partial:17,particular:[6,28],partit:[4,5,16,21],pass:[9,15,23,25,26,28,30],path:[6,9,21,27,28,29],patsi:1,pattern:29,pbt:[19,22],pbtcallback:28,pbtclient:28,pbtmetadatastor:28,pbtworkder:28,pbtworker:28,pearson:[1,8],peform:[26,28],per:[3,16,17,21,24,25,26,27],percent:5,percentag:16,percentil:[5,16,17],percentile_list:17,perform:[16,21,25,26,28,30],period:[11,28],permanentdropout:11,permit:16,permut:[5,16],perspect:20,perturb:[1,28],pickl:21,pid:1,pilot1:28,pilot:20,pip:[18,26],place:[5,20,28,30],plan:[18,23],pleas:[3,18,23],plot:17,plot_2d_density_sigma_vs_error:17,plot_calibration_and_error:17,plot_density_observed_vs_predict:17,plot_error:17,plot_histogram_error_per_sigma:17,plot_histori:17,plot_metr:17,plot_percentile_predict:17,plot_scatt:17,plu:16,plug:24,png:17,point:[16,21,23,24,25,26,27],points_init:24,points_max:24,polici:[3,23],pool:[21,30],popul:[26,28,29],population_s:26,portion:[4,8,16],posit:[1,4,5,8,10,16],possibl:16,postmean:1,postvar:1,potenti:28,power:1,ppred_cal:16,ppred_test:16,pre:[5,23],pred_nam:[16,17],predict:[1,15,16,17],predicted_inf:16,predicted_infer_het:16,predicted_infer_qtl:16,prediction_power_measur:1,predit:16,prefix:17,present:[5,6,8,9],preserv:5,prevent:28,previou:[16,23],previous:6,print:[11,24,25,26,27,29],print_fcn:11,prm:[23,25,26,27],probabl:26,problem:[6,15,20,24,25],problem_tc1:25,proc:[23,25,26,29],procedur:[16,17,30],process:[1,5,24,27,28,29,30],processor:[25,26,27,29],produc:[21,25,26],product:23,profiling_util:[0,19],prog:[6,30],progbar:10,program:24,progress:[10,17],proj:24,project:[20,23],promot:15,propose_point:23,provid:[1,6,16,23,25,26,27,28,30],pseudo:6,psigma_c:16,psigma_cal_ordered_:16,psigma_test:16,pub:28,purpos:20,push:[18,20],put:[3,28],pwd:[24,27],python2:26,python:[3,6,14,16,17,18,24,25,26,27,29,30],pythonpath:26,pytorch_util:[0,19],qstat:23,qtl:[15,16],quad:23,quantil:[4,15,16],quantile_norm:4,quantiti:[16,17],queri:[5,28],question:6,queue:[23,25,26,27,28,29],quick:[18,24],quickli:28,r_i_j:[25,26,27],rais:6,random:[4,5,6,8,11,13,16,21,23,25,26,28],random_col:5,random_se:[4,8],randomli:[5,21,26,28],rang:[5,8,16,17,26,28],rank:[1,8,28],rapidli:24,rate:[3,8,11,17,21,28],rather:[1,4],ratio:21,raw:[16,17],reach:[3,14],reactom:1,read:[5,6,18,28],read_config_fil:6,readi:28,readm:[25,26,27,28,29],readthedoc:26,real:8,realiz:16,reason:[20,28],receiv:30,recent:29,recogn:[5,6,11,30],recogniz:6,recommend:[23,30],reconstruct:10,record:[6,26,28],recurr:21,recurrent_dropout:21,recursivelli:6,refer:[3,18,20,23,28],reflect:[18,23],refresh:18,regist:[23,30],register_permanent_dropout:11,regress:[1,5,15],regular:16,rel:16,relat:[16,20],relationship:16,releas:19,relev:[25,26,28],relu:[15,21,23,26,28,30],remain:28,remaind:[16,26],remov:[8,15],repeat:4,replac:[5,20,24,28],repo:[18,23,25,26,27],report:26,repositori:[18,20,28],repres:[5,20,28],represent:[5,15],request:[23,28],requir:[6,11,16,18,23],rescal:5,research:20,reserv:16,resid:20,resiz:16,resourc:[20,28],respect:[5,16,23],respons:1,restart:[25,26,27],restrict:16,restructuredtext:18,result:[6,16,23,25,26,27],ret:5,retriev:[5,28],return_datafram:5,return_head:5,review:23,rewritten:23,right:6,rmsprop:[11,21,23,26,30],rng_seed:21,row:[4,5,10],rst:19,rtd:18,run000:21,run:[1,6,14,18,19,20,21,22,24],run_1:28,run_2:28,run_id:21,run_n:28,runid:[25,26,27],rwxr:23,s_interpol:[16,17],sai:29,same:[1,4,15,26],sampl:[1,4,15,16,21,24,25,26,27,28],saniti:29,satisfact:16,save:[7,14,21,30],save_best_onli:11,save_path:21,save_weights_onli:11,savgol:16,sbatch:28,scalabl:20,scale:[3,5,8,20,21],scale_arrai:5,scale_factor:15,scale_fn:3,scale_mod:3,sched:[25,26],schedul:[23,25,26,27,28,29],scheme:28,scienc:20,scikit:25,scipi:[16,17,28],score:[26,28],script:[14,23,24,25,26,27,28,29],sdat:1,search:[5,19,20,22,23,24,26,28],searcher:20,second:[1,20,21,25,26],section:[18,23,30],see:[3,11,18,23,25,26,27,28,29,30],seed:[4,5,6,8,11,13,21,26],select:[1,5,8,23,26,28],select_decorrelated_featur:8,select_features_by_missing_valu:8,select_features_by_vari:8,self:30,send:[6,14,28],sep:5,separ:[5,6],separator_in:6,separator_out:6,separet:5,seri:1,serial:[10,28],serv:[20,28],sess:30,session:30,set:[1,3,4,5,6,9,11,13,14,15,21,23,24,25,26,27,28,29,30],set_loc:[6,30],set_model:11,set_parallelism_thread:[11,13],set_se:[6,11,13],set_sess:30,set_up_logg:6,sever:6,sgd:[11,21,23],shape:[1,4,8],share:[28,30],shell:[24,27,29],should:[1,4,6,8,9,16,20,23,25,26,27,28,30],show:[20,21],shuffl:[5,21],sigma:[16,17,26],sigma_divisor:16,sigma_end_index:[16,17],sigma_start_index:[16,17],sigmoid:[21,23,26,28],signatur:1,sigomid:15,simpl:[20,25,26,27,28,30],simpli:[25,26,27],simplifi:6,simultan:8,sin:3,sinc:[3,16,20,26],singl:[3,25],site:[18,25,26],six:17,size:[1,3,16,21,23,25,26],skip:[17,23],skip_ep:17,skopt:24,slurm:28,small:16,smaller:[8,15],smallest:[16,17],smooth:[16,17],smoother:16,snapshot:21,soft:5,softer:16,softmax:[15,21,26,28],softplu:[26,28],softsign:[26,28],softwar:20,solr_kera:[0,19],solut:28,some:[3,26,28,30],soon:28,sort:1,sourc:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,23],source_data:1,space:[23,25,26,28],span:20,spearman:8,specif:[1,5,6,15,16,17,24,25,26,28],specifi:[5,6,15,16,21,23,25,26,27,28,29],spedifi:6,sphinx:19,spline:[16,17],split:[5,16,17],split_data_for_empirical_calibr:16,sqrt:21,stack:[24,27,29],stackoverflow:6,stage:20,stand:20,standard:[1,5,8,16,17,21,26],start:[3,7,14,16,17,18,20,24,28,30],start_profil:12,state:21,statist:[16,17,26],statu:23,std:[5,8,16,17,21,26],stddev:21,stderr:[6,23,25,26,27],stdout:[23,25,26,27],step1:17,step2:17,step:[10,16,17,23,28],step_siz:3,stop:16,stop_profil:12,stop_train:14,store:[6,14,15,16,17,28],store_tru:6,str2bool:6,str_read:6,straightforward:24,strategi:[5,15,23],stream:6,string:[1,5,6,8,9,11,15,16,17,26,28],structur:[6,16,18,30],subdir:6,submit:[23,24,27,28],subprocess:24,subsampl:[17,28],subsequ:26,subset:5,success:26,successfulli:27,suffix:27,suggest:3,sum2:1,sum:[1,3,28],summar:1,summat:[1,4],supervisor:[23,25,26,27,28,29],suppli:[4,28],support:[3,18,30],sure:[18,20],surpass:16,sweep:20,swift:[23,25,26,27,29],symbol:1,sys:[6,23,25,26,27,29],sys_desc:7,system:[6,20,23,24,25,26,27,28],take:[1,8,16,28],taken:6,tanh:[21,23,26,28],target:[10,15,18],target_acc:15,target_data:1,task:[24,25,30],tau:8,tc1:[25,26],tc1_param_space_ga:26,tc1_params_ful:28,tc1_params_smal:28,tc1_runner:28,tc1pbtworker:28,team:30,templat:29,ten:5,tensor:[11,15],tensorflow:30,term:15,termin:[14,25,26,27],terminateontimeout:14,test0:23,test1:23,test:[4,5,15,16,20,21,23,25,26,27,28,29],test_data:21,test_fil:5,test_obj_fail:27,test_path:5,test_step:21,than:[1,4,6,8,15,16,23,25],thei:[6,16,20,26],them:[16,18,23,28],theme:18,theori:20,therefor:[3,16],theta:[19,22,24,25,26,27,29,30],thetalogin4:23,thi:[1,3,4,5,6,8,11,14,15,16,17,18,20,21,23,24,25,26,27,28,29,30],thing:20,third:20,those:[5,6,18,23,26,28,30],thread:11,three:[1,3,20],threshold:[8,16,17],through:28,thu:[8,28],tic:23,time:[4,6,16,20,23,24,28],timeout:[14,21],timeout_in_sec:14,timestamp:26,titan:[25,26,27,29],titl:17,to_categor:5,togeth:[5,28],toler:16,too:[6,28,29],top:[18,20,28],total:[4,5,8,16,23,26],total_param:14,trace:[23,24],train:[3,4,5,14,15,16,17,21,28],train_bool:21,train_data:21,train_fil:5,train_path:5,train_sampl:21,train_step:21,trainable_onli:13,trainable_param:14,trainig:5,transform:1,transplant:30,trial:4,triangular2:3,triangular:3,trigger:18,tripl:15,true_cal:16,true_test:16,truncation_select:28,truth:[16,17],tsv:16,tumor:1,tumor_col:1,tupl:[5,10,11],turbin:23,turbine_output:[25,26,27],tutori:[19,23],two:[1,3,6,8,15,23,28,30],txt:[23,25,26,27,29,30],type:[1,5,6,11,13,15,21,26,28,30],type_18_300_test:28,type_18_300_train:28,uknown:6,ultim:28,under:[18,23,25,28],underperform:28,undon:6,uniform:[11,21],union:1,union_of_single_drug_select:1,uniqu:[6,21,24],unit:[1,15,21],univari:[16,17],univer:18,unlabelel:5,unlik:28,unmodifi:[5,25,26,27],uno:24,unpromis:28,unrol:[19,22,23],untar:[6,9],until:16,unus:27,updat:[6,10,26,28],upf:[19,22,27,30],upper:[3,23,26,28],uppercas:6,uq_keras_util:[0,19],uq_test_bk:16,uq_test_fr:16,uq_test_vec:16,uq_train_bk:16,uq_train_fr:16,uq_train_vec:16,uq_util:[0,19],uq_valid_bk:16,uq_valid_fr:16,uq_valid_vec:16,url:[6,9,21],usag:[21,29],use:[5,15,16,20,21,23,25,26,27,28,30],usecol:5,used:[1,5,6,8,9,15,16,17,18,20,21,24,26,28,29,30],user:[10,23,28,30],user_nam:23,uses:[1,24,26,28,30],using:[1,6,16,21,24,26,28],usual:[16,17],util:[6,20,24],val:26,val_acc:23,val_loss:[11,23],val_sampl:21,val_split:21,val_step:21,valid:[4,5,6,9,15,16,17,21,23,28],validate_fil:9,validation_data:30,validation_split:5,valu:[1,3,4,5,6,8,10,11,13,15,16,17,23,25,26,27,28,29,30],value_for_last_step:10,vari:23,variabl:[1,5,6,15,16,23,24,25,26,27,29,30],varianc:8,variant:28,variat:[8,20],variation_measur:8,variation_metr:8,variou:[25,26,27],vast:20,vector:[5,16],verbos:[6,10,11,21,30],veri:16,verif:[6,9],verifi:[6,9],verify_path:6,version:[6,16,28,30],vertic:17,via:[6,25,26,28],visual:10,viz_util:[0,19],wai:[1,16,28],wait:24,walltim:[23,28],want:[18,23],websit:18,weight:[13,15,21,28],well:[6,9,16,18,20],were:23,wget:28,what:[6,19,23,25,26,27,28,29,30],when:[5,6,8,14,16,17,24,25,26,27,28,30],where:[3,6,11,15,16,28,29],wherev:28,whether:[1,3,8,9,14],which:[1,3,4,5,6,9,15,16,17,20,23,26,28,29,30],whole:28,whose:[5,8,16],width:[10,17],within:[25,26,27,28],without:[15,23,27],wobbli:16,work:[1,20,24,28],worker:25,workflow:[19,22,23,24,25,26,27,30],would:[5,20,30],write:[19,22,28],written:[25,27,28],www:23,x000:23,x_col:5,x_test:[5,30],x_train:[3,5,30],x_val:5,xbin:17,xc40:23,xent:[11,13],xp_test:16,y_col:5,y_one_hot:5,y_pred:[11,13,15,17],y_test:[5,11,30],y_train:[3,5,30],y_true:[11,13,15,17],y_val:5,yerror:[16,17],yes:6,yet:20,yield:16,you:[18,23,25,26,27,28,29,30],your:[18,23,24,25,26,27,28,30],yp_test:16,ypred:[16,17],ypred_hp:17,ypred_hp_mean:16,ypred_lp:17,ypred_lp_mean:16,ypred_std:16,ytest:[15,17],ytrain:15,ytrue:16,yval:15,zero:[1,8,16,24],zoo:20},titles:["CANDLE Library API","P1_utils module","candle_keras package","clr_keras_utils module","data_preprocessing_utils module","data_utils module","default_utils module","exp_logger module","feature_selection_utils module","file_utils module","generic_utils module","keras_utils module","profiling_utils module","pytorch_utils module","solr_keras module","uq_keras_utils module","uq_utils module","viz_utils module","How to Contribute","CANDLE Documentation Home","What is CANDLE?","Example of Parameters","Tutorials","How to run CANDLE compliant code in Theta","&lt;no title&gt;","Run Asynchronous Search based hyperparameter optimization on CANDLE Benchmarks","GA (genetic algorithm) based based hyperparameter optimization on CANDLE Benchmarks","Run mlrMBO based hyperparameter optimization on CANDLE Benchmarks","PBT Workflow","Evaluate an Unrolled Parameter File (UPF)","How to write CANDLE compliant deep learning code"],titleterms:{"class":30,"function":27,"new":18,adapt:28,add:18,addit:30,algorithm:26,api:[0,18],asciidoc:18,asynchron:25,background:20,base:[23,25,26,27,30],benchmark:[20,25,26,27],build:18,call:[25,26,27,29],cancer:20,candl:[0,18,19,20,23,25,26,27,30],candle_kera:2,chang:[25,26,27],check:[25,26,27],clr_keras_util:3,code:[23,30],compliant:[23,30],configur:[26,28],contribut:18,convert:18,data_preprocessing_util:4,data_util:5,deep:[20,30],default_util:6,differ:[27,28],document:[18,19],evalu:29,exampl:21,exp_logg:7,explain:28,feature_selection_util:8,file:[26,28,29],file_util:9,format:18,generic_util:10,genet:26,home:19,how:[18,23,30],hpo:23,html:18,hyperparamet:[23,25,26,27,28],index:29,infer:29,initialize_paramet:30,instal:18,keras_util:11,learn:[20,30],librari:[0,18],local_run_pbt:28,make:[25,26,27],mandatori:30,method:30,minimum:30,mlrmbo:[23,27],model:28,modul:[1,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],object:27,optim:[23,25,26,27,30],output:[25,26,27],p1_util:1,packag:2,paramet:[21,29,30],pbt:28,profiling_util:12,python:28,pytorch_util:13,quick:29,releas:20,requir:[25,26,27,28,29,30],rst:18,run:[23,25,26,27,28,29,30],sbatch_run_pbt:28,search:25,sequenc:[25,26,27,29],solr_kera:14,sphinx:18,start:29,structur:[25,26,27],tc1:28,tc1_pbt:28,theta:23,thread:30,tutori:22,unrol:29,upf:[23,29],uq_keras_util:15,uq_util:16,user:[25,26,27,29],viz_util:17,what:20,where:[25,26,27],workflow:[28,29],write:30}})