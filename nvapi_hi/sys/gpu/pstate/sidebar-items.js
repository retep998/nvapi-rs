initSidebarItems({"constant":[["NVAPI_GPU_PERF_PSTATE20_CLOCK_TYPE_RANGE","Clock domains that allow range of frequency values within given pstate"],["NVAPI_GPU_PERF_PSTATE20_CLOCK_TYPE_SINGLE","Clock domains that use single frequency value within given pstate"],["NVAPI_GPU_PERF_PSTATE_ALL",""],["NVAPI_GPU_PERF_PSTATE_P0",""],["NVAPI_GPU_PERF_PSTATE_P1",""],["NVAPI_GPU_PERF_PSTATE_P10",""],["NVAPI_GPU_PERF_PSTATE_P11",""],["NVAPI_GPU_PERF_PSTATE_P12",""],["NVAPI_GPU_PERF_PSTATE_P13",""],["NVAPI_GPU_PERF_PSTATE_P14",""],["NVAPI_GPU_PERF_PSTATE_P15",""],["NVAPI_GPU_PERF_PSTATE_P2",""],["NVAPI_GPU_PERF_PSTATE_P3",""],["NVAPI_GPU_PERF_PSTATE_P4",""],["NVAPI_GPU_PERF_PSTATE_P5",""],["NVAPI_GPU_PERF_PSTATE_P6",""],["NVAPI_GPU_PERF_PSTATE_P7",""],["NVAPI_GPU_PERF_PSTATE_P8",""],["NVAPI_GPU_PERF_PSTATE_P9",""],["NVAPI_GPU_PERF_PSTATE_UNDEFINED",""],["NVAPI_GPU_PERF_VOLTAGE_INFO_DOMAIN_CORE",""],["NVAPI_GPU_PERF_VOLTAGE_INFO_DOMAIN_UNDEFINED",""],["NVAPI_GPU_UTILIZATION_DOMAIN_BUS",""],["NVAPI_GPU_UTILIZATION_DOMAIN_FB",""],["NVAPI_GPU_UTILIZATION_DOMAIN_GPU",""],["NVAPI_GPU_UTILIZATION_DOMAIN_VID",""],["NVAPI_MAX_GPU_PSTATE20_BASE_VOLTAGES",""],["NVAPI_MAX_GPU_PSTATE20_CLOCKS",""],["NVAPI_MAX_GPU_PSTATE20_PSTATES",""],["NVAPI_MAX_GPU_UTILIZATIONS",""],["NV_GPU_DYNAMIC_PSTATES_INFO_EX_VER",""],["NV_GPU_PERF_PSTATES20_INFO_VER",""],["NV_GPU_PERF_PSTATES20_INFO_VER1",""],["NV_GPU_PERF_PSTATES20_INFO_VER2",""],["NV_GPU_PERF_PSTATES20_INFO_VER3",""]],"enum":[["NV_GPU_PSTATE20_CLOCK_ENTRY_DATA_VALUE",""],["PstateClockType","Used to identify clock type"],["PstateId",""],["UtilizationDomain","Domain index into NV_GPU_DYNAMIC_PSTATES_INFO_EX.utilization."],["VoltageInfoDomain",""]],"fn":[["NvAPI_GPU_GetCurrentPstate","This function retrieves the current performance state (P-State)."],["NvAPI_GPU_GetDynamicPstatesInfoEx","This API retrieves the NV_GPU_DYNAMIC_PSTATES_INFO_EX structure for the specified physical GPU."],["NvAPI_GPU_GetPstates20","This API retrieves all performance states (P-States) 2.0 information."]],"mod":[["private","Undocumented API"]],"struct":[["NV_GPU_DYNAMIC_PSTATES_INFO_EX","Used in NvAPI_GPU_GetDynamicPstatesInfoEx()."],["NV_GPU_DYNAMIC_PSTATES_INFO_EX_UTILIZATION",""],["NV_GPU_PERF_PSTATE20_BASE_VOLTAGE_ENTRY_V1",""],["NV_GPU_PERF_PSTATES20_INFO_V1","Used in NvAPI_GPU_GetPstates20() interface call."],["NV_GPU_PERF_PSTATES20_INFO_V2","Used in NvAPI_GPU_GetPstates20() interface call."],["NV_GPU_PERF_PSTATES20_PARAM_DELTA","Used to describe both voltage and frequency deltas"],["NV_GPU_PERF_PSTATES20_PSTATE","Performance state (P-State) settings"],["NV_GPU_PSTATE20_CLOCK_ENTRY_DATA",""],["NV_GPU_PSTATE20_CLOCK_ENTRY_RANGE",""],["NV_GPU_PSTATE20_CLOCK_ENTRY_SINGLE",""],["NV_GPU_PSTATE20_CLOCK_ENTRY_V1","Used to describe single clock entry"]],"type":[["GPU_GetCurrentPstateFn",""],["GPU_GetDynamicPstatesInfoExFn",""],["GPU_GetPstates20Fn",""],["NV_GPU_PERF_PSTATE20_CLOCK_TYPE_ID","Used to identify clock type"],["NV_GPU_PERF_PSTATES20_INFO",""],["NV_GPU_PERF_PSTATE_ID",""],["NV_GPU_PERF_VOLTAGE_INFO_DOMAIN_ID",""],["NV_GPU_UTILIZATION_DOMAIN_ID","Domain index into NV_GPU_DYNAMIC_PSTATES_INFO_EX.utilization."]]});