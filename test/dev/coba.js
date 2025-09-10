//import Swal from 'sweetalert2';
import * as workerTimers from 'worker-timers';
import * as moment from 'moment';
import tippy from 'tippy.js';
import cnst from './../const.js';

function suntik(){
  var browser = null;
  try{
    browser = require("webextension-polyfill");
  }catch(e){
    browser = chrome;
  }

  var LIMIT_1 = 20;
  var LIMIT_2 = 200;
  var WAIT_1 = 61000;
  var WAIT_2 = 121000;
  var WAIT_3 = 3000000;
  var client_gesture = false;
  var auto_login = false;
  var is_debug = false;
  var is_main = false;
  var url = window.location.href;
  var prev_url = "";
  var line_bots = null;
  var line_me = null;
  var line_id = "";
  var line_data = null;
  var line_csrf = "";
  var line_owners = null;
  var x_client_version = /* @mangle */'X-Oa-Chat-Client-Version'/* @/mangle */;
  var line_client_version = '20230404142351'
  var content_port = null;
  var scraped_contacts = [];
  var temp_obj = null;
  var input=document.createElement('input');
  var windowId = 0;
  var tabId = 0;
  var custom_session = false;
  var progress_data = null;
  var current_progress = -1;
  var current_messages = 0;
  var max_progress = 0;
  var max_messages = 0;
  var last_id = ""; 
  var template_queue = [];
  var process_queue = [];
  var process_paralel = [];
  var resend_queue = [];
  var admin_exclusions = [];
  var callback_queue = [];
  var process_type = "";
  var process_stage = 0;
  var process_running = false;
  var process_count = 0;
  var process_paused = false;
  var process_pausing = false;
  var expired_admin = null;
  var process_idx = -1;
  var broadcast_schedules = [];
  var broadcast_admins = {};
  var unsent_list = [];
  var unsent_messages = {};
  var user_messages = {};
  var message_backwards = {};
  var schedule_active = false;
  var paralel_done = 0;
  var paralel_max = 5;
  var message_max = 500;
  var langs = null;
  var last_unix = 0;
  var start_unix = 0;
  var end_unix = 0;
  var total_speed = 0;
  var rest_point = 1;
  var rest_last = 0;
  var active_data = null;
  var retry_data = null;
  var retry_times = 1;
  var el_title = null;
  var el_desc = null;
  var el_messages = null;
  var el_progress = null;
  var el_delay = null;
  var el_bar = null;
  var el_pause = null;
  var el_resume = null;
  var el_stop = null;
  var el_indicator = null;
  var el_close = null;
  var el_retry = null;
  var el_report_dev = null;
  
  var tag_colors = {};
  var filter_settings = {};
  var admin_sessions = {};
  var all_users = [];
  var ready_users = [];
  var user_ids = [];
  var active_count = 0;
  var inactive_count = 0;
  var ready_timeout = null;
  var current_id = "";
  var failed_message = "";
  //var failed_resumable = false;
  var user_id = 0;
  var user_token = "";
  var user_type = 0;
  var user_ration = 0;
  var user_units = 0;
  var user_rnd = 0;
  var user_conflict = false;
  var delay_min = 0;
  var delay_max = 0;
  var rest_min = 0;
  var rest_max = 0;
  var current_lang = "en";
  var current_improvements = [];
  var is_processing = false;
  var big_error_sent = false;
  var close_interval = null;
  var retry_interval = null;
  var loaded_chats_idx = 0;
  var loaded_chats_data = [];
  var loaded_search_data  = [];
  var loaded_user_tags = {};
  var original_admin = null;
  var observer1 = null;
  var usedRandomIds = [];
  var successSentList = [];
  var failedSentList = [];
  var ids_sent = [];
  var customDelays = {};
  var waitTime = 1000;
  var ms_24 = 86400000;
  var manifest = null;
  var schedule_timeout = null;
  var broadcast_recovery = null;
  var anti_crashing = false;
  var auto_recovery = false;
  var is_smart_response = false;
  var is_business_hours = false;
  var auto_reply = null;
  var watermark = null;
  var replied_users = {};
  var user_infos = {};
  var agent_data = null;
  var admin_sent_1 = {};
  var admin_sent_2 = {};
  var sent_cleared_1 = {};
  var admin_total_sent = {};
  var admin_last = null;
  var temp_message_sent = 0;
  var temp_message_start = 0;
  var clearing_sent = {};
  var clearing_total_sent = {};
  var resting_logins = [];
  var resting_limit = {}
  var chat_mode = null;
  var secondElapsed = 0;
  var countdown_active = false;
  var last_messages = 0;
  var last_per_sec = 0;
  var messages_avg_sec = 0;
  var messages_avg_count = 0
  var tip_cooldown = null;
  var is_fetching_done = false;
  var server_configs = {};
  var remote_config = null;
  var internal_errors = [];
  var notification_users = [];
  var is_idle1day = false;
  //var placed_process = [];s
  //var executed_process = [];
  //var log_process = [];
  
  // document.addEventListener(/* @mangle */"debug"/* @/mangle */, function (e) {
  //   e.detail.forEach(function(s){
  //     console.log(eval(s));
  //   });
  // });

  input.setAttribute("type", "file");
  input.setAttribute("name", "file");

  window.onerror = function(error, url, line) {
    internal_errors.push([error,url,line]);
  };

  function setTimeoutWorker(callback,timeout){
    return workerTimers.setTimeout(callback,timeout);
  }

  function clearTimeoutWorker(id){
    try{
      workerTimers.clearTimeout(id);
    }catch(e){
      console.log(e);
      console.log(e.stack);
    }
  }

  function setIntervalWorker(callback,waitfor){
    return workerTimers.setInterval(callback,waitfor);
  }

  function clearIntervalWorker(id){
    try{
      workerTimers.clearInterval(id);
    }catch(e){
      console.log(e);
      console.log(e.stack);
    }
  } 


  function secondTick(){
    setTimeoutWorker(function(){
      secondElapsed++;
      // if(Date.now()-last_token >= 600000){
      //   last_token = Date.now();
      //   streamToken();
      // }
      if(active_data && process_stage == 1){ //process_running
        var is_divided = current_improvements.includes("divided_broadcast");
        var max_per_minute = 0;
        var admin_indicator = "";
        var admin_count = 0;
        var free_admins = 0;
        for (const [key, value] of Object.entries(broadcast_admins)) {
          var admin_name = key;
          try{
            if(original_admin && original_admin.bizId == key){
              admin_name = original_admin.name;
            }else{
              admin_name = admin_sessions[key].admin.name;
            }
          }catch(e){
            admin_name = key;
          }
          var attrs = '';
          if(key == admin_last){
            attrs = ' class="working" ';
          }

          if(key in resting_limit){
            if(value && ((Date.now()-value) >= WAIT_3)){
              delete resting_limit[key]
              admin_sent_2[key] = 0;
            }
          }else if(resting_logins.includes(key)){
            if(value && ((Date.now()-value) >= WAIT_2)){
              var index = resting_logins.indexOf(key);
              if (index !== -1){
                resting_logins.splice(index, 1);
              }
            }
          }else if(key in admin_sent_1){
            if(value && ((Date.now()-value) >= WAIT_1)){
              if(!(key in sent_cleared_1) || value > sent_cleared_1[key]){
                admin_sent_1[key] = 0;
                sent_cleared_1[key] = value;
              }
            }
          }

          if(key in resting_limit){
            admin_indicator = admin_indicator + "<span"+attrs+"title='"+admin_name+"'>⭕</span>";    
          }else if(resting_logins.includes(key)){
            admin_indicator = admin_indicator + "<span"+attrs+"title='"+admin_name+"'>🟣</span>";    
          }else if(key in admin_sent_1){
            if(admin_sent_1[key] >= LIMIT_1){
              admin_indicator = admin_indicator + "<span"+attrs+"title='"+admin_name+"'>🔴</span>";  
            }else if(admin_sent_1[key] >= (LIMIT_1/2)){
              admin_indicator = admin_indicator + "<span"+attrs+"title='"+admin_name+"'>🟡</span>";
              free_admins++;
            }else{
              admin_indicator = admin_indicator + "<span"+attrs+"title='"+admin_name+"'>🟢</span>";
              free_admins++;
            }
          }else if(current_improvements.includes("divided_broadcast") || (original_admin && original_admin.bizId == key)){
            admin_indicator = admin_indicator + "<span"+attrs+"title='"+admin_name+"'>🟢</span>";
            free_admins++;
          }else{
            admin_indicator = admin_indicator + "<span"+attrs+"title='"+admin_name+"'>⚫</span>";
          }
       
          if(is_divided){
            var sent = 0;
            if(key in admin_sent_1){
              sent = admin_sent_1[key];
            }
            max_per_minute = max_per_minute + (LIMIT_1-sent);
          }else{
            max_per_minute = LIMIT_1;
          }
          admin_count++;
        }

        if(free_admins > 0){
          delayRemove();
          if(process_pausing || process_paused){
            if(el_resume.style.display == "none"){
              el_resume.style.display = "initial";
            }
          }else{
            var l = callback_queue.length;
            for (var i = 0; i < l; i++) {
              (callback_queue.shift())();
            }
          }
        }

        var limit_sec = 0;
        var messages_left = max_messages-current_messages;
        var sent_last_sec = current_messages - last_messages;
        messages_avg_count++;
        messages_avg_sec += sent_last_sec;
        var messages_per_sec = messages_avg_sec/messages_avg_count;
        last_messages = current_messages;
        var messages_per_minute = messages_per_sec*60;
        var unused_quota = max_per_minute - messages_per_minute;
        if(!is_divided){
          limit_sec = 60*(messages_left/LIMIT_1);
        }else{
          Object.entries(resting_limit).forEach(([key, value]) => {
            limit_sec += (WAIT_3-(Date.now()-value))/1000;
          });
        }
        var secs_needed = ((messages_left)/messages_per_sec)+limit_sec;

        var time_indicator = "<span title='"+getTransText("broadcastEstimationTip")+"'>🕑</span>"+fancyTimeFormat(secs_needed);
        if(admin_indicator != ""){
          admin_indicator = "<span title='"+getTransText("broadcastAdminSplitTip")+"'>👥</span>"+admin_indicator+" ";
        }
        if(el_desc) el_desc.innerHTML = admin_indicator+time_indicator;


        if(process_running && process_queue.length <= 0 && ready_users.length > 0 && process_count > 0 && !is_processing){
          executeNextProcess(0);
        }

        if(current_improvements.includes("anti_crash")){
          // if((Date.now() - last_unix) >= (1000*3600) && !anti_crashing){
          //   anti_crashing = true;
          //   waitUntilCondition(function(){
          //     if(process_paralel.length == 0){
          //       el_desc.innerHTML = getTransText("titleAutoRefresh");
          //       el_title.innerHTML = getTransText("descAutoRefresh");
          //       el_pause.style.display = "none";
          //       el_resume.style.display = "none";
          //       el_close.style.display = "none";
          //       el_stop.style.display = "none";
          //       el_retry.style.display = "none";
          //       if(client_gesture) window.onbeforeunload = null;
          //       content_port.postMessage({type:"resumeBroadcastAfterRefresh"});
          //       setTimeoutWorker(function(){
          //         ambilMe(function(result,data){
          //           if(result){
          //             window.location.reload(); 
          //           }else if(data == 401){
          //             loggedOutProcedure(line_me ? line_me.bizId : null,function(){
          //               window.location.reload(); 
          //             },getTransText("broadcastSendingText"));
          //           }else{
          //             window.location.reload();
          //           }
          //         },line_me ? line_me.bizId : null);
          //       },3000);
          //       return true;
          //     }else{
          //       return false;
          //     }
          //   });
          // }
        }
      }

      if(window.location.href.includes("https://chat.line.biz/")){
        if(url.includes("https://chat.line.biz/") && window.location.href != url){
          injectElements();
          var new_id = (window.location.href.split("https://chat.line.biz/")[1]).split("/")[0];
          var old_id = (url.split("https://chat.line.biz/")[1]).split("/")[0];
          if(new_id != old_id && new_id.length >= 30 && old_id.length >= 30){
            prev_url = url;
            fetchAccount();
            ambilSemuaInfo(function(){    
              if(old_id != line_id){
                content_port.postMessage({
                  type:"changeAccount",
                  data:{
                    is_main:is_main,
                    id:old_id,
                    new_account:line_data
                  }
                });
              }
            });
          }
        }
        url = window.location.href;
      }

      if(secondElapsed - temp_message_start >= 65){
        temp_message_sent = 0;
      }

      secondTick();
    },1000);
  }
  secondTick();

  var pauseProcess = function(){
    el_pause.style.display = "none";
    process_pausing = true;
  };

  var stopProcess = function(){
    if(confirm(getTransText("areYouSure"))){
      if(active_data){
        //saveCampaign(active_data.id,{sentList:successSentList,sent:successSentList.length,stopTime:Date.now()},"broadcast_stop");
        var bid = active_data.id;
        updateBroadcastInDatabase(
        {
          ts_stopped:Date.now(),
          failed_list:failedSentList
        },function(){
          reportBroadcast(bid,"broadcast_stop",true);
        });
        content_port.postMessage({type:"stopBroadcast",data:{line_id:line_id}});
      }
      clearBroadcastRecovery(function(){
        if(is_business_hours){
          setResponseHourEnabled(true,function(){ 
            var sets = {};
            sets["business_hours_"+line_id] = false;
            browser.storage.local.set(sets);
            is_business_hours = false;
            if(client_gesture) window.onbeforeunload = null;
            window.location.reload();  
          })
        }else{
          if(client_gesture) window.onbeforeunload = null;
          window.location.reload();  
        }
      });
    }
  };

  var retryProcess = function(){
    failed_message = "";
    process_running = true;
    setIndicator(1);
    if(retry_data.stage == "fetch_users"){
      fetchUsersForBroadcast(retry_data.params.next,retry_data.params.admin,retry_data.params.step);
      turnOnBroadcastButtons(["stop"]);
    }else{
      setupBroadcast(retry_data.broadcast);
    }
    retry_times++;
    if(retry_interval){
      clearIntervalWorker(retry_interval);
      retry_interval = null;
    }
  };

  var closeProcess = function(){
    if(active_data){
      content_port.postMessage({type:"stopBroadcast",data:{line_id:line_id}});
    }
    if(client_gesture) window.onbeforeunload = null;
    window.location.reload();
  };

  var resumeProcess = function(){
    el_resume.style.display = "none";
    process_pausing = false;
    process_stage = 1;
    process_paused = false;
    process_running = true;
    setTimeoutWorker(function(){
      el_pause.style.display = "initial";
      //executeNextProcess(process_idx);
    },3000);
  };

  var reportProcessDev = function(){
    var report = {
      active_data:active_data,
      progress_data:progress_data,
      successSentList:successSentList,
      failedSentList:failedSentList,
      admin_sent_1:admin_sent_1,
      admin_sent_2:admin_sent_2,
      internal_errors:internal_errors
    }
    content_port.postMessage({type:"sendLog",data:{
      type:"error",
      source:"report_dev",
      message:JSON.stringify(report)
    }});
    alert("Your logs has been reported. Please inform the seller / developer.");
  };

  function clearAdminSent(admin,callback = null){
    if(!(admin in clearing_sent)){
      clearing_sent[admin] = false;
    }
    if(clearing_sent[admin] && callback == null){
      return;
    }
    clearing_sent[admin] = true;
    setTimeoutWorker(function(){
      admin_sent_1[admin] = 0;
      clearing_sent[admin] = false;
      //calculateSpeed();
      if (typeof callback === "function") {
        callback();
      }
    },WAIT_1);
  }

  function clearAdminTotalSent(admin,callback = null){
    if(!(admin in clearing_total_sent)){
      clearing_total_sent[admin] = false;
    }
    if(clearing_total_sent[admin]){
      return waitForAdminTotalClearing(admin,callback);
    }
    clearing_total_sent[admin] = true;
    delayRemove();
    setTimeoutWorker(function(){
      delaySetOn120();
    },250);
    setTimeoutWorker(function(){
      admin_total_sent[admin] = 0;
      clearing_total_sent[admin] = false;
      if (typeof callback === "function") {
        callback();
      }
    },WAIT_2);
  }

  function increaseAdminSent(admin,increment = 1){
    if(!(admin in admin_sent_1) || admin_sent_1[admin] == null){
      admin_sent_1[admin] = 0;
    }
    admin_sent_1[admin] += increment;

    if(!(admin in admin_sent_2) || admin_sent_2[admin] == null){
      admin_sent_2[admin] = 0;
    }
    admin_sent_2[admin] += increment;

    if(admin_sent_1[admin] >= LIMIT_1){
      broadcast_admins[admin] = Date.now();
    }

    if(admin_sent_2[admin] >= LIMIT_2 && !(admin in resting_limit)){
      //console.log("reaching limit 2 : "+admin);
      resting_limit[admin] = Date.now();
      broadcast_admins[admin] = Date.now();
      if(getReadyAdmin() == null){
        delayRemove();
        setTimeoutWorker(function(){
          delaySetOn3000();
        },250);
      }
    }
  }

  function saveCampaign(id,params,log = null){
    if(content_port) content_port.postMessage({type:"saveCampaign",data:{id:id,params:params,log:log}});
  }

  function reportBroadcast(bid,log,is_delete = false){
    content_port.postMessage({type:"reportBroadcast",data:{id:bid,log:log,is_delete:is_delete}});
  }

  function setupSchedule(){
    if(broadcast_schedules.length > 0){
      document.querySelector("#laris-schedule").style.display = "initial";
      if(!schedule_active){
        schedule_active = true;
        setTimeoutWorker(function(){
          countdown_active = true;
          setupCountdown(broadcast_schedules[0].schedule,function(){
            stopCountdown();
          });
        },1000);
      }
    }else{
      document.querySelector("#laris-schedule").setAttribute("style","display:none !important");
    }
    document.querySelector("#laris-schedule .count").innerHTML = broadcast_schedules.length;
  }

  function setupCountdown(later,callback,tried=0){
    var countdown = document.querySelector("#laris-schedule .countdown");
    if(!countdown_active || countdown == null){
      countdown.innerHTML = "--:--:--";
      return;
    }
    later = moment(later);
    var now = moment();
    var diff = later.diff(now,'seconds');
    var duration = moment.duration(diff,'seconds');
    countdown.innerHTML = duration.hours().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+duration.minutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+":"+duration.seconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    if(countdown_active){
      if(diff > 0){
        setTimeoutWorker(function(){
          setupCountdown(later,callback,tried+1);
        },1000);    
      }else{
        //document.dispatchEvent(new CustomEvent('onDestroyCloseInterval', {}));
        if(tried == 0){
          countdown.innerHTML = getTransText("prepareStartingSchedule");
          schedule_timeout = setTimeoutWorker(function(){
            countdown_active = false;
            callback();
          },5000);
        }else{
          countdown.innerHTML = "00:00:00";
          countdown_active = false;
          callback();
        }
      }
    }else{
      countdown.innerHTML = "--:--:--";
    }
  }

  function stopCountdown(){
    if(active_data == null){
      if(close_interval){
        //jika ada close countdown maka langsung reload aja
        if(client_gesture) window.onbeforeunload = null;     
        return window.location.reload();
      }
      active_data = "placebo";
      schedule_active = false;
      //document.dispatchEvent(new CustomEvent('onDestroyCloseInterval', {}));
      var next_broadcast = broadcast_schedules[0];
      if(next_broadcast){
        var schedule_name = "bc_"+line_id+"_"+next_broadcast.name;
        browser.storage.local.get(schedule_name).then(function(item){
          broadcast_schedules.shift();
          var obj = {};
          obj["broadcast_schedules_"+line_id] = broadcast_schedules;
          browser.storage.local.set(obj).then(function(item2){
            if(item[schedule_name]){
              setupBroadcast(item[schedule_name]);
              content_port.postMessage({
                type:"setBroadcastStatus",
                data:{
                  line_id:line_id,
                  status:true
                }
              });
              browser.storage.local.remove(schedule_name);
            }else{
              active_data = null;
            }
            setupSchedule();
          });
        });
      }else{
        setupSchedule();
      }
    }else{
      document.querySelector("#laris-schedule .countdown").innerHTML = getTransText("schedulePending");
      setTimeoutWorker(function(){
        stopCountdown();
      },1000);
    }
  }

  function injectGeneralScripts(){
    var style = document.createElement('style');
    style.innerHTML = `
    .toastify {
      padding: 12px 20px;
      color: #ffffff;
      display: inline-block;
      box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.12), 0 10px 36px -4px rgba(77, 96, 232, 0.3);
      background: #01B901;
      position: fixed;
      bottom: -150px;
      right: 15px;
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
      border-radius: 2px;
      cursor: pointer;
      z-index: 999999;
    }

    .toastify.on { opacity: 1; }

    .tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:"";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}
    `;
    (document.head||document.documentElement).appendChild(style);

 /*    var script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js";
    script.onload = function(){
      window.moment_loaded = true;
    };
    (document.head||document.documentElement).appendChild(script);
    script.remove();
    window.moment = moment;
 */
/* 
    script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jscolor/2.4.0/jscolor.min.js";
    script.onload = function(){

    };
    (document.head||document.documentElement).appendChild(script);
    script.remove(); */

    /* script = document.createElement('script');
    script.src = "https://laris.bionicprogram.com/js/sweetalert.js";
    script.onload = function(){
      window.sw_loaded = true;
    };
    (document.head||document.documentElement).appendChild(script);
    script.remove();
 */
    // script = document.createElement('script');
    // script.src = "https://laris.bionicprogram.com/js/popper.min.js";
    // script.onload = function(){
    // };
    // (document.head||document.documentElement).appendChild(script);
    // script.remove();

    // script = document.createElement('script');
    // script.src = "https://laris.bionicprogram.com/js/tippy-bundle.umd.min.js";
    // script.onload = function(){
    //   window.tippy_loaded = true;
    // };
    // (document.head||document.documentElement).appendChild(script);
    // script.remove();

    // script = document.createElement('script');
    // script.type = "text/javascript";
    // script.innerHTML = `!function(t,o){"object"==typeof module&&module.exports?module.exports=o():t.Toastify=o()}(this,function(t){var o=function(t){return new o.lib.init(t)};function i(t,o){return o.offset[t]?isNaN(o.offset[t])?o.offset[t]:o.offset[t]+"px":"0px"}function s(t,o){return!(!t||"string"!=typeof o)&&!!(t.className&&t.className.trim().split(/\s+/gi).indexOf(o)>-1)}return o.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,style:{background:""}},o.lib=o.prototype={toastify:"1.11.0",constructor:o,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||o.defaults.text,this.options.node=t.node||o.defaults.node,this.options.duration=0===t.duration?0:t.duration||o.defaults.duration,this.options.selector=t.selector||o.defaults.selector,this.options.callback=t.callback||o.defaults.callback,this.options.destination=t.destination||o.defaults.destination,this.options.newWindow=t.newWindow||o.defaults.newWindow,this.options.close=t.close||o.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":o.defaults.gravity,this.options.positionLeft=t.positionLeft||o.defaults.positionLeft,this.options.position=t.position||o.defaults.position,this.options.backgroundColor=t.backgroundColor||o.defaults.backgroundColor,this.options.avatar=t.avatar||o.defaults.avatar,this.options.className=t.className||o.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?o.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||o.defaults.onClick,this.options.offset=t.offset||o.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:o.defaults.escapeMarkup,this.options.style=t.style||o.defaults.style,this.options.style.background=o.defaults.backgroundColor||t.backgroundColor,this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property positionLeft will be depreciated in further versions. Please use position instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(const o in this.options.style)t.style[o]=this.options.style[o];if(this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var o=document.createElement("img");o.src=this.options.avatar,o.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(o):t.insertAdjacentElement("afterbegin",o)}if(!0===this.options.close){var s=document.createElement("span");s.innerHTML="&#10006;",s.className="toast-close",s.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var e=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&e>360?t.insertAdjacentElement("afterbegin",s):t.appendChild(s)}if(this.options.stopOnFocus&&this.options.duration>0){var n=this;t.addEventListener("mouseover",function(o){window.clearTimeout(t.timeOutValue)}),t.addEventListener("mouseleave",function(){t.timeOutValue=window.setTimeout(function(){n.removeElement(t)},n.options.duration)})}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var a=i("x",this.options),l=i("y",this.options),r="left"==this.options.position?a:"-"+a,p="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+r+","+p+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var i=o.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,i),o.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),o.reposition()}.bind(this),400)}},o.reposition=function(){for(var t,o={top:15,bottom:15},i={top:15,bottom:15},e={top:15,bottom:15},n=document.getElementsByClassName("toastify"),a=0;a<n.length;a++){t=!0===s(n[a],"toastify-top")?"toastify-top":"toastify-bottom";var l=n[a].offsetHeight;t=t.substr(9,t.length-1);(window.innerWidth>0?window.innerWidth:screen.width)<=360?(n[a].style[t]=e[t]+"px",e[t]+=l+15):!0===s(n[a],"toastify-left")?(n[a].style[t]=o[t]+"px",o[t]+=l+15):(n[a].style[t]=i[t]+"px",i[t]+=l+15)}return this},o.lib.init.prototype=o.lib,o});`;
    // script.onload = function(e){
      
    // };
    // (document.head||document.documentElement).appendChild(script);
    // script.remove();

    document.addEventListener('onReportCookie', function (e) {
      console.log("reportCookie",e.detail);
      content_port.postMessage({type:"reportCookie",data:e.detail});
    });

    var script = document.createElement("script");
    script.src =  browser.runtime.getURL('sweetalert.js'); 
    (document.head || document.documentElement).appendChild(script);
    script.remove();

    var script = document.createElement("script");
    script.src =  browser.runtime.getURL('modules/2e9gtmfyUDht1y3wuNFpzWtzn4nkVmA7j7V0WNN5ewrxT1Is9X.js'); //context_general
    script.type = 'module';
    script.id = "general";
    script.dataset.enableCookie = !custom_session;
    script.onload = () => {
      script.remove();
    };
    (document.head || document.documentElement).appendChild(script);
    /* var code = "("+function(enableCookie){
      var cookieGetter = document.__lookupGetter__("cookie").bind(document);
      //var cookieSetter = document.__lookupSetter__("cookie").bind(document);
      Object.defineProperty(document, 'cookie', {
        get: function() {
          var storedCookieStr = cookieGetter();
          return storedCookieStr;
        },

        set: function(cookieString) {
          
          if(!enableCookie){
            document.dispatchEvent(new CustomEvent('onReportCookie', {detail:cookieString}));
          }
          return enableCookie ? cookieString : "";
        }
      });
    }+")("+(!custom_session)+")";
    var script = document.createElement('script');
    script.textContent = code;
    (document.head||document.documentElement).appendChild(script);
    script.remove();
 */
    //coba coba
    /*var code = "("+function(){
      var _open = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function (method, current_url) {
        console.log(current_url);

        var _onreadystatechange = this.onreadystatechange,
        _this = this; 

        _this.onreadystatechange = function () {
          // catch only completed 'api/search/universal' requests  && ~URL.indexOf('api/search/universal')
          if (_this.readyState === 4) {
            if(_this.status === 200){
              try {
                var data = JSON.parse(_this.responseText); // {"fields": ["a","b"]}
                console.log(data);
                //log('Caught! :)', method, current_url);
                if(current_url.includes('Payment_ValidatePromoCode')){
                  
                }

                
                Object.defineProperty(_this, 'responseText', {value: JSON.stringify(data)});
              /////////////// END //////////////////
              } catch (e) {
                console.log(e);
              }
            }
          }
          // call original callback
          if (_onreadystatechange) _onreadystatechange.apply(this, arguments);
        };

        // detect any onreadystatechange changing
        Object.defineProperty(this, "onreadystatechange", {
          get: function () {
              return _onreadystatechange;
          },
          set: function (value) {
              _onreadystatechange = value;
          }
        });
        //log(arguments);
        return _open.apply(_this, arguments);
      };

      !function(_send){
          XMLHttpRequest.prototype.send = function (data) {
            //log("xhr send");
            //log(this);

            Object.defineProperty(this, 'data', {value: data});
            _send.call(this, data);
          }
      }(XMLHttpRequest.prototype.send);

    }+")()";
    var script = document.createElement('script');
    script.textContent = code;
    (document.head||document.documentElement).appendChild(script);
    script.remove();

    const {fetch: origFetch} = window;
window.fetch = async (...args) => {
  console.log("fetch called with args:", args);
  const response = await origFetch(...args);

  response
    .clone()
    .json()
    .then(data => console.log("intercepted response data:", data))
    .catch(err => console.error(err));

  
  //return response;

  if(args[0].includes('Payment_ValidatePromoCode')){
  
    return new Response(`
      {
  "Status": true,
  "Message": null,
  "RedirectURL": null,
  "ListData": null,
  "Data": {
    "PromotionID": 1,
    "PromotionFee": 100000
  },
  "disabled": false
}
      `);
  }else{
    return response;
  }
};


    */


    document.addEventListener(`click`, e => {
      const origin = e.target.closest("a");
      
      if (custom_session && origin && origin.target == "_blank") {
        e.preventDefault();
        if(client_gesture) window.onbeforeunload = null;
        window.location.href = origin.href;
      }

      client_gesture = true;
      document.dispatchEvent(new CustomEvent('onClientGesture', {detail:client_gesture}));
      if(client_gesture && is_main) window.onbeforeunload = function(e) {
         return 'Are you sure that you want to quit?';
      };
    });
  }

  function injectChatScripts(){
    
    //document.dispatchEvent(new CustomEvent('printLogs', {}));
    document.addEventListener('printLogs',function(e){
      console.log(admin_sent_1);
    });

    document.addEventListener('onSendLog',function(e){
      try{
        content_port.postMessage({type:"sendLog",data:{
          type:e.detail.type,
          source:e.detail.source,
          message:e.detail.message
        }});
      }catch(e){
        
      }
    });

    document.addEventListener('onRecoveryNo',function(e){
      if(is_main){
        clearBroadcastRecovery(function(){
          launchSetupBroadcast();
        });   
      }else{
        launchSetupBroadcast();
      }
    });

    document.addEventListener('onScheduleDelete',function(e){
      var idx = e.detail.idx;
      browser.storage.local.remove("bc_"+line_id+"_"+broadcast_schedules[idx].name).then(function(item){
        if(idx == 0){
          if(schedule_timeout){
            clearTimeoutWorker(schedule_timeout);
            schedule_timeout = null;
          }
          countdown_active = false;
          schedule_active = false;
        }
        broadcast_schedules.splice(idx,1);
        var obj = {};
        obj["broadcast_schedules_"+line_id] = broadcast_schedules;
        browser.storage.local.set(obj).then(function(item){
          setupSchedule();
        });
      });
      
    }); 

    document.addEventListener('onLineBots',function(e){
      line_bots = e.detail;
    });

    document.addEventListener('onCSRF',function(e){
      line_csrf = e.detail;
      if(is_business_hours){
        setResponseHourEnabled(true,function(){
          var sets = {};
          sets["business_hours_"+line_id] = false;
          browser.storage.local.set(sets);
          is_business_hours = false;
        })
      }
    });

    document.addEventListener('onChatReceived', function (e) {
      if(loaded_chats_idx > loaded_chats_data.length){
        var target = document.querySelector("#content-primary .chatlist .list-group > .list-group-item:nth-child("+(loaded_chats_data.length)+")");
        if(target && target.querySelector(":scope > a") && e.detail){
          processChatItem(e.detail,target.querySelector(":scope > a"));
        }
      }
      loaded_chats_data.push(e.detail);
    });

    document.addEventListener('onSearchReceived', function (e) {
      loaded_search_data.push(e.detail);
    });

    document.addEventListener('onChatReset', function (e) {
      loaded_chats_idx = 0;
      loaded_chats_data = [];
    });

    document.addEventListener('onSearchReset', function (e) {
      loaded_chats_idx = 0;
      loaded_search_data = [];
    });

    document.addEventListener('onAssignTag', function (e) {
      if(e.detail.tag_id in loaded_user_tags){
        var data = loaded_user_tags[e.detail.tag_id];
        var style = "";
        var options = data.name in tag_colors ? tag_colors[data.name] : null;
        if(!current_improvements.includes("tag_color")){
          options = null;
        }
        if(options){
          style = "background-color:"+options.color+";color:"+(options.light ? "black" : "white");
        }
        var node = document.querySelector("#chat-"+e.detail.chat_id+" > div:nth-child(2) > div:nth-child(3)");
        if(node){
          var html = `
              <a style="`+style+`" href="#" class="badge-sm tag tag-link" id="tag-`+e.detail.chat_id+`-`+e.detail.tag_id+`">`+data.name+`</a>
          `;
          var el = createElement(html);
          node.appendChild(el);
        }

        var checkTry = 0;
        var checkInterval = setIntervalWorker(function(){
          var tag = document.evaluate("//*[@id='content-thirdly']//a[text()='"+data.name+"']", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if(tag){
            clearIntervalWorker(checkInterval);
            tag.style = style;
          }
          checkTry++;
          if(checkTry >= 50){
            clearIntervalWorker(checkInterval);
          }
        },100);

      }
    });

    document.addEventListener('onAddTag', function (e) {
      loaded_user_tags[e.detail.tagId] = e.detail;
    });

    document.addEventListener('onEditTag', function (e) {
      var detail = e.detail;
      var old_tag = loaded_user_tags[detail.tagId];
      if(old_tag && detail.name != old_tag.name && old_tag.name in tag_colors){
        var old_color = tag_colors[old_tag.name];
        delete tag_colors[old_tag.name];
        tag_colors[detail.name] = old_color;
        var obj = {};
        obj["tag_colors_"+line_id] = tag_colors;
        browser.storage.local.set(obj);
      }
    });

    document.addEventListener('onDeleteTag', function (e) {
      if(e.detail.tag_id in loaded_user_tags){
        var tag = loaded_user_tags[e.detail.tag_id];
        if(tag.name in tag_colors){
          delete tag_colors[tag.name];
          simpanData();
        }
      }
    });

    document.addEventListener('onInjectExcludeSearch',function(e){
      injectExcludeSearch(e.detail);
    });

    document.addEventListener('onTagChange',function(e){
      var data = e.detail;
      var tags = document.querySelectorAll("#content-primary .kv-tag.tag");
      for(var key in data){
        var tag = loaded_user_tags[key];
        if(tag){
          tags.forEach(function(t){
            if(t.innerText == tag.name){
              if(data[key].except){
                t.style.textDecoration = "line-through";
              }else{
                t.style.textDecoration = "none";
              }
              return false;
            }
          });
        }
      }
      
    });

    document.addEventListener("onInjectElements",function(e){
      injectElements();
    });

    document.addEventListener('onDestroyCloseInterval',function(e){
      if(close_interval != null){
        clearIntervalWorker(close_interval);
        close_interval = null;
      }
    });

    document.addEventListener('onMainUpdateTags', function (e) {
      loaded_user_tags = e.detail;
    });

    document.addEventListener('onTagColorSet',function(e){
      tag_colors[e.detail.key] = {color:e.detail.value,light:e.detail.light};
      simpanData();
    });

    document.addEventListener('onSendContentPort',function(e){
      content_port.postMessage(e.detail);
    });

    document.addEventListener('onMe',function(e){
      line_me = e.detail;
      if(content_port){
        content_port.postMessage({type:"reportMe",data:line_me});
      }
    });

    document.addEventListener('onOwners',function(e){
      if(e.detail){
        line_owners = {};
        e.detail.forEach(function(own){
          line_owners[own.bizId] = own;
        });
      }
    });

    document.addEventListener('onRestartApplication',function(e){
      try{
        if(confirm(getTransText("warningRestartExtension"))){
          if(client_gesture) window.onbeforeunload = null;
          content_port.postMessage({type:"restartExtension"});
        }
      }catch(e){
        if(client_gesture) window.onbeforeunload = null;
        window.location.reload();
      } 
    });


    document.addEventListener('onSendFilterSettings', function (e) {
      document.dispatchEvent(new CustomEvent('onReceiveFilterSettings', {detail:filter_settings}));
    });

    document.addEventListener("onNewIncomingChat", function(e){
      if(current_improvements.includes("read_incoming")){
        try{
          var xobj = new XMLHttpRequest();
          xobj.open('PUT', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+e.detail.chatId+'/markAsRead', true);
          xobj.setRequestHeader('accept', 'application/json, text/plain, */*');
          xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
          xobj.setRequestHeader(x_client_version,line_client_version);
          xobj.setRequestHeader('x-xsrf-token', line_csrf);
          xobj.withCredentials = true;
          xobj.onreadystatechange = function () {
            if (xobj.readyState == 4) {
              if(xobj.status == "200"){
              }else{
                document.dispatchEvent(new CustomEvent('onSendLog', {detail:{
                  type:"error",
                  source:"auto_read",
                  message:xobj.status+"|"+xobj.responseText
                }}));
              }
            }
          };
          xobj.send('{"messageId":"'+e.detail.payload.message.id+'"}');  
        }catch(err){
          document.dispatchEvent(new CustomEvent('onSendLog', {detail:{
            type:"error",
            source:"auto_read",
            message:err.toString()+"|"+JSON.stringify(e.detail)
          }}));
        }
      }
      if(auto_reply){
        startAutoReply(e.detail);
      }
    });

    var script = document.createElement("script");
    script.src =  browser.runtime.getURL('modules/F65d7BHOQmrR7JsUHw9PC12dpze41n9rsGnRrGKCqu5PyCNqN3.js'); //context_oa
    script.type = 'module';
    script.dataset.mainUrl = cnst[/* @/mangle */"OA_MAIN_URL"/* @/mangle */];
    script.id = "oa";
    (document.head || document.documentElement).appendChild(script);

    document.addEventListener('onRecoveryYes',function(e){
      if(content_port){
        content_port.postMessage({type:"recoverBroadcastOnMain",data:{line_id:line_id,main:is_main}});
        if(!is_main){
          if(client_gesture) window.onbeforeunload = null;
          setTimeoutWorker(function(){
            window.location.reload();
          },500);
        }
      }else{
        if(client_gesture) window.onbeforeunload = null;
        setTimeoutWorker(function(){
          window.location.reload();
        },500);
      }
    });

    // var code = "("+function(main_url){
    //   // console.log('override');
    //   // var _setItem = Storage.prototype.setItem;

    //   // Storage.prototype.setItem = function(key, value) { 
    //   //   console.trace()
    //   //   console.log(arguments);
    //   //   _setItem.apply(this, arguments);
    //   // }

    //   var is_debug = false;
    //   var context_tags = {};
    //   var usable_array = [];
    //   var usable_object = {};
    //   var usable_mode = "";
    //   var usable_bool = false;
    //   var usable_int = 0;
    //   var processed_data = 0;
    //   var filtered_data = 0;
    //   var filter_settings = {};
    //   var langs = null;
    //   var inner_line_bots = [];
    //   var inner_line_id = "";
    //   var inner_line_csrf = "";
    //   var inner_line_me = null;
    //   var inner_current_improvements = [];
    //   var inner_manifest = null;
    //   var pending_chats = {};
    //   var queue_chats = {};
    //   var last_token = Date.now();
    //   var connection_id = null;
    //   var inner_client_gesture = false;
    //   var block_new_chat = false;
    //   var scroll_timeout = null;

    //   document.addEventListener('onBlockNewChat',function(e){
    //     block_new_chat = e.detail;
    //   });

    //   document.addEventListener('onSetupBroadcastModal',function(e){
    //     Swal.fire({
    //       heightAuto: false,
    //       html: e.detail,
    //       showConfirmButton: false,
    //       allowOutsideClick: false,
    //       backdrop:false,
    //     });
    //     block_new_chat = true;
    //   });

    //   // setTimeout(function(){
    //   //   const old = window.onerror;
    //   //   window.onerror = function(message, source, lineno, colno, error) {
    //   //     if (error) message = error.stack;
    //   //     document.dispatchEvent(new CustomEvent('onSendLog', {detail:{
    //   //       type:"error",
    //   //       source:"inner_script",
    //   //       message:JSON.stringify(message)+"|"+JSON.stringify(source)+"|"+lineno+"|"+colno
    //   //     }}));
    //   //     old.apply(this, arguments);
    //   //     return false;
    //   //   };
    //   // },5000);
      
      
    //   function setTimeout3(callback,timeout){
    //     var t = setTimeout(function(){
    //       callback();
    //       clearTimeout(t);
    //     },timeout);
    //   }

    //   document.addEventListener('onLineData',function(e){
    //     inner_line_id = e.detail.line_id;
    //   });

    //   document.addEventListener('onManifest',function(e){
    //     inner_manifest = e.detail;
    //   });

    //   document.addEventListener('onClientGesture',function(e){
    //     inner_client_gesture = e.detail;
    //   });



    //   document.addEventListener('onImprovements',function(e){
    //     inner_current_improvements = e.detail;
    //   });

    //   document.addEventListener('onScheduleInfo',function(e){
    //   var selected = e.detail.data;
    //     if(selected){
    //       var html = "";
    //       selected.messages.forEach(function(msg){
    //         if(msg.type == "text"){
    //           html += "<li>"+msg.content+"</li>";
    //         }else if(msg.type == "sticker"){
    //           html += "<li><img src='https://stickershop.line-scdn.net/stickershop/v1/sticker/"+msg.value.stickerId+"/PC/sticker.png' style='height:100px'></li>";
    //         }else if(msg.type == "coupon"){
    //           html += "<li>"+msg.content+"</li>";
    //         }else if(msg.type == "card"){
    //           html += "<li>"+msg.content+"</li>";
    //         }else if(msg.type == "file"){
    //           msg.contents.forEach(function(content){
    //             if(content.type.includes("image/")){
    //               html += "<li style='margin-bottom:20px'><img src="+content.data+" style='max-width:500px;width:100%'></li>";
    //             }else if(content.type.includes("video/")){
    //               html += `<li style='margin-bottom:20px'><video width="320" height="240" controls>
    //                 <source src="`+content.data+`" type="`+content.type+`">
    //                 Your browser does not support the video tag.
    //               </video></li>`;
    //             }else{
    //               html += "<li>"+content.name+"</li>";
    //             }
    //           });
    //         }
    //       });
    //       Swal.fire({
    //         allowOutsideClick: true,
    //         width: 600,
    //         title: getTransText("titleBroadcastMessages"),
    //         html: `
    //           <p><b>`+selected.schedule_text+`</b></p>
    //           <ol style="text-align:left">
    //               `+html+`
    //           </ol>
    //         `,
    //         showDenyButton: true,
    //         showCancelButton: false,
    //         confirmButtonText: getTransText("buttonOk"),
    //         denyButtonText: getTransText("buttonDelete")
    //       }).then((result) => {
    //         //log(result);
    //         /* Read more about isConfirmed, isDenied below */
    //         if (result.isConfirmed) {
    //         } else if (result.isDenied) {
    //           if(confirm(getTransText("areYouSure"))){
    //             document.dispatchEvent(new CustomEvent('onScheduleDelete', {
    //               detail:{
    //                 idx:e.detail.idx,
    //               }
    //             }));
    //           }
    //         } else if (result.isDismissed && result.dismiss == "cancel") {
    //         }
    //       });
    //     }else{
    //       alert("Broadcast data is not existed.");
    //     }
    //   });   
 
    //   document.addEventListener('onLicenseExpired',function(){
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       title: getTransText('titleRemoved'),
    //       width: 600,
    //       html: "<div style='text-align:justify'>"+getTransText('warningRemoved')+"</div>",
    //       confirmButtonText: getTransText('buttonOk'),
    //     }).then((result) => {
    //       if(inner_client_gesture) window.onbeforeunload = null;
    //       window.location.reload(); 
    //     });
    //   });

    //   document.addEventListener('onAdminDuplicated',function(e){
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       title: getTransText("titleDuplicateAdmin"),
    //       width: 600,
    //       html: getTransText("warningDuplicatedLogin").replace("[NAME]","<b>"+e.detail.name+"</b>"),
    //       confirmButtonText: getTransText('buttonOk'),
    //     }).then((result) => {
    //       if(inner_client_gesture) window.onbeforeunload = null;
    //       window.location.href = "https://account.line.biz/login?redirectUri=https%3A%2F%2Fchat.line.biz%2F";
    //     });
    //   });

    //   document.addEventListener('onVipOnly',function(e){
    //     Swal.fire({
    //       icon: 'warning',
    //       title: getTransText("warningVipOnly1"),
    //       confirmButtonText: getTransText('buttonOk'),
    //       showDenyButton: true,
    //       denyButtonText: getTransText('premiumBuyNow'),
    //       preDeny: () => {
    //         if(inner_manifest && !("author" in inner_manifest)) window.open("https://bionicprogram.com/m/signup/laris", '_blank');
    //         return false;
    //       }
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //       } else if (result.isDenied) {
    //       } else if (result.isDismissed && result.dismiss == "cancel") {
    //         document.dispatchEvent(new CustomEvent('onSendContentPort', {detail:{type:"requestCancelLogin"}}));
    //       }
    //     });
    //   });

    //   document.addEventListener('onAccountConfig',function(e){
    //     var data = e.detail;
    //     var html = `
    //     <style>
    //       #laris-config{
    //         grid-template-areas:
    //           'label1 item1'
    //           'label2 item2';
    //         grid-gap: 10px;
    //         display:grid;
    //       }

    //       #laris-config .label{
    //         font-weight:bold;
    //       }

    //     </style>
    //     <div id="laris-config">
    //       <div class="label d-flex align-items-center" style="grid-area:label1">
    //         <span class="title">`+getTransText("labelDelayDuration")+`</span>
    //       </div>
    //       <div class="d-flex align-items-center" style="grid-area:item1">
    //         <span class="mr-2">`+getTransText("labelMin")+`</span>
    //         <input type="number" id="delay-min" class="form-control" value="`+data.delay_min+`">
    //         <span class="ml-2 mr-2">`+getTransText("labelMax")+`</span>
    //         <input type="number" id="delay-max" class="form-control" value="`+data.delay_max+`">
    //       </div>
    //       <div class="label d-flex align-items-center" style="grid-area:label2">
    //         <span class="title">`+getTransText("labelDelayContact")+`</span>
    //       </div>
    //       <div class="d-flex align-items-center" style="grid-area:item2">
    //         <span class="mr-2">`+getTransText("labelMin")+`</span>
    //         <input type="number" id="rest-min" class="form-control" value="`+data.rest_min+`">
    //         <span class="ml-2 mr-2">`+getTransText("labelMax")+`</span>
    //         <input type="number" id="rest-max" class="form-control" value="`+data.rest_max+`">
    //       </div>
    //     </div>
    //     `;

        

    //     Swal.fire({
    //       allowOutsideClick: true,
    //       width: 600,
    //       title: getTransText('configTitle'),
    //       html: html,
    //       showCancelButton: true,
    //       showDenyButton: false,
    //       confirmButtonText: getTransText('buttonApply'),
    //       cancelButtonText : getTransText('buttonClose'),
    //       didOpen: function(e){

    //         document.querySelector("#laris-config #delay-min").addEventListener("input",function(e){
    //           var val = this.value;
    //           if(val == ""){
    //             val = "0";
    //           }
    //           data.delay_min = Math.abs(val);
    //           if(parseFloat(val) > data.delay_max) data.delay_max = data.delay_min;
    //           this.value = data.delay_min;
    //           document.querySelector("#laris-config #delay-max").value = data.delay_max;
    //         });
    //         document.querySelector("#laris-config #delay-max").addEventListener("input",function(e){
    //           var val = this.value;
    //           if(val == ""){
    //             val = "0";
    //             this.value = val;
    //           }
    //           data.delay_max = Math.abs(val);
    //           if(parseFloat(val) < data.delay_min) data.delay_min = data.delay_max;
    //           this.value = data.delay_max;
    //           document.querySelector("#laris-config #delay-min").value = data.delay_min;
    //         });
    //         document.querySelector("#laris-config #rest-min").addEventListener("input",function(e){
    //           var val = this.value;
    //           if(val == ""){
    //             val = "0";
    //           }
    //           data.rest_min = Math.abs(val);
    //           if(parseFloat(val) > data.rest_max) data.rest_max = data.rest_min;
    //           this.value = data.rest_min;
    //           document.querySelector("#laris-config #rest-max").value = data.rest_max;
    //         });
    //         document.querySelector("#laris-config #rest-max").addEventListener("input",function(e){
    //           var val = this.value;
    //           if(val == ""){
    //             val = "0";
    //             this.value = val;
    //           }
    //           data.rest_max = Math.abs(val);
    //           if(parseFloat(val) < data.rest_min) data.rest_min = data.rest_max;
    //           this.value = data.rest_max;
    //           document.querySelector("#laris-config #rest-min").value = data.rest_min;
    //         });

    //       }
    //     }).then((result) => {
    //       //log(result);
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         document.dispatchEvent(new CustomEvent('onApplyAccountConfig', {detail:data}));
    //       } else if (result.isDismissed && result.dismiss == "cancel") {
            
    //       }
    //     });
    //   });

    //   document.addEventListener('onShowHelp',function(e){

    //     var data = e.detail;
    //     var html = `
    //     <style>
    //       #help-content{
    //         text-align:left;
    //       }
    //     </style>
    //     <div id="help-content">
    //       `+getTransText('contentHelp')+`
    //     </div>
    //     `;

        

    //     Swal.fire({
    //       allowOutsideClick: true,
    //       width: 600,
    //       title: getTransText('buttonHelp'),
    //       html: html,
    //       showCancelButton: true,
    //       showDenyButton: true,
    //       confirmButtonText: getTransText('buttonDocumentation'),
    //       denyButtonText: getTransText("buttonRestartExtension"),
    //       cancelButtonText : getTransText('buttonClose')
    //     }).then((result) => {
    //       //log(result);
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         window.open('https://laris.bionicprogram.com/redirect/docs/'+data.lang, '_blank').focus();
    //       } else if (result.isDenied) {
    //         document.dispatchEvent(new CustomEvent('onRestartApplication', {detail:null}));
    //       } else if (result.isDismissed && result.dismiss == "cancel") {
            
    //       }
    //     });
    //   });

    //   document.addEventListener('onCloseSwal',function(e){
    //     swal.close();
    //   });


    //   document.addEventListener('onStartAutoLogin',function(e){
    //     var html = '<iframe crossorigin="anonymous" style="width:100%;height:80vh" id="laris-auto-login" name="laris-auto-login" src="https://chat.line.biz"></iframe>';
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       width: '90vw',
    //       title: getTransText("warningAccountExpired"),
    //       html: html,
    //       showConfirmButton: false,
    //       confirmButtonText: getTransText('buttonClose'),
    //       showCloseButton: true
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         //document.dispatchEvent(new CustomEvent('onCloseAutoLogin', {detail:null}));
    //       }
    //     });
    //   });

    //   document.addEventListener('onBroadcastRecovery',function(e){
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       width: 600,
    //       title: getTransText('resumeBroadcastTitle'),
    //       html: getTransText('resumeBroadcastBody'),
    //       showCancelButton: true,
    //       showDenyButton: true,
    //       confirmButtonText: getTransText('buttonResumeBroadcast'),
    //       denyButtonText: getTransText('buttonNewBroadcast'),
    //       cancelButtonText : getTransText('buttonClose')
    //     }).then((result) => {
    //       //log(result);
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         document.dispatchEvent(new CustomEvent('onRecoveryYes'));
    //       } else if (result.isDenied) {
    //         document.dispatchEvent(new CustomEvent('onRecoveryNo'));
    //       } else if (result.isDismissed && result.dismiss == "cancel") {
            
    //       }
    //     });
    //   });

    //   document.addEventListener('onLicenseConflict',function(){
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       width: 600,
    //       title: getTransText('multipleLoginTitle'),
    //       html: getTransText('multipleLoginWarning'),
    //       showDenyButton: true,
    //       showCancelButton: true,
    //       confirmButtonColor: '#0D9F2F',
    //       denyButtonColor: '#2693EC',
    //       cancelButtonColor: '#DE2B10',
    //       confirmButtonText: getTransText('buttonYesThisMe'),
    //       denyButtonText: getTransText('buttonBuyAnother'),
    //       cancelButtonText : getTransText('buttonCancel'),
    //       preDeny: () => {
    //         if(inner_manifest && !("author" in inner_manifest)) window.open("https://bionicprogram.com/m/signup/laris", '_blank');
    //         return false;
    //       }
    //     }).then((result) => {
    //       //log(result);
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         document.dispatchEvent(new CustomEvent('onSendContentPort', {detail:{type:"requestClaimLogin"}}));
    //       } else if (result.isDenied) {
    //       } else if (result.isDismissed && result.dismiss == "cancel") {
    //         document.dispatchEvent(new CustomEvent('onSendContentPort', {detail:{type:"requestCancelLogin"}}));
    //       }
    //     });
    //   });

    //   document.addEventListener('onCheckDateSettings',function(e){
    //     var classList = e.detail;
    //     var settings = document.querySelector("#laris-filter");
    //     var inputdate1 = settings.querySelector(".input-date-1");
    //     var inputtime1 = settings.querySelector(".input-time-1");
    //     var inputdate2 = settings.querySelector(".input-date-2");
    //     var inputtime2 = settings.querySelector(".input-time-2");
    //     var date1 = moment(inputdate1.value+" "+inputtime1.value);
    //     var date2 = moment(inputdate2.value+" "+inputtime2.value);
    //     if(classList.includes("input-date-1") || classList.includes("input-time-1")){
    //       if(date1 > date2){
    //         inputdate2.value = date1.format("YYYY-MM-DD");
    //         if(inputtime1.value != ""){
    //           inputtime2.value = date1.format("HH:mm");
    //         }
    //       }
    //     }else if(classList.includes("input-date-2") || classList.includes("input-time-2")){
    //       if(date1 > date2){
    //         inputdate1.value = date2.format("YYYY-MM-DD");
    //         if(inputtime2.value != ""){
    //           inputtime1.value = date2.format("HH:mm");
    //         }
    //       }
    //     }
    //   });

      

    //   document.addEventListener('onContextUpdateTag', function (e) {
    //     context_tags = e.detail;
    //   });

    //   document.addEventListener('onShowToast',function(e){
    //     var myToast = Toastify(e.detail);
    //     myToast.showToast();
    //   });

    //   document.addEventListener('onReceiveFilterSettings', function (e) {
    //     filter_settings = e.detail;
    //   });

    //   document.addEventListener('onReceiveLangs', function (e) {
    //     langs = e.detail;
    //   });

    //   document.addEventListener('onInitJSColor', function(e){
    //     jscolor.presets.default = {
    //       format:'hex', required:false, closeButton:true, closeText:"OK",
    //       onChange:function(){
    //         var key = this.previewElement.parentElement.parentElement.firstChild.innerText.trim();
    //         document.dispatchEvent(new CustomEvent('onTagColorSet', {detail:{key:key,value:this.toHEXString(),light:this.isLight()}}));
    //       }
    //     };
    //     jscolor.install();
    //     jscolor.init();
    //   });

    //   document.addEventListener('onSwalBasic',function(e){
    //     Swal.fire(
    //       e.detail.title,
    //       e.detail.content,
    //       e.detail.icon
    //     )
    //   });

    //   document.addEventListener('onImportSessionConfirmation',function(e){
    //     var new_admins = e.detail.new_admins;
    //     Swal.fire({
    //       title: getTransText("areYouSure"),
    //       text: getTransText("confirmImportAdmin").replace('{COUNT}',Object.keys(new_admins).length),
    //       icon: 'warning',
    //       showCancelButton: true,
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         document.dispatchEvent(new CustomEvent('onSendContentPort', {detail:{type:"importSessions",data:new_admins}}));
    //       }
    //     });
    //   });

      
    //   var reTrim = /^(\s|\u00A0)+|(\s|\u00A0)+$/g;

    //   function streamState(){
    //     var xobj = new XMLHttpRequest();
    //     xobj.open('PUT', "https://chat.line.biz/api/v1/bots/"+inner_line_id+"/streaming/state");
    //     xobj.withCredentials = true;
    //     xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    //     xobj.setRequestHeader('x-xsrf-token', inner_line_csrf);
    //     xobj.onreadystatechange = function () {
    //       if (xobj.readyState == 4) {
    //         if(xobj.status == 200){
    //         }else{
    //           connection_id = null;
    //         }
    //       }
    //     };
    //     xobj.send('{"connectionId":"'+connection_id+'","idle":false}');
    //   }

    //   function streamToken(){
    //     if(connection_id != null){
    //       return streamState();
    //     }
    //     var xobj = new XMLHttpRequest();
    //     xobj.open('POST', "https://chat.line.biz/api/v1/bots/"+inner_line_id+"/streamingApiToken");
    //     xobj.withCredentials = true;
    //     xobj.setRequestHeader('x-xsrf-token', inner_line_csrf);
    //     xobj.onreadystatechange = function () {
    //       if (xobj.readyState == 4) {
    //         if(xobj.status == 200){
    //           var data = JSON.parse(xobj.responseText);
    //           var lastEventId = null;
    //           var cache = '';
    //           xobj = new XMLHttpRequest();
    //           xobj.open('GET', "https://chat-streaming-api.line.biz/api/v1/sse?token="+data.streamingApiToken+"&deviceToken=&deviceType=&clientType=PC&pingSecs=46&lastEventId="+data.lastEventId);
    //           xobj.withCredentials = false;
    //           xobj.onreadystatechange = function () {
    //             if (this.readyState == 3 || (this.readyState == 4 && this.status == 200)) {
    //               var responseText = '';
    //               try {
    //                 responseText = this.responseText || '';
    //               } catch (e) {}
                
    //               // process this.responseText
    //               var parts = responseText.substr(cache.length).split("\n"),
    //                   eventType = 'message',
    //                   data = [],
    //                   i = 0,
    //                   line = '';
    //                   cache = responseText;
        
    //               // TODO handle 'event' (for buffer name), retry
    //               for (; i < parts.length; i++) {
    //                 line = parts[i].replace(reTrim, '');
    //                 if (line.indexOf('event') == 0) {
    //                   eventType = line.replace(/event:?\s*/, '');
    //                 } else if (line.indexOf('retry') == 0) {                           
    //                   var retry = parseInt(line.replace(/retry:?\s*/, ''));
    //                   if(!isNaN(retry)) { interval = retry; }
    //                 } else if (line.indexOf('data') == 0) {
    //                   data.push(line.replace(/data:?\s*/, ''));
    //                 } else if (line.indexOf('id:') == 0) {
    //                   lastEventId = line.replace(/id:?\s*/, '');
    //                 } else if (line.indexOf('id') == 0) { // this resets the id
    //                   lastEventId = null;
    //                 } else if (line == '') {
    //                   if (data.length) {
    //                     data.forEach(function(row){
    //                       var obj = null;
    //                       try{
    //                         obj = JSON.parse(row);
    //                       }catch(e){
    //                       }
    //                       if(obj){
    //                         if(connection_id == null){
    //                           connection_id = obj.connectionId;
    //                           streamState();
    //                         }
    //                       }
    //                     });
    //                   }
    //                 }
    //               }
    //             }
    //           };

    //           xobj.send();
    //         }
    //       }
    //     };
    //     xobj.send();
    //   }


    //   function log(obj){
    //     if(is_debug) console.log(obj);
    //   }

    //   function innerwaitUntilElement(selector,callback,interval=250, timeout = 240,tried = 0){
    //     setTimeout3(function(){
    //       var el = document.querySelector(selector);
    //       if(el){
    //         callback(el);
    //       }else{
    //         if(tried < timeout){
    //           innerwaitUntilElement(selector,callback,interval,timeout,tried++);
    //         }
    //       }
    //     },interval);
    //   }

    //   function getTransText(name){
    //     if(langs == null){
    //       return name;
    //     }else{
    //       var str = name in langs  ? langs[name]['message'] : name;
    //       if(!inner_manifest || !("author" in inner_manifest)){
    //         if(name == "broadcastLimitationText"){
    //           str = str + " <a href='https://bionicprogram.com/m/content/p/id/12/' target='_blank'>(?)</a>";
    //         }
    //       }
    //       return str;
    //     }
    //   }

    //   function innerCreateElement(str) {
    //     var frag = document.createDocumentFragment();

    //     var elem = document.createElement('div');
    //     elem.innerHTML = str;

    //     while (elem.childNodes[0]) {
    //       frag.appendChild(elem.childNodes[0]);
    //     }
    //     return frag;
    //   }


    //   function resetUsable(){
    //     usable_array = [];
    //     usable_object = {};
    //     usable_mode = "";
    //     usable_bool = false;
    //     usable_int = 0;
    //   }

    //   function resendManualText(request,callback){
    //     var xobj = new XMLHttpRequest();
    //     xobj.open('POST', request.url);
    //     xobj.withCredentials = true;
    //     xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    //     xobj.setRequestHeader('x-xsrf-token', inner_line_csrf);
    //     var sendTimeout = setTimeout3(function(){
    //       //printLog("Text resend failed.");
    //       xobj.abort();
    //       callback();
    //     },60000);
    //     xobj.onreadystatechange = function () {
    //       if (xobj.readyState == 4) {
    //         clearTimeout(sendTimeout);
    //         sendTimeout = null;
    //         if(xobj.status == 200){
    //           log(xobj.status);
    //           //printLog("Text resend success");
    //           callback();
    //         }else{
    //           if(xobj.status == 429){
    //             //printLog("Text resend failed. Retrying ("+trycount+")...");
    //             setTimeout3(function(){
    //               resendManualText(request,callback);
    //             },(5000));
    //           }else{
    //             log(xobj.status);
    //             //printLog("Text resend failed : "+xobj.responseText);
    //             callback();
    //           }
    //         }
    //       }
    //     };
    //     Object.defineProperty(xobj, 'l', {value: true});
    //     xobj.send(request.data); 
    //   }

    //   function executeManualQueue(key){
    //     var queue = queue_chats[key];
    //     if(queue.run) return;
    //     queue_chats[key].run = true;
    //     if(queue.list.length > 0){
    //       log("processing : "+key);
    //       var data = queue.list[0];
    //       queue_chats[key].list.shift();
    //       if(data.type == "manualText"){
    //         resendManualText(data,function(){
    //           queue_chats[key].run = false;
    //           executeManualQueue(key);
    //         });
    //       }else if(data.type == "manualFile"){
    //         resendManualFile(data,function(){
    //           queue_chats[key].run = false;
    //           executeManualQueue(key);
    //         }); 
    //       }
    //     }else{
    //       delete queue_chats[key];
    //       log("queue_chats");
    //       log(queue_chats);
    //     }
    //   }
      
    //   function resendManualFile(request,callback){
    //     log(request);
    //     var xobj = new XMLHttpRequest();
    //     xobj.open('POST', request.url, true);
    //     xobj.withCredentials = true;
    //     xobj.setRequestHeader('x-xsrf-token', inner_line_csrf);
    //     xobj.setRequestHeader('accept', "application/json, text/plain, */*");
    //     var sendTimeout = setTimeout3(function(){
    //       //printLog("File resend failed");
    //       xobj.abort();
    //       callback();
    //     },60000);
    //     xobj.onreadystatechange = function () {
    //       if (xobj.readyState == 4) { 
    //         clearTimeout(sendTimeout);
    //         sendTimeout = null;
    //         if(xobj.status == 200){
    //           //el_title.innerHTML = getTransText("broadcastSendingText");
    //           //printLog("File resend success");
    //           log(xobj.status);
    //           callback();
    //         }else{
    //           if(xobj.status == 429){
    //             //el_title.innerHTML = getTransText("broadcastLimitationText");
    //             //printLog("File resend failed. Retrying ("+trycount+")...");
    //             setTimeout3(function(){
    //               resendManualFile(request,callback);
    //             },(5000));
    //           }else{
    //             log(xobj.status);
    //             //printLog("File resend failed : "+xobj.responseText);
    //             callback();
    //           }
    //         }
    //       }
    //     };
    //     Object.defineProperty(xobj, 'l', {value: true});
    //     xobj.send(request.data);  
    //   }
      

    //   function matchURL(url,pattern){
    //     var result = (wildcardToRegExp(pattern)).test(url);
    //     return result;
    //   }

    //   function wildcardToRegExp (s) {
    //     return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
    //   }

    //   function regExpEscape (s) {
    //     return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    //   }

    //   function replace(text, search, replacement) {
    //     try{
    //       return text.replace(new RegExp(search, 'g'), replacement);
    //     }catch(e){
    //       return text;
    //     }
    //   }

      

    //   var _open = XMLHttpRequest.prototype.open;
    //   XMLHttpRequest.prototype.open = function (method, current_url) {
    //     //console.log(current_url);
    //     var url_param = current_url;
    //     if(!current_url.includes('https')){
    //       url_param = (current_url.startsWith("/") ? main_url.slice(0, -1) : main_url)+current_url;
    //     }
    //     var object_url = new URL(url_param);

        
    //     //untuk merubah parameter url secara langsung
    //     if(matchURL(object_url.href,'*bots/*/chats?folderType*') && method == "GET"){
    //       const urlParams = new URLSearchParams(object_url.search);

    //       if(!urlParams.has('next')){
    //         processed_data = 0;
    //         filtered_data = 0;
    //       }

    //       //jika mode pencarian tag maka
    //       if(urlParams.get("tagIds") != ""){
    //         document.dispatchEvent(new CustomEvent("onInjectElements",{detail:null}));
    //         usable_bool = document.querySelector("#laris-except-tag") ? document.querySelector("#laris-except-tag").checked : false;
    //         usable_mode = "tagIds";
    //         usable_array = urlParams.get("tagIds").split(",");
    //         usable_int = Date.now();
    //         var changed = false;
    //         usable_array.forEach(function(str){
    //           if(!usable_object[str]){
    //             changed = true;
    //             usable_object[str] = {id:str,except:usable_bool,updated:usable_int};
    //           }else{
    //             usable_object[str].updated = usable_int;
    //           }
    //         });
    //         var include_tags = [];
    //         for(var key in usable_object){
    //           if(usable_object[key].updated != usable_int){
    //             changed = true;
    //             delete usable_object[key];
    //           }else{
    //             if(!usable_object[key].except){
    //               include_tags.push(key);
    //             }
    //           }
    //         }
    //         if(changed){
    //           document.dispatchEvent(new CustomEvent('onTagChange', {detail:usable_object}));
    //         }
    //         urlParams.set("tagIds",include_tags);
    //         //console.log(object_url);
    //         //console.log('before');
    //         //console.log(current_url);
    //         current_url = object_url.origin+object_url.pathname+"?"+replace(urlParams.toString(),"%","&");
    //         //console.log('after');
    //         //console.log(current_url);
    //         document.dispatchEvent(new CustomEvent('onInjectExcludeSearch', {detail:true}));
    //       }else{
    //         resetUsable();
    //         document.dispatchEvent(new CustomEvent('onInjectExcludeSearch', {detail:false}));
    //       }
    //       document.dispatchEvent(new CustomEvent('onSendFilterSettings', {}));
    //     }else{
    //       resetUsable();
    //     }

    //     var _onreadystatechange = this.onreadystatechange,
    //     _this = this; 

    //     _this.onreadystatechange = function () {
    //       // catch only completed 'api/search/universal' requests  && ~URL.indexOf('api/search/universal')
    //       if (_this.readyState === 4) {
    //         if(_this.status === 200){
    //           try {
    //             var data = JSON.parse(_this.responseText); // {"fields": ["a","b"]}
    //             //log('Caught! :)', method, current_url);
    //             if(matchURL(object_url.href,'*bots/*/chats?folderType*')){
                  
    //               const urlParams = new URLSearchParams(object_url.search);
                  
    //               //hanya ambil yg bukan dari extension dan yg typenya bukan NONE
    //               if(!urlParams.has('ext') && urlParams.get('folderType') != "NONE"){
    //                 if(!urlParams.has('next')){
    //                   document.dispatchEvent(new CustomEvent('onChatReset', {}));
    //                 }
    //                 if(data.list && data.list.length > 0){
    //                   var raw_length = data.list.length;
    //                   processed_data = processed_data + raw_length;
    //                   var newlist = [];
    //                   var dummy = data.list[0];
    //                   data.list.forEach(function(entry){
    //                     //jika mode pencarian berdasarkan tag maka
    //                     if(usable_mode == "tagIds"){
    //                       var mode_include = false;
    //                       var mode_exclude = false;
    //                       var found_exclude = false;
    //                       var found_include = false;
    //                       for (var key in usable_object){
    //                         if(usable_object[key].except){
    //                           mode_exclude = true;
    //                           if(entry.tagIds.length > 0){
    //                             entry.tagIds.forEach(function(id){
    //                               if(key == id){
    //                                 found_exclude = true;
    //                                 return false;
    //                               }
    //                             });
    //                           }
    //                         }
    //                         if(!usable_object[key].except){
    //                           mode_include = true
    //                           if(entry.tagIds.length > 0){
    //                             entry.tagIds.forEach(function(id){
    //                               if(key == id){
    //                                   found_include = true;
    //                                   return false;
    //                               }
    //                             });
    //                           }
    //                         }
    //                       }
                          
    //                       //log(entry.profile);
    //                       //log(mode_exclude+" : "+found_exclude);
    //                       //log(mode_include+" : "+found_include);
    //                       if(mode_exclude && found_exclude){
    //                         return false;
    //                       }else{
    //                         if(mode_include && !found_include){
    //                           return false;
    //                         }
    //                       }
    //                     }

    //                     if("status_filter" in filter_settings){
    //                       var filter = filter_settings["status_filter"];
    //                       if(filter == "friend"){
    //                         if(entry.profile == null || entry.profile.friend == false || entry.status != "active"){
    //                           return false;
    //                         }
    //                       }else if(filter == "nonfriend"){
    //                         if(entry.profile && entry.profile.friend == true){
    //                           return false;
    //                         }
    //                       }
    //                     }
                        
    //                     if("tag_filter" in filter_settings){
    //                       var filter = filter_settings["tag_filter"];
    //                       if(filter == "withtag"){
    //                         if(entry.tagIds == null || entry.tagIds.length == 0){
    //                           return false;
    //                         }
    //                       }else if(filter == "notag"){
    //                         if(entry.tagIds != null && entry.tagIds.length > 0){
    //                           return false;
    //                         }
    //                       }
    //                     }

    //                     if("response_filter" in filter_settings){
    //                       var filter = filter_settings["response_filter"];
    //                       if(filter == "withresponse"){
    //                         if(entry.latestEvent == null || entry.latestEvent.type == "messageSent"){
    //                           return false;
    //                         }
    //                       }else if(filter == "noresponse"){
    //                         if(entry.latestEvent != null && entry.latestEvent.type == "message"){
    //                           return false;
    //                         }
    //                       }
    //                     }

    //                     if("read_filter" in filter_settings){
    //                       var filter = filter_settings["read_filter"];
    //                       if(filter == "read"){
    //                         if(!entry.userLastReadAt || entry.userLastReadAt < entry.lastSentAt){
    //                           return false;
    //                         }
    //                       }else if(filter == "unread"){
    //                         if(entry.userLastReadAt && entry.userLastReadAt >= entry.lastSentAt){
    //                           return false;
    //                         }
    //                       }
    //                     }

    //                     if("nick_filter" in filter_settings){
    //                       var filter = filter_settings["nick_filter"];
    //                       if(filter == "yes"){
    //                         if(entry.profile == null || !('nickname' in entry.profile) || entry.profile.nickname == ""){
    //                           return false;
    //                         }
    //                       }else if(filter == "no"){
    //                         if(entry.profile && 'nickname' in entry.profile && entry.profile.nickname != ""){
    //                           return false;
    //                         }
    //                       }
    //                     }

    //                     if("message_filter" in filter_settings){
    //                       var filter = filter_settings["message_filter"];
    //                       if(filter != ""){
    //                         if(entry.latestEvent == null || entry.latestEvent.message == null || entry.latestEvent.message.type != filter){
    //                           return false;
    //                         }
    //                       }
    //                     }


    //                     if("date_filter" in filter_settings){
    //                       var filter = filter_settings["date_filter"];
    //                       if(filter == 1){
    //                         var criteria = filter_settings["date_filter_criteria"];
    //                         var compare = filter_settings["date_filter_compare"];

    //                         var date1 = filter_settings["date_filter_date1"] == "" ? null : moment(filter_settings["date_filter_date1"]+(filter_settings["date_filter_time1"] == "" ? " 00:00" : " "+filter_settings["date_filter_time1"]));
    //                         var date2 = filter_settings["date_filter_date2"] == "" ? null : moment(filter_settings["date_filter_date2"]+(filter_settings["date_filter_time2"] == "" ? " 00:00" : " "+filter_settings["date_filter_time2"]));
                            
    //                         if(criteria == "last_received"){
    //                           if(compare == "="){
    //                             if(!(moment(entry.lastReceivedAt)).isSame(date1,'day')){
    //                               return false;
    //                             }
    //                           }else if(compare == ">" && entry.lastReceivedAt < date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "<" && entry.lastReceivedAt > date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "><" && (entry.lastReceivedAt < date1.valueOf() || entry.lastReceivedAt > date2.valueOf())){
    //                             return false;     
    //                           }
    //                         }else if(criteria == "last_sent"){
    //                           if(compare == "="){
    //                             if(!(moment(entry.lastSentAt)).isSame(date1,'day')){
    //                               return false;
    //                             }
    //                           }else if(compare == ">" && entry.lastSentAt < date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "<" && entry.lastSentAt > date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "><" && (entry.lastSentAt < date1.valueOf() || entry.lastSentAt > date2.valueOf())){
    //                             return false;     
    //                           }
    //                         }else if(criteria == "last_read"){
    //                           if(compare == "="){
    //                             if(!(moment(entry.userLastReadAt)).isSame(date1,'day')){
    //                               return false;
    //                             }
    //                           }else if(compare == ">" && entry.userLastReadAt < date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "<" && entry.userLastReadAt > date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "><" && (entry.userLastReadAt < date1.valueOf() || entry.userLastReadAt > date2.valueOf())){
    //                             return false;     
    //                           }
    //                         }else if(criteria == "last_talked"){
    //                           if(compare == "="){

    //                             if(!(moment(entry.lastTalkedAt)).isSame(date1,'day')){

    //                               return false;
    //                             }

    //                           }else if(compare == ">" && entry.lastTalkedAt < date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "<" && entry.lastTalkedAt > date1.valueOf()){
    //                             return false; 
    //                           }else if(compare == "><" && (entry.lastTalkedAt < date1.valueOf() || entry.lastTalkedAt > date2.valueOf())){
    //                             return false;     
    //                           }
    //                         }
    //                       }   
    //                     }

    //                     newlist.push(entry);
    //                     document.dispatchEvent(new CustomEvent('onChatReceived', { detail: entry }));
    //                   });
    //                   data.list = newlist;
    //                   filtered_data = filtered_data + data.list.length;
    //                   if(data.list.length == 0 && !urlParams.get('next') && data.next){ //jika request pertama kosong maka tambah chat dummy 
    //                     data.list = [JSON.parse('{"chatId":"dummy","updatedAt":null,"tagIds":[],"read":true,"done":false,"followedUp":false,"spam":false,"muteAtPc":false,"muteAtApp":false,"profile":{},"latestEvent":{"type":"message","timestamp":null,"source":{"chatId":null,"userId":null},"message":{"id":null,"type":"text","text":""}},"lastReadAt":null,"userLastReadAt":null,"lastReceivedAt":null,"lastSentAt":null,"lastTalkedAt":null,"lastReadMessageId":null,"userLastReadMessageId":null,"chatType":"USER","status":null}')];
    //                     document.dispatchEvent(new CustomEvent('onChatReceived', { detail: data.list[0] }));
    //                     innerwaitUntilElement("#chat-dummy",function(el){
    //                       el.parentElement.style = "display: none !important;";
    //                     },1);
    //                   }else{
    //                     dummy = null;
    //                   }
                      
    //                   innerwaitUntilElement(".chatlist > div",function(){
    //                     if(data.list.length < 25){ //jika request pertama tidak sampai 25, trigger on scroll
    //                       var chatscroll = document.querySelector(".chatlist .flex-fill");
    //                       if(chatscroll){
    //                         chatscroll.setAttribute("scroll-update",processed_data);   
    //                         //document.querySelector(".chatlist .flex-fill").dispatchEvent(new CustomEvent('scroll'));
    //                         if("all_filter" in filter_settings && filter_settings["all_filter"] == 1){
    //                           chatscroll.scrollTo(0, 99999999999);
    //                           if(scroll_timeout){
    //                             clearTimeout(scroll_timeout);
    //                             scroll_timeout = null;
    //                           }
    //                           scroll_timeout = setTimeout3(function(){
    //                             if(chatscroll.scrollTop < chatscroll.scrollHeight){
    //                               chatscroll.scrollTo(0, 99999999999);
    //                             }
    //                           },3000);
    //                         }
    //                       }
    //                     }
    //                     if(document.querySelector("#laris-filter-progress")){
    //                       document.querySelector("#laris-filter-progress .processed").innerHTML = processed_data;
    //                       document.querySelector("#laris-filter-progress .filtered").innerHTML = filtered_data;
    //                     }
    //                     if(!data.next){ //jika request terakhir maka cek apakah ada dummy jika ada hapus
    //                       if(document.querySelector("#laris-filter-progress")){
    //                         if(filtered_data <= 0){
    //                           document.querySelector("#laris-filter-progress").style.backgroundColor = "#E44848";
    //                         }else{
    //                           document.querySelector("#laris-filter-progress").style.backgroundColor = "#84DC84";
    //                         }
    //                       }
    //                       if(document.querySelector("#chat-dummy")){
    //                         document.querySelector(".chatlist .flex-fill").setAttribute("scroll-update",0);
    //                         document.querySelector("#chat-dummy").parentElement.remove();
    //                       }
    //                     }
    //                   });  
    //                 }
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/chats/search?query*')){
    //               const urlParams = new URLSearchParams(object_url.search);
    //               if(!urlParams.has('ext')){
    //                 if(!urlParams.has('next')){
    //                   document.dispatchEvent(new CustomEvent('onSearchReset', {}));
    //                   prev_url = "";
    //                 }
    //                 if(data.list && data.list.length > 0){
    //                   data.list.forEach(function(entry){
    //                     document.dispatchEvent(new CustomEvent('onSearchReceived', { detail: entry.chat }));
    //                   });
    //                 }
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/chats/*/tags/*')){
    //               var splitted = object_url.href.split("/");
    //               var chat_id = splitted[splitted.length-3];
    //               var tag_id = splitted[splitted.length-1];
    //               if(method == "PUT"){
    //                 document.dispatchEvent(new CustomEvent('onAssignTag', { detail: {chat_id:chat_id,tag_id:tag_id} }));
    //               }else if(method == "DELETE"){
    //                 if(document.querySelector("#tag-"+chat_id+"-"+tag_id)) document.querySelector("#tag-"+chat_id+"-"+tag_id).remove(); 
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/tags')){
    //               if(method == "POST"){
    //                 document.dispatchEvent(new CustomEvent('onAddTag', { detail: data }));
    //               }else if(method == "GET"){
    //                 if(data && data.list){
    //                   data.list.forEach(function(tag){
    //                     context_tags[tag.tagId] = tag;
    //                   });
    //                   document.dispatchEvent(new CustomEvent('onMainUpdateTags', { detail: context_tags }));
    //                 }
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/tags/*')){
    //               var splitted = object_url.href.split("/");
    //               var chat_id = splitted[splitted.length-3];
    //               var tag_id = splitted[splitted.length-1];
    //               if(method == "PUT"){
    //                 document.dispatchEvent(new CustomEvent('onEditTag', { detail: data }));
    //               }else if(method == "DELETE"){
    //                 document.dispatchEvent(new CustomEvent('onDeleteTag', { detail: {chat_id:chat_id,tag_id:tag_id} }));
    //               }
    //             }else if(matchURL(object_url.href,'*/api/v1/me')){
    //               inner_line_me = data;
    //               document.dispatchEvent(new CustomEvent('onMe', { detail: data }));
    //             }else if(matchURL(object_url.href,'*/api/v1/csrfToken')){
    //               inner_line_csrf = data.token;
    //               document.dispatchEvent(new CustomEvent('onCSRF', { detail: data.token }));
    //             }else if(matchURL(object_url.href,'*/api/v1/bots?*')){
    //               inner_line_bots = data.list;
    //               document.dispatchEvent(new CustomEvent('onLineBots', { detail: inner_line_bots }));
    //             }else if(matchURL(object_url.href,'*/bots/*/messages/*/send')){
    //               log("*/bots/*/messages/*/send");
    //               if(inner_current_improvements.includes("handle_limited")){
    //                 log(pending_chats);
    //                 var splitted = _this.responseURL.split("/");
    //                 if(splitted.length > 2){
    //                   var id = splitted[splitted.length-2];
    //                   var json = JSON.parse(_this.data);
    //                   if(id in pending_chats){
    //                     if(json["sendId"] in pending_chats[id]){
    //                       delete pending_chats[id][json["sendId"]];
    //                       if(window.location.href.includes(id)){
    //                         if(document.querySelector('[data-id="'+json["sendId"]+'"]')){
    //                           try{
    //                             document.querySelector('[data-id="'+json["sendId"]+'"]').parentElement.parentElement.remove();
    //                           }catch(e){

    //                           }
    //                         }
    //                       }
    //                     }
    //                     if(Object.keys(pending_chats[id]).length == 0){
    //                       delete pending_chats[id];
    //                     }
    //                   }
    //                 }
    //                 log(pending_chats);
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/messages/*/sendFile')){
    //               log("*/bots/*/messages/*/sendFile");
    //               if(inner_current_improvements.includes("handle_limited")){
    //                 log(pending_chats);
    //                 var splitted = _this.responseURL.split("/");
    //                 if(splitted.length > 2){
    //                   var id = splitted[splitted.length-2];
    //                   var sendId = _this.data.get("sendId");
    //                   if(id in pending_chats){
    //                     if(sendId in pending_chats[id]){
    //                       delete pending_chats[id][sendId];
    //                       if(window.location.href.includes(id)){
    //                         if(document.querySelector('[data-id="'+sendId+'"]')){
    //                           try{
    //                             document.querySelector('[data-id="'+sendId+'"]').parentElement.parentElement.remove();
    //                           }catch(e){
                                
    //                           }
    //                         }
    //                       }
    //                     }
    //                     if(Object.keys(pending_chats[id]).length == 0){
    //                       delete pending_chats[id];
    //                     }
    //                   }
    //                 }
    //                 log(pending_chats);
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/messages/*')){
    //               log("*/bots/*/messages/*");
    //               if(document.querySelector(".chat-pending")){
    //                 document.querySelectorAll(".chat-pending").forEach(function(el){
    //                   el.remove();
    //                 });
    //               }
    //               if(Object.keys(pending_chats).length > 0){
    //                 var splitted = _this.responseURL.split("/");
    //                 if(splitted.length > 0){
    //                   var id = splitted[splitted.length-1];
    //                   if(id in pending_chats){
    //                     var target = document.querySelector("#content-primary > div:nth-child(2)");
    //                     Object.keys(pending_chats[id]).forEach(function (key) {
    //                       var value = pending_chats[id][key];
    //                       if(value.type == "text"){
    //                         var dataid = value.sendId;
    //                         var html = `
    //                         <div class="chat chat-text-dark chat-reverse chat-primary chat-pending">
    //                           <div class="chat-content">
    //                             <div data-id="`+dataid+`" class="chat-body w-max-520">
    //                               <div class="chat-main">
    //                                 <div class="chat-item baloon">
    //                                   <div class="chat-item-text user-select-text">
    //                                     `+value.data.text+`
    //                                   </div>
    //                                 </div>
    //                               </div> 
    //                               <div class="chat-sub">
    //                               <span></span>
    //                               </div>
    //                             </div>
    //                           </div>
    //                         </div>
    //                         `;
    //                         var el = innerCreateElement(html);
    //                         innerwaitUntilElement("#content-primary > div:nth-child(2) > div",function(){
    //                           target.appendChild(el);
    //                           setTimeout3(function(){
    //                             target.scrollTo(0,target.scrollHeight);
    //                           },100);
    //                         });
    //                       }else if(value.type == "image"){
    //                         var dataid = value.sendId;
    //                         var html = `<div class="chat chat-text-dark chat-reverse chat-primary chat-pending">
    //                                       <div class="chat-content">
    //                                         <div data-id="`+dataid+`" class="chat-body w-max-520">
    //                                           <div class="chat-main">
    //                                             <div class="chat-item rounded">
    //                                               <img src="" width="200">
    //                                             </div>
    //                                           </div> 
    //                                           <div class="chat-sub">
    //                                             <span></span>
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                     `;
    //                         var el = innerCreateElement(html);
    //                         innerwaitUntilElement("#content-primary > div:nth-child(2) > div",function(){
    //                           target.appendChild(el);
    //                           var reader = new FileReader();
    //                           reader.onload = function() {
    //                             innerwaitUntilElement('div[data-id="'+dataid+'"]',function(){
    //                               document.querySelector('div[data-id="'+dataid+'"] img').src = reader.result; 
    //                               target.scrollTo(0,target.scrollHeight);
    //                             });
    //                           }
    //                           reader.readAsDataURL(value.data); 
    //                         }); 
    //                       }else if(value.type == "video"){
    //                         var dataid = value.sendId;
    //                         var html = `<div class="chat chat-text-dark chat-reverse chat-primary chat-pending">
    //                                       <div class="chat-content">
    //                                         <div data-id="`+dataid+`" class="chat-body w-max-520">
    //                                           <div class="chat-main">
    //                                             <div class="chat-item video rounded">
    //                                               <div style="width:200px;height:110px;background-color:black">
    //                                             </div>
    //                                           </div> 
    //                                           <div class="chat-sub">
    //                                             <span></span>
    //                                           </div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                     `;
    //                         var el = innerCreateElement(html);
    //                         innerwaitUntilElement("#content-primary > div:nth-child(2) > div",function(){
    //                           target.appendChild(el);
    //                           innerwaitUntilElement('div[data-id="'+dataid+'"]',function(){
    //                             target.scrollTo(0,target.scrollHeight);
    //                           });
    //                         }); 
    //                       }else if(value.type == "file"){
    //                         var dataid = value.sendId;
    //                         var splitname = value.data.name.split(".");
    //                         var ext = splitname[splitname.length-1].toLowerCase();;
    //                         var html = `<div class="chat chat-text-dark chat-reverse chat-primary chat-pending">
    //                                       <div class="chat-content">
    //                                         <div data-id="`+dataid+`" class="chat-body w-max-520">
    //                                           <div class="chat-main">
    //                                             <div class="chat-item baloon">
    //                                               <a class="chat-item-data cursor-pointer">
    //                                                 <div class="chat-item-data-sub">
    //                                                   <i class="lar la-file fa-fw fa-2x"></i>
    //                                                 </div>
    //                                                 <div class="chat-item-data-main">
    //                                                   <div class="text-dark text-truncate-2 mb-1">
    //                                                     `+value.data.name+`
    //                                                   </div>
    //                                                   <div class="small">
    //                                                     <div>File format: `+ext+`</div>
    //                                                     <div>Size: `+(value.data.size/1024).toFixed(2)+` KB</div>
    //                                                   </div>
    //                                                 </div>
    //                                               </a>
    //                                             </div>
    //                                           </div> 
    //                                           <div class="chat-sub"><span></span></div>
    //                                         </div>
    //                                       </div>
    //                                     </div>
    //                                     `;
    //                         var el = innerCreateElement(html);
    //                         innerwaitUntilElement("#content-primary > div:nth-child(2) > div",function(){
    //                           target.appendChild(el);
    //                           innerwaitUntilElement('div[data-id="'+dataid+'"]',function(){
    //                             target.scrollTo(0,target.scrollHeight);
    //                           });
    //                         }); 
    //                       }
    //                     });
    //                   } 
    //                 }
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/streaming/state')){
    //               last_token = Date.now();
    //             }else if(matchURL(object_url.href,"*/bots/*/cardTypeMessages?*") || matchURL(object_url.href,"*/bots/*/cardTypeMessages")){
    //               for (var i = data.list.length - 1; i >= 0; i--) {
    //                 if(data.list[i].messageObject && "rich" in data.list[i].messageObject){
    //                   data.list.splice(i,1);
    //                 }
    //               }
    //             }else if(matchURL(object_url.href,'*/bots/*/owners')){
    //               document.dispatchEvent(new CustomEvent('onOwners', { detail: data.list }));
    //             }

                
    //             Object.defineProperty(_this, 'responseText', {value: JSON.stringify(data)});
    //           /////////////// END //////////////////
    //           } catch (e) {
    //             log(e);
    //           }
    //         }else if(_this.status === 429){
    //           if(!("l" in _this) && inner_current_improvements.includes("handle_limited")){
    //             if(matchURL(object_url.href,'*bots/*/messages/*/send')){
    //               var target = null;
    //               var splitted = _this.responseURL.split("/");
    //               if(splitted.length > 2){
    //                 var chatid = splitted[splitted.length-2];
    //                 if(!(chatid in pending_chats)){
    //                   pending_chats[chatid] = {};
    //                 }
    //                 var json = JSON.parse(_this.data);
    //                 pending_chats[chatid][json["sendId"]] = {
    //                   type:"text",
    //                   sendId:json["sendId"],
    //                   data:json,
    //                 };
    //                 if(!(chatid in queue_chats)){
    //                   queue_chats[chatid] = {run:false,list:[]};
    //                 }
    //                 queue_chats[chatid].list.push(
    //                   {
    //                     type:"manualText",
    //                     url:_this.responseURL,
    //                     data:_this.data,
    //                   }
    //                 );
    //                 target = document.querySelector("#chat-"+chatid+" .text-muted > span");
    //                 if(!target) target = document.querySelector(".list-group > .list-group-item.active .text-muted > span");
    //                 if(target){
    //                   try{
    //                     target.innerHTML = JSON.parse(_this.data).text;
    //                   } catch (e) {
    //                     log(e);
    //                   }
    //                 }
    //                 setTimeout3(function(){
    //                   executeManualQueue(chatid);
    //                 },5000);
    //                 Object.defineProperty(_this, 'status', {value: 200});
    //               }
    //             }else if(matchURL(object_url.href,'*bots/*/messages/*/sendFile')){
    //               var target = null;
    //               var splitted = _this.responseURL.split("/");
    //               if(splitted.length > 2){
    //                 var chatid = splitted[splitted.length-2];
    //                 if(!(chatid in pending_chats)){
    //                   pending_chats[chatid] = {};
    //                 }
    //                 var file = _this.data.get('file');
    //                 var type = "file";
    //                 var sendId = _this.data.get("sendId");
    //                 log(file);
    //                 target = document.querySelector("#chat-"+chatid+" .text-muted > span");
    //                 if(!target) target = document.querySelector(".list-group > .list-group-item.active .text-muted > span");
    //                 if(target){                   
    //                   var splitname = file.name.split(".");
    //                   var ext = splitname[splitname.length-1].toLowerCase();
    //                   if(['jpg', 'gif', 'bmp', 'png'].includes(ext)){
    //                     type = "image";
    //                     if(inner_line_me && inner_line_me.language == "th"){
    //                       target.innerHTML = "คุณส่งรูป";
    //                     }else{
    //                       target.innerHTML = "You sent a photo.";
    //                     }
    //                   }else if(['m4v', 'avi','mpg','mp4'].includes(ext)){
    //                     type = "video";
    //                     if(inner_line_me && inner_line_me.language == "th"){
    //                       target.innerHTML = "คุณส่งวิดีโอ";
    //                     }else{
    //                       target.innerHTML = "You sent a video.";
    //                     }
    //                   }else{
    //                     type = "file";
    //                     if(inner_line_me && inner_line_me.language == "th"){
    //                       target.innerHTML = "คุณส่งไฟล์";
    //                     }else{
    //                       target.innerHTML = "You sent a file.";
    //                     }
    //                   }
    //                 }
    //                 pending_chats[chatid][sendId] = {
    //                   type:type,
    //                   sendId:sendId,
    //                   data:file,
    //                 };
    //                 if(!(chatid in queue_chats)){
    //                   queue_chats[chatid] = {run:false,list:[]};
    //                 }
    //                 queue_chats[chatid].list.push(
    //                   {
    //                     type:"manualFile",
    //                     url:_this.responseURL,
    //                     data:_this.data,
    //                   }
    //                 );
    //                 setTimeout3(function(){
    //                   executeManualQueue(chatid);
    //                 },5000);
    //                 Object.defineProperty(_this, 'status', {value:200});
    //               }
    //             }
    //             log(pending_chats);
    //           }
    //         }
    //       }
    //       // call original callback
    //       if (_onreadystatechange) _onreadystatechange.apply(this, arguments);
    //     };

    //     // detect any onreadystatechange changing
    //     Object.defineProperty(this, "onreadystatechange", {
    //       get: function () {
    //           return _onreadystatechange;
    //       },
    //       set: function (value) {
    //           _onreadystatechange = value;
    //       }
    //     });
    //     //log(arguments);
    //     return _open.apply(_this, arguments);
    //   };

    //   !function(_send){
    //       XMLHttpRequest.prototype.send = function (data) {
    //         //log("xhr send");
    //         //log(this);

    //         Object.defineProperty(this, 'data', {value: data});
    //         _send.call(this, data);
    //       }
    //   }(XMLHttpRequest.prototype.send);


    //   //cegat websocket chat dan atur tampilan chat
    //   function interceptSocketMessage(fn){
    //     fn=fn||console.log
    //     let property=Object.getOwnPropertyDescriptor
    //     (MessageEvent.prototype,"data")
    //     const data=property.get
    //     function lookAtMessage(){ //to replace get function
    //       let socket=this.currentTarget instanceof EventSource;
    //       if(!socket){return data.call(this)}
    //       let msg=data.call(this);
          
    //       fn({data:msg,socket:this.currentTarget,event:this});
    //       if(block_new_chat && (this.type == "chat" || this.type == "botUnreadChatCount")){
    //         msg = "{}";
    //       }
    //       Object.defineProperty(this,"data",{value:msg}); //anti-loop
    //       return msg;
    //     }
    //     property.get=lookAtMessage
    //     Object.defineProperty
    //     (MessageEvent.prototype,"data",property)
    //   }
    //   interceptSocketMessage(function(data){
    //     if(data.event.type == "chat"){
    //       var obj = JSON.parse(data.data);
    //       if(obj.subEvent == "message"){
    //         document.dispatchEvent(new CustomEvent('onNewIncomingChat', {detail:obj}));
    //       }
    //     }
    //   });


    // }+")('"+cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+"')";
    // var script = document.createElement('script');
    // script.textContent = code;
    // (document.head||document.documentElement).appendChild(script);
    // script.remove();
  }

  function injectManagerScript(){
    document.addEventListener('onMe',function(e){
      line_me = e.detail;
      if(content_port){
        content_port.postMessage({type:"reportMe",data:line_me});
      }
    });

    document.addEventListener('onEditCustomCard', function (e) {
      content_port.postMessage({type:"editCustomCard",data:{
        admin:JSON.stringify(line_me),
        botId:e.detail.botId,
        id:e.detail.id,
        json:e.detail.json
      }});
    });


    var script = document.createElement("script");
    script.src =  browser.runtime.getURL('modules/v8yh3pM1zELU0PKzHqQc0s30M9eGJBxCAfdfl7dG6ALEwTMmP5.js'); //context_manager
    script.type = 'module';
    script.id = 'manager';
    script.dataset.mainUrl = cnst[/* @/mangle */"OA_MANAGER_URL"/* @/mangle */];
    script.onload = () => script.remove(); // Remove after execution
    (document.head || document.documentElement).appendChild(script);

    //  var code = "("+function(main_url){
    //   var is_debug = false;
    //   var langs = null;
    //   var inner_line_me = null;
    //   var inner_current_improvements = [];
    //   var inner_manifest = null;
    //   var inner_client_gesture = false;

    //   document.addEventListener('onManifest',function(e){
    //     inner_manifest = e.detail;
    //   });

    //   document.addEventListener('onClientGesture',function(e){
    //     inner_client_gesture = e.detail;
    //   });

    //   document.addEventListener('onImprovements',function(e){
    //     inner_current_improvements = e.detail;
    //   });

    //   document.addEventListener('onLicenseExpired',function(){
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       title: getTransText('titleRemoved'),
    //       width: 600,
    //       html: "<div style='text-align:justify'>"+getTransText('warningRemoved')+"</div>",
    //       confirmButtonText: getTransText('buttonOk'),
    //     }).then((result) => {
    //       if(inner_client_gesture) window.onbeforeunload = null;
    //       window.location.reload(); 
    //     });
    //   });

    //   document.addEventListener('onAdminDuplicated',function(e){
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       title: getTransText("titleDuplicateAdmin"),
    //       width: 600,
    //       html: getTransText("warningDuplicatedLogin").replace("[NAME]","<b>"+e.detail.name+"</b>"),
    //       confirmButtonText: getTransText('buttonOk'),
    //     }).then((result) => {
    //       if(inner_client_gesture) window.onbeforeunload = null;
    //       window.location.href = "https://account.line.biz/login?redirectUri=https%3A%2F%2Fchat.line.biz%2F";
    //     });
    //   });

    //   document.addEventListener('onCloseSwal',function(e){
    //     swal.close();
    //   });

    //   document.addEventListener('onStartAutoLogin',function(e){
    //     var html = '<iframe crossorigin="anonymous" style="width:100%;height:80vh" id="laris-auto-login" name="laris-auto-login" src="https://chat.line.biz"></iframe>';
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       width: '90vw',
    //       title: "Your LINE OA login is expired.",
    //       html: html,
    //       showConfirmButton: false,
    //       confirmButtonText: getTransText('buttonClose'),
    //       showCloseButton: true
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         //document.dispatchEvent(new CustomEvent('onCloseAutoLogin', {detail:null}));
    //       }
    //     });
    //   });

    //   document.addEventListener('onLicenseConflict',function(){
    //     Swal.fire({
    //       allowOutsideClick: false,
    //       width: 600,
    //       title: getTransText('multipleLoginTitle'),
    //       html: getTransText('multipleLoginWarning'),
    //       showDenyButton: true,
    //       showCancelButton: true,
    //       confirmButtonColor: '#0D9F2F',
    //       denyButtonColor: '#2693EC',
    //       cancelButtonColor: '#DE2B10',
    //       confirmButtonText: getTransText('buttonYesThisMe'),
    //       denyButtonText: getTransText('buttonBuyAnother'),
    //       cancelButtonText : getTransText('buttonCancel'),
    //       preDeny: () => {
    //         if(inner_manifest && !("author" in inner_manifest)) window.open("https://bionicprogram.com/m/signup/laris", '_blank');
    //         return false;
    //       }
    //     }).then((result) => {
    //       //log(result);
    //       /* Read more about isConfirmed, isDenied below */
    //       if (result.isConfirmed) {
    //         document.dispatchEvent(new CustomEvent('onSendContentPort', {detail:{type:"requestClaimLogin"}}));
    //       } else if (result.isDenied) {
    //       } else if (result.isDismissed && result.dismiss == "cancel") {
    //         document.dispatchEvent(new CustomEvent('onSendContentPort', {detail:{type:"requestCancelLogin"}}));
    //       }
    //     });
    //   });



    //   document.addEventListener('onShowToast',function(e){
    //     var myToast = Toastify(e.detail);
    //     myToast.showToast();
    //   });

    //   document.addEventListener('onReceiveLangs', function (e) {
    //     langs = e.detail;
    //   });

      
    //   function log(obj){
    //     if(is_debug) console.log(obj);
    //   }

    //   function innerwaitUntilElement(selector,callback,timeout = 240,tried = 0){
    //     setTimeout(function(){
    //       if(document.querySelector(selector) != null){
    //         callback();
    //       }else{
    //         if(tried < timeout){
    //           innerwaitUntilElement(selector,callback,timeout,tried++);
    //         }
    //       }
    //     },250);
    //   }

    //   function getTransText(name){
    //     if(langs == null){
    //       return name;
    //     }else{
    //       var str = name in langs  ? langs[name]['message'] : name;
    //       if(!inner_manifest || !("author" in inner_manifest)){
    //         if(name == "broadcastLimitationText"){
    //           str = str + " <a href='https://bionicprogram.com/m/content/p/id/12/' target='_blank'>(?)</a>";
    //         }
    //       }
    //       return str;
    //     }
    //   }

    //   function innerCreateElement(str) {
    //     var frag = document.createDocumentFragment();

    //     var elem = document.createElement('div');
    //     elem.innerHTML = str;

    //     while (elem.childNodes[0]) {
    //       frag.appendChild(elem.childNodes[0]);
    //     }
    //     return frag;
    //   }

    //   function matchURL(url,pattern){
    //     var result = (wildcardToRegExp(pattern)).test(url);
    //     return result;
    //   }

    //   function wildcardToRegExp (s) {
    //     return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
    //   }

    //   function regExpEscape (s) {
    //     return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    //   }

    //   function replace(text, search, replacement) {
    //     try{
    //       return text.replace(new RegExp(search, 'g'), replacement);
    //     }catch(e){
    //       return text;
    //     }
    //   }

      

    //   var _open = XMLHttpRequest.prototype.open;
    //   XMLHttpRequest.prototype.open = function (method, current_url) {
    //     var object_url = new URL(main_url+current_url);
        
    //     //untuk merubah parameter url secara langsung
       

    //     var _onreadystatechange = this.onreadystatechange,
    //     _this = this; 

    //     _this.onreadystatechange = function () {
    //       // catch only completed 'api/search/universal' requests  && ~URL.indexOf('api/search/universal')
    //       if (_this.readyState === 4) {
    //         if(_this.status === 200){
    //           try {
    //             var data = JSON.parse(_this.responseText); // {"fields": ["a","b"]}
    //             //log('Caught! :)', method, current_url);
                

    //             if(matchURL(object_url.href,'*/api/cmsUser')){
    //               inner_line_me = data;
    //               document.dispatchEvent(new CustomEvent('onMe', { detail: data }));
    //             }else if(matchURL(object_url.href,"*/api/bots/*/cardTypeMessages/*")){
    //               if(data.message.origin && Object.keys(data.message.origin).length == 0){
    //                 var botId = (object_url.href.split("https://manager.line.biz/api/bots/")[1]).split("/cardTypeMessages")[0];
    //                 if(window.location.href.includes("/cardtypemessage/edit/") && (!inner_manifest || !("author" in inner_manifest))){
    //                   var url = window.location.href;
    //                   var intval = setInterval(function(){
    //                     if(window.location.href != url){
    //                       Swal.close();
    //                       clearInterval(intval);
    //                     }
    //                   },1000);
    //                   Swal.fire({
    //                     icon: 'warning',
    //                     title: getTransText("flexEditCustomCard"),
    //                     showCancelButton: true,
    //                     confirmButtonText: 'Edit',
    //                     denyButtonText: 'Cancel',
    //                   }).then((result) => {
    //                     /* Read more about isConfirmed, isDenied below */
    //                     if (result.isConfirmed) {
    //                       var xobj = new XMLHttpRequest();
    //                       xobj.open('GET', 'https://manager.line.biz/api/bots/'+botId+'/cardTypeMessages?id='+data.message.id, true);
    //                       xobj.onreadystatechange = function () {
    //                         if (xobj.readyState == 4) {
    //                           if(xobj.status == "200"){
    //                             var obj = JSON.parse(xobj.responseText);
    //                             if(obj.list && obj.list.length > 0){
    //                               var data = obj.list[0];
    //                               document.dispatchEvent(new CustomEvent('onEditCustomCard', {detail:{
    //                                 botId:botId,
    //                                 id:data.id,
    //                                 json:JSON.stringify(data.contents),
    //                               }}));
    //                             }
    //                           }
    //                           window.history.back();
    //                           clearInterval(intval);
    //                         }
    //                       };
    //                       xobj.send();
    //                     } else if(result.isDismissed && result.dismiss) {
    //                       window.history.back();
    //                       clearInterval(intval);
    //                     }
    //                   });
    //                 }else if(window.location.href.includes("/cardtypemessage/create?")){
                      
    //                   Swal.fire({
    //                     title: getTransText("Warning"),
    //                     html: getTransText("flexCopyCardError"),
    //                     timer: 3000,
    //                     timerProgressBar: true,
    //                   }).then((result) => {
    //                     /* Read more about handling dismissals below */
    //                     window.onbeforeunload = null;
    //                     window.location.href = "https://manager.line.biz/account/"+botId+"/cardtypemessage";
    //                   })
    //                 }
    //               }
    //             }else if(matchURL(object_url.href,"*/api/bots/*/cardTypeMessages?*") || matchURL(object_url.href,"*/api/bots/*/cardTypeMessages")){
    //               for (var i = data.list.length - 1; i >= 0; i--) {
    //                 if(data.list[i].contents && "rich" in data.list[i].contents){
    //                   data.list.splice(i,1);
    //                 }
    //               }
    //             }
                
    //             Object.defineProperty(_this, 'responseText', {value: JSON.stringify(data)});
    //           /////////////// END //////////////////
    //           } catch (e) {
    //             log(e);
    //           }
    //         }
    //       }
    //       // call original callback
    //       if (_onreadystatechange) _onreadystatechange.apply(this, arguments);
    //     };

    //     // detect any onreadystatechange changing
    //     Object.defineProperty(this, "onreadystatechange", {
    //       get: function () {
    //           return _onreadystatechange;
    //       },
    //       set: function (value) {
    //           _onreadystatechange = value;
    //       }
    //     });
    //     //log(arguments);
    //     return _open.apply(_this, arguments);
    //   };

    //   !function(_send){
    //       XMLHttpRequest.prototype.send = function (data) {
    //         //log("xhr send");
    //         //log(this);

    //         Object.defineProperty(this, 'data', {value: data});
    //         _send.call(this, data);
    //       }
    //   }(XMLHttpRequest.prototype.send);

    // }+")('"+cnst[/* @/mangle */"OA_MANAGER_URL"/* @/mangle */]+"')";
    // var script = document.createElement('script');
    // script.textContent = code;
    // (document.head||document.documentElement).appendChild(script);
    // script.remove();

  }

  function downloadContact(callback){
    if(scraped_contacts.length == 0){
      alert("You have no contact to download.");
      callback();
      return;
    }
    let csv = "";
    scraped_contacts.splice( 0, 0, ['ID','NAME','TYPE','LAST MESSAGED','EXPIRES AT','STATUS']);
    scraped_contacts.forEach(function(row){
      let cols = "";
      row.forEach(function(col){
        if(cols != ""){
          cols = cols + ',';
        }
        cols = cols + '"'+col+'"';
      });
      csv = csv + cols;
      csv = csv + "\n";
    });
    let file_type = "text/csv";
    let file_blob = new Blob([csv], {file_type});
    let file_name = "contacts.csv";
    let file_url = window.URL.createObjectURL(file_blob);
    let link = document.createElement("a");
    link.download = file_name;
    link.href = file_url;
    link.click();
    window.URL.revokeObjectURL(file_url);
    temp_obj = null;
    callback();
  }

  function importSessions(){
    let input = document.createElement("input");
    input.type = "file";
    input.accept = ".session";
    input.addEventListener('change', function(e) {
      if (e.target.files[0]) {
        var reader = new FileReader();
        // Read file contents
        reader.onload = function(event) {
          var contents = event.target.result;
          var json = null;
          try{
            json = JSON.parse(window.atob(contents));
            if(json){
              var new_admins = {};
              Object.entries(json).forEach(([key, value]) => {
                if(!(key in admin_sessions)){
                  new_admins[key] = value;
                }
              })

              if(Object.keys(new_admins).length > 0){
                document.dispatchEvent(new CustomEvent(/* @mangle */'onImportSessionConfirmation'/* @/mangle */, {detail:{
                  new_admins:new_admins
                }}));
              }else{
                document.dispatchEvent(new CustomEvent(/* @mangle */'onSwalBasic'/* @/mangle */, {detail:{
                  title:getTransText("Warning"),
                  content:getTransText("failedImportAdminNoNew"),
                  icon:'error'
                }}));
              }
            }else{
              document.dispatchEvent(new CustomEvent(/* @mangle */'onSwalBasic'/* @/mangle */, {detail:{
                title:getTransText("Warning"),
                content:getTransText("failedImportAdminEmpty"),
                icon:'error'
              }}));
            }
          }catch(exp){
            document.dispatchEvent(new CustomEvent(/* @mangle */'onSwalBasic'/* @/mangle */, {detail:{
              title:getTransText("Warning"),
              content:getTransText("failedImportAdminCorrupted"),
              icon:'error'
            }}));
          }
        };

        // Handle errors
        reader.onerror = function(event) {
          alert('File reading error:', event.target.error);
        };

        // Read file as text
        reader.readAsText(e.target.files[0]);
      }
    });
    input.click();
  }

  function exportSessions(){
    let sessions = window.btoa(JSON.stringify(admin_sessions));
    let file_type = /* @mangle */"text/session"/* @/mangle */;
    let file_blob = new Blob([sessions], {file_type});
    let file_name = /* @mangle */"login_"/* @/mangle */+Date.now()+/* @mangle */".session"/* @/mangle */;
    let file_url = window.URL.createObjectURL(file_blob);
    let link = document.createElement("a");
    link.download = file_name;
    link.href = file_url;
    link.click();
    window.URL.revokeObjectURL(file_url);
  }

  function fetchContact(callback,nxt = ""){
    var xobj = new XMLHttpRequest();
    if(nxt != ""){
      nxt = "&next="+nxt;
    }
    xobj.open('GET', 'https://chat.line.biz/api/v1/bots/'+line_id+'/contacts?query=&sortKey=DISPLAY_NAME&sortOrder=ASC&excludeSpam=true&limit=20'+nxt, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        if(xobj.status == "200"){
          var obj = JSON.parse(xobj.responseText);
          if(obj.list && obj.list.length > 0){
            obj.list.forEach(function(entry) {
              var lastTalked = "";
              try{
                lastTalked = entry.lastTalkedAt && entry.lastTalkedAt != "" ? (new Date(entry.lastTalkedAt)).toISOString() : "";
              }catch(e){
                
              }
              let data = [
                entry.contactId,
                entry.profile != null ? entry.profile.name.replace(/"/g, '""') : "-",
                entry.friend ? "Friend" : "Chat Visitor",
                lastTalked,
                entry.profile != null ? (new Date(entry.profile.lastActivityExpiresAt)).toISOString() : "-",
                entry.chatAvailable ? "Available" : "Not Available",
              ];
              scraped_contacts.push(data);
            });
          }
          temp_obj.innerHTML = "Downloading ("+scraped_contacts.length+")...";
          if(obj.next && obj.next != ""){
            fetchContact(callback,obj.next);
          }else{
            downloadContact(callback);
          }
        }else{
          downloadContact(callback);
        } 
      }
    };
    xobj.send();  
  }

  function injectOverrider(){

    if(client_gesture) window.onbeforeunload = function(e) {
       return 'Are you sure that you want to quit?';
    };
    // window.onerror = function(message, source, lineno, colno, error) {
    //   if (error) message = error.stack;
    //   document.dispatchEvent(new CustomEvent('onSendLog', {detail:{
    //     type:"error",
    //     source:"content_script",
    //     message:JSON.stringify(message)+"|"+JSON.stringify(source)+"|"+lineno+"|"+colno
    //   }}));
    //   return false;
    // }
    // window.addEventListener("unhandledrejection", function(promiseRejectionEvent) { 
    //   document.dispatchEvent(new CustomEvent('onSendLog', {detail:{
    //     type:"error",
    //     source:"content_script",
    //     message:JSON.stringify(promiseRejectionEvent.reason.message)+":"+JSON.stringify(promiseRejectionEvent.reason.stack)
    //   }}));
    // });
    // window.addEventListener('error', function(e) {
    //   document.dispatchEvent(new CustomEvent('onSendLog', {detail:{
    //     type:"error",
    //     source:"content_script",
    //     message:JSON.stringify(e.message)
    //   }}));
    // });
  }
  
  function addTagToChat(node,chat_id,tag_id){
    waitUntilCondition(function(){
      if(tag_id in loaded_user_tags){
        var name = loaded_user_tags[tag_id].name;
        var options = name in tag_colors ? tag_colors[name] : null;
        if(!current_improvements.includes("tag_color")){
          options = null;
        }
        var newel =createElement('<a style="'+(options ? "background-color:"+options.color+";color:"+(options.light ? "black" : "white") : "")+'" href="#" class="badge-sm tag tag-link" id="tag-'+chat_id+'-'+tag_id+'">'+loaded_user_tags[tag_id].name+'</a>');
        node.appendChild(newel);
        return true;
      }else{
        return false;
      }
    });
  }

  function processChatItem(data,item){
    if(!item.classList.contains("laris-processed")){
      item.id = "chat-"+data.chatId;
      item.classList.add("laris-processed");  
      if(current_improvements.includes("tag_show")){
        var node = item.querySelector(":scope > div:nth-child(2) > div:nth-child(3)");
        var tagids = data.tagIds;
        if(tagids && tagids.length > 0 && node){
          tagids.forEach(function(id){
            addTagToChat(node,data.chatId,id);
          }); 
        }
        return true;
      }else{
        return false;
      }
    }
  }

  function injectExcludeSearch(add = true){
    waitUntilElement("#content-primary .kv-input-suggestions",function(){
      if(document.querySelector("#content-primary .kv-input-suggestions")){
        if(!document.querySelector("#laris-except-tag")){
          if(!add || !current_improvements.includes("tag_search")) return;
          var html = `
            <div class="custom-control custom-checkbox mt-1">
              <input id="laris-except-tag" type="checkbox" class="custom-control-input">
              <label for="laris-except-tag" class="custom-control-label">`+getTransText('labelExceptTag')+`</label>
            </div>
          `;
          var el = createElement(html);
          document.querySelector("#content-primary .kv-input-suggestions").appendChild(el);
        }else if(!add){
          document.querySelector("#laris-except-tag").remove();
        }
      }
    });
    if(!add){
      injectElements();
    }
  }

  function addColorPickerToTag(node){
    if(!node.querySelector("button[data-jscolor]")){
      var key = node.firstChild.innerText.trim();
      var color = key in tag_colors ? tag_colors[key].color : '#505769';
      var html = `
        <button data-jscolor="{value:'`+color+`'}" style="
          border: none;
            background-color: #00B900;
            color: white;
            padding-right: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            margin-right: 10px;">
          `+getTransText("labelSetColor")+`
        </button>
      `;
      var el = createElement(html);
      node.querySelector("td:last-child").insertBefore(el,node.querySelector("td:last-child > *:first-child"));
      return true;
    }else{
      return false;
    }
  }

  function matchURL2(url,pattern){
    var result = (wildcardToRegExp(pattern)).test(url);
    return result;
  }

  function wildcardToRegExp (s) {
    return new RegExp('^' + s.split(/\*+/).map(regExpEscape).join('.*') + '$');
  }

  function regExpEscape (s) {
    return s.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
  }

  function replace(text, search, replacement) {
    try{
      return text.replace(new RegExp(search, 'g'), replacement);
    }catch(e){
      return text;
    }
  }

  function launchSetupBroadcast(){
    if(content_port == null){
      if(client_gesture) window.onbeforeunload = null;
      window.location.reload();
    }
    content_port.postMessage({type:"setupBroadcast",data:{
      line_id:line_id,
      is_main:is_main
    }});
  }

  var isReadingMessages = false;
  function processUnreadMessages(){
    if(isReadingMessages) return;
    isReadingMessages = true;
    var xobj = new XMLHttpRequest();
    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR2"/* @/mangle */]+line_id+'/chats?folderType=UNREAD&tagIds=&limit=25', true);
    xobj.onreadystatechange = function () {
    if (xobj.readyState == 4) {
      isReadingMessages = false;
      if(xobj.status == "200"){
        var obj = JSON.parse(xobj.responseText);
        if(obj.list && obj.list.length > 0){
          obj.list.forEach(function(entry) {
            if(entry.latestEvent && entry.latestEvent.type == "message" && entry.latestEvent.message){
              xobj = new XMLHttpRequest();
              xobj.open('PUT', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+entry.chatId+'/markAsRead', true);
              xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
              xobj.setRequestHeader(x_client_version,line_client_version);
              xobj.setRequestHeader('x-xsrf-token', line_csrf);
              xobj.withCredentials = true;
              xobj.onreadystatechange = function () {
                if (xobj.readyState == 4) {
                  if(xobj.status == "200"){
                  }
                }
              };
              xobj.send('{"messageId":"'+entry.latestEvent.message.id+'"}');  
            }
          });
        }
      }else if(xobj.status == "401" && xobj.responseText.includes("not_login")){
        loggedOutProcedure(line_me ? line_me.bizId : null,function(){
          processUnreadMessages();
        },getTransText("broadcastSendingText"));
      }else{
        
      } 
    }
    };
    xobj.send();
  }


  function injectElements(){
    var url = window.location.href;
    if (url.startsWith("https://chat.line.biz")){
      if(url.endsWith("/contact")){
        waitUntilElement("#content .form-inline",function(){
          if(!document.querySelector("#laris-download-contact")){
            var el = document.createElement('button');
            el.setAttribute('id', 'laris-download-contact');
            el.setAttribute('class', 'btn btn-secondary ml-2');
            el.innerHTML = "Download";
            el.addEventListener("click",function(){
              scraped_contacts = [];
              el.setAttribute('disabled','disabled');
              el.innerHTML = "Downloading...";
              temp_obj = el;
              fetchContact(function(){
                el.removeAttribute('disabled');
                el.innerHTML = "Download";
              });
            });
            document.querySelector("#content .form-inline").appendChild(el);
          }
        });
      }else if(url.endsWith("/settings/tags")){
        waitUntilElement("#content table",function(){
          var elemToObserve = document.querySelector("#content table");
          if(observer1 != null){
            observer1.disconnect();
            observer1 = null;
          }
          var found = false;
          observer1 = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {

              //add color picker on column
              if(mutation.target.nodeName == "TBODY" && mutation.addedNodes.length > 0){
                  mutation.addedNodes.forEach(function(node){
                    if(node.nodeName == "TR"){
                      //if(current_improvements.includes("tag_color")){
                        if(addColorPickerToTag(node)){
                          found = true;
                        }
                      //}
                    }
                  });
                }
              });
              if(found){
                found = false;
                document.dispatchEvent(new CustomEvent('onInitJSColor', {}));
              }
            });
          observer1.observe(elemToObserve, {childList: true, subtree: true});

          var rows = document.querySelectorAll("#content table tbody > tr");
          rows.forEach(function(node){
            //if(current_improvements.includes("tag_color")){
              if(addColorPickerToTag(node)){
                found = true;
              }
            //}
          });
          if(found){
            found = false;
            document.dispatchEvent(new CustomEvent('onInitJSColor', {}));
          }
        });
      }else{
        //tunggu sampai container chat siap lalu suntikan mutation
        waitUntilElement("#content-primary",function(){
          if(Object.keys(loaded_user_tags).length == 0){
            ambilTags(function(){});
          }

          var elemToObserve = document.querySelector("#content-primary");
          if(observer1 != null){
            observer1.disconnect();
            observer1 = null;
          }
          observer1 = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              //deteksi mutasi ketika pindah tampilan
              if(mutation.target.classList.contains("d-flex")){
                if(mutation.addedNodes.length > 0){
                  
                  mutation.addedNodes.forEach(function(node){
                    // || (node.classList && node.classList.contains("chatlist"))
                    if((node.id && node.id == "laris-filter-status") || (node.className && node.className.includes("flex-fill"))){
                      found = true;
                      return false;
                    }
                  })
                  if(found){
                    waitUntilElement("#content-primary .list-group .list-group-item > a",function(){
                      loaded_chats_idx = 0;
                      var all = document.querySelectorAll("#content-primary .list-group .list-group-item > a");
                      if(all){
                        all.forEach(function(item){
                          var data = loaded_chats_data[loaded_chats_idx];
                          if(data){
                            var resultTag = processChatItem(data,item);
                          }
                          loaded_chats_idx++;
                        });
                      }
                    });
                    return false;
                  }
                }
              }

              //deteksi element ketika scroll,   abis search dan close
              if(mutation.target.classList.contains("list-group")){
                var found = false;
                mutation.addedNodes.forEach(function(node){
                  if(node.classList.contains("list-group-item")){
                    found = true;
                    return false;
                  }
                })
                if(found){
                  var data = null;
                  if(document.querySelector("#content-primary input[type='text']").value == ""){
                    data = loaded_chats_data[loaded_chats_idx];
                  }else{
                    data = loaded_search_data[loaded_chats_idx];
                  }
                  
                  if(data){

                    var resultTag = processChatItem(data,mutation.addedNodes[0].querySelector(":scope > a"));
                    
                  }
                  loaded_chats_idx++;
                }
              }

                //deteksi adanya reset di node chat dan set index menjadi 0
              if(mutation.target.nodeName == "DIV" && mutation.addedNodes.length == 0 && mutation.removedNodes.length == 1){
                if(mutation.previousSibling && mutation.previousSibling.nodeName == "#comment" && mutation.target.offsetParent && mutation.target.offsetParent.id == "content-primary"){
                  if(!document.querySelector(".laris-processed")){
                    loaded_chats_idx = 0;
                    //log("reset");   
                  }
                }
              }
            });
          });
          observer1.observe(elemToObserve, {childList: true, subtree: true});
        });
        
        waitUntilElement("#content-primary .d-flex > .w-50",function(){
          if(!document.querySelector("#laris-filter")){
            var html = `
            <style>
              #laris-filter .btn-settings.opened i{
                color:#00B900 !important;
              }

              #laris-filter .dropdown-menu{
                grid-template-areas:
                  'header header'
                  'div1 div1'
                  'item1 item2'
                  'item3 item4'
                  'item5 item6'
                  'item7 item7'
                  'item8 item8'
                  'div2 div2'
                  'buttons buttons';
                grid-gap: 0px;
                z-index: 999;
              }

              #laris-filter .dropdown-menu.show{
                display:grid;
              }

              #laris-filter .group-date{
                min-width:275px;
              }

              #laris-filter .setting-title{
                font-weight:bold;
              }
            </style>
            <div id="laris-filter" class="dropdown btn-group text-nowrap mr-3" style="float: right;">
              <a class="text-body cursor-pointer btn-settings">
                <i class="las la-filter la-fw text-info"></i> 
              </a>
              
              <div class="dropdown-menu"> 
                <div class="dropdown-item disabled" style="grid-area:header">
                  <img src="https://laris.bionicprogram.com/img/favicon.png" style="margin-right:15px">
                  `+getTransText('titleFilterChat')+`
                </div>
                <div class="dropdown-divider" style="grid-area:div1"></div>
                <div class="dropdown-item" style="grid-area:item1">
                  <span class="setting-title">`+getTransText('labelStatusFilter')+`</span>
                  <div class="form-control-plaintext">
                    <div class="custom-control custom-radio mb-1">
                      <input value="" id="ff1" name="status_filter" type="radio" class="custom-control-input" checked>
                      <label for="ff1" class="custom-control-label">`+getTransText('labelShowAll')+`</label>
                    </div>
                    <div class="custom-control custom-radio mb-1">
                      <input value="friend" id="ff2" name="status_filter" type="radio" class="custom-control-input">
                      <label for="ff2" class="custom-control-label">`+getTransText('labelFriendOnly')+`</label>
                    </div>
                    <div class="custom-control custom-radio mb-1">
                      <input value="nonfriend" id="ff3" name="status_filter" type="radio" class="custom-control-input">
                      <label for="ff3" class="custom-control-label">`+getTransText('labelNonFriend')+`</label>
                    </div>
                  </div>
                </div>
                <div class="dropdown-item" style="grid-area:item2">
                  <span class="setting-title">`+getTransText('labelTagFilter')+`</span>
                  <div class="form-control-plaintext">
                    <div class="custom-control custom-radio mb-1">
                      <input value="" id="tf1" name="tag_filter" type="radio" class="custom-control-input" checked>
                      <label for="tf1" class="custom-control-label">`+getTransText('labelShowAll')+`</label>
                    </div>
                    <div class="custom-control custom-radio mb-1">
                      <input value="withtag" id="tf2" name="tag_filter" type="radio"class="custom-control-input">
                      <label for="tf2" class="custom-control-label">`+getTransText('labelWithTag')+`</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input value="notag" id="tf3" name="tag_filter" type="radio" class="custom-control-input">
                      <label for="tf3" class="custom-control-label">`+getTransText('labelNoTag')+`</label>
                    </div>
                  </div>
                </div>
                <div class="dropdown-item" style="grid-area:item3">
                  <span class="setting-title">`+getTransText('labelResponseFilter')+`</span>
                  <div class="form-control-plaintext">
                    <div class="custom-control custom-radio mb-1">
                      <input value="" id="rf1" name="response_filter" type="radio" class="custom-control-input" checked>
                      <label for="rf1" class="custom-control-label">`+getTransText('labelShowAll')+`</label>
                    </div>
                    <div class="custom-control custom-radio mb-1">
                      <input value="withresponse" id="rf2" name="response_filter" type="radio" class="custom-control-input">
                      <label for="rf2" class="custom-control-label">`+getTransText('labelWithResponse')+`</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input value="noresponse" id="rf3" name="response_filter" type="radio" class="custom-control-input">
                      <label for="rf3" class="custom-control-label">`+getTransText('labelNoResponse')+`</label>
                    </div>
                  </div>
                </div>
                <div class="dropdown-item" style="grid-area:item4">
                  <span class="setting-title">`+getTransText('labelReadFilter')+`</span>
                  <div class="form-control-plaintext">
                    <div class="custom-control custom-radio mb-1">
                      <input value="" id="rsf1" name="read_filter" type="radio" class="custom-control-input" checked>
                      <label for="rsf1" class="custom-control-label">`+getTransText('labelShowAll')+`</label>
                    </div>
                    <div class="custom-control custom-radio mb-1">
                      <input value="read" id="rsf2" name="read_filter" type="radio" class="custom-control-input">
                      <label for="rsf2" class="custom-control-label">`+getTransText('labelAlreadyRead')+`</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input value="unread" id="rsf3" name="read_filter" type="radio" class="custom-control-input">
                      <label for="rsf3" class="custom-control-label">`+getTransText('labelUnread')+`</label>
                    </div>
                  </div>
                </div>
                <div class="dropdown-item" style="grid-area:item5">
                  <span class="setting-title">`+getTransText('labelNickFilter')+`</span>
                  <div class="form-control-plaintext">
                    <div class="custom-control custom-radio mb-1">
                      <input value="" id="nf1" name="nick_filter" type="radio" class="custom-control-input" checked>
                      <label for="nf1" class="custom-control-label">`+getTransText('labelShowAll')+`</label>
                    </div>
                    <div class="custom-control custom-radio mb-1">
                      <input id="nf2" name="nick_filter" type="radio" value="yes" class="custom-control-input">
                      <label for="nf2" class="custom-control-label">`+getTransText('filterNickYes')+`</label>
                    </div>
                    <div class="custom-control custom-radio">
                      <input id="nf3" name="nick_filter" type="radio" value="no" class="custom-control-input">
                      <label for="nf3" class="custom-control-label">`+getTransText('filterNickNo')+`</label>
                    </div>
                  </div>
                </div>
                <div class="dropdown-item" style="grid-area:item6">
                  <span class="setting-title">`+getTransText('labelMessageFilter')+`</span>
                  <div class="form-control-plaintext">
                    <div class="custom-control custom-radio mb-1">
                      <input value="" id="mf1" name="message_switch" type="radio" class="custom-control-input" checked>
                      <label for="mf1" class="custom-control-label">`+getTransText('labelShowAll')+`</label>
                    </div>
                    <div class="custom-control custom-radio mb-1">
                      <input id="mf2" name="message_switch" type="radio" value="yes" class="custom-control-input">
                      <label for="mf2" class="custom-control-label">`+getTransText('filterMessageType')+`</label>
                    </div>
                    <select name="message_filter" class="custom-select" disabled>
                      <option value="text">`+getTransText('messageText')+`</option>
                      <option value="image">`+getTransText('messageImage')+`</option>
                      <option value="video">`+getTransText('messageVideo')+`</option>
                      <option value="audio">`+getTransText('messageAudio')+`</option>
                      <option value="file">`+getTransText('messageFile')+`</option>
                      <option value="sticker">`+getTransText('messageSticker')+`</option>
                    </select>
                  </div>
                </div>
                <div class="dropdown-item" style="grid-area:item7">
                  <div class="custom-control custom-checkbox">
                    <input value="1" id="sdf" type="checkbox" class="custom-control-input date-filter">
                    <label for="sdf" class="custom-control-label setting-title">`+getTransText('labelDateFilter')+`</label>
                  </div>
                  <div class="input-group group-date mt-2">
                    <select class="custom-select date-criteria">
                      <option value="last_received">`+getTransText('labelLastReceived')+`</option>
                      <option value="last_sent">`+getTransText('labelLastSent')+`</option>
                      <option value="last_read">`+getTransText('labelLastRead')+`</option>
                      <option value="last_talked">`+getTransText('labelLastTalked')+`</option>
                    </select>
                  </div>
                  <div class="input-group group-date">
                    <select class="custom-select date-compare">
                      <option value="=">`+getTransText('labelEqualToDate')+`</option>
                      <option value="<">`+getTransText('labelLessThanDate')+`</option>
                      <option value=">">`+getTransText('labelMoreThanDate')+`</option>
                      <option value="><">`+getTransText('labelBetweenDates')+`</option>
                    </select>
                  </div>
                  <div class="input-group group-date date-1">
                    <input type="date" class="form-control input-date-1" style="width:95px">
                    <input type="time" class="form-control input-time-1">
                  </div>
                  <div class="input-group group-date date-2">
                    <input type="date" class="form-control input-date-2" style="width:95px">
                    <input type="time" class="form-control input-time-2">
                  </div>
                </div>
                <div class="dropdown-item" style="grid-area:item8">
                  <div class="custom-control custom-checkbox">
                    <input value="0" id="srall" type="checkbox" class="custom-control-input all-filter">
                    <label for="srall" class="custom-control-label setting-title">`+getTransText('labelSearchAll')+`</label>
                  </div>
                </div>
                <div class="dropdown-divider" style="grid-area:div2"></div>
                <div class="dropdown-item" style="grid-area:buttons">

                  <a href="#" class="btn-apply btn btn-primary mr-2">`+getTransText('buttonApplyAndRefresh')+`</a>
                  <a href="#" class="btn-reset btn btn-secondary">`+getTransText('labelReset')+`</a>
                </div>
              </div>
            </div>
            `;
            var el = createElement(html);
            document.querySelector("#content-primary .d-flex > .w-50").appendChild(el);
            waitUntilElement("#laris-filter",function(){
              var settings = document.querySelector("#laris-filter");
              if("status_filter" in filter_settings){
                var el = settings.querySelector("[name='status_filter'][value='"+filter_settings["status_filter"]+"']");
                if(el) el.click();
              }
              if("tag_filter" in filter_settings){
                var el = settings.querySelector("[name='tag_filter'][value='"+filter_settings["tag_filter"]+"']");
                if(el) el.click();
              }
              if("response_filter" in filter_settings){
                var el = settings.querySelector("[name='response_filter'][value='"+filter_settings["response_filter"]+"']");
                if(el) el.click();
              }
              if("read_filter" in filter_settings){
                var el = settings.querySelector("[name='read_filter'][value='"+filter_settings["read_filter"]+"']");
                if(el) el.click();
              }
              if("nick_filter" in filter_settings){
                var el = settings.querySelector("[name='nick_filter'][value='"+filter_settings["nick_filter"]+"']");
                if(el) el.click();
              }
              settings.querySelector("[name='message_switch'][value='']").addEventListener("change",function(){
                settings.querySelector("[name='message_filter']").setAttribute("disabled","disabled");
              });
              settings.querySelector("[name='message_switch'][value='yes']").addEventListener("change",function(){
                settings.querySelector("[name='message_filter']").removeAttribute("disabled");
              });
              if("message_filter" in filter_settings && filter_settings["message_filter"] != ""){
                var el = settings.querySelector("[name='message_switch'][value='yes']");
                if(el) el.click();
                settings.querySelector("[name='message_filter']").value = filter_settings["message_filter"];
              }
              var date_filter = settings.querySelector(".date-filter");
              if("date_filter" in filter_settings){
                if(filter_settings["date_filter"] == 1){
                  date_filter.checked =  true;
                }
              }
              if("date_filter_criteria" in filter_settings){
                settings.querySelector('.date-criteria').value = filter_settings["date_filter_criteria"];
              }
              if("date_filter_compare" in filter_settings){
                settings.querySelector('.date-compare').value = filter_settings["date_filter_compare"];
              }
              if("date_filter_date1" in filter_settings){
                settings.querySelector('.input-date-1').value = filter_settings["date_filter_date1"];
              }
              if("date_filter_time1" in filter_settings){
                settings.querySelector('.input-time-1').value = filter_settings["date_filter_time1"];
              }
              if("date_filter_date2" in filter_settings){
                settings.querySelector('.input-date-2').value = filter_settings["date_filter_date2"];
              }
              if("date_filter_time2" in filter_settings){
                settings.querySelector('.input-time-2').value = filter_settings["date_filter_time2"];
              }

              var all_filter = settings.querySelector(".all-filter");
              if("all_filter" in filter_settings){
                if(filter_settings["all_filter"] == 1){
                  all_filter.checked =  true;
                }
              }

              var evt = document.createEvent("HTMLEvents");
                evt.initEvent("change", false, true);

              date_filter.addEventListener("change",function(){
                var groups = settings.querySelectorAll(".group-date");
                var self = this;
                groups.forEach(function(group){
                  if(self.checked){
                    if(group.classList.contains("date-2")){
                      if(settings.querySelector(".date-compare").value == "><"){
                        group.style = "";
                      }else{
                        group.style.display = "none";
                      }
                    }else{
                      group.style = "";
                    }
                    
                  }else{
                    group.style.display = "none";
                  }
                });
              });
              date_filter.dispatchEvent(evt);

                settings.querySelector(".date-compare").addEventListener("change",function(){

                  if(this.value == "><"){
                    settings.querySelector(".date-2").style = "";
                  }else{
                    settings.querySelector(".date-2").style.display = "none"; 
                  }
                });
                settings.querySelector(".date-compare").dispatchEvent(evt);

                var inputdate1 = settings.querySelector(".input-date-1");
                var inputdate2 = settings.querySelector(".input-date-2");
                var inputtime1 = settings.querySelector(".input-time-1");
                var inputtime2 = settings.querySelector(".input-time-2"); 


                settings.querySelector(".input-date-1").addEventListener("change",function(e){
                  document.dispatchEvent(new CustomEvent('onCheckDateSettings', {detail:Array.from(this.classList)}));
                });

                settings.querySelector(".input-time-1").addEventListener("change",function(){
                  document.dispatchEvent(new CustomEvent('onCheckDateSettings', {detail:Array.from(this.classList)}));
                });

                settings.querySelector(".input-date-2").addEventListener("change",function(){
                  document.dispatchEvent(new CustomEvent('onCheckDateSettings', {detail:Array.from(this.classList)}));
                });

                settings.querySelector(".input-time-2").addEventListener("change",function(){
                  document.dispatchEvent(new CustomEvent('onCheckDateSettings', {detail:Array.from(this.classList)}));
                });

                settings.querySelector(".btn-settings").addEventListener("click",function(){
                  if(!this.classList.contains("opened")){
                    this.classList.add("opened");
                    settings.querySelector(".dropdown-menu").classList.add("show");
                  }else{
                    this.classList.remove("opened");
                    settings.querySelector(".dropdown-menu").classList.remove("show");
                  }
                });

                settings.querySelector(".btn-apply").addEventListener("click",function(){
                  if(!current_improvements.includes("chat_filter")){
                    return document.dispatchEvent(new CustomEvent('onVipOnly', {}));
                  }

                  var tag_filter = settings.querySelector("[name='tag_filter']:checked").value;
                  var status_filter = settings.querySelector("[name='status_filter']:checked").value;
                  var response_filter = settings.querySelector("[name='response_filter']:checked").value;
                  var read_filter = settings.querySelector("[name='read_filter']:checked").value;
                  var nick_filter = settings.querySelector("[name='nick_filter']:checked").value;
                  var message_filter = settings.querySelector("[name='message_switch']:checked").value == "yes" ? settings.querySelector("[name='message_filter']").value : "";
                  var date_filter = settings.querySelector(".date-filter").checked ? 1 : 0;
                  var date_filter_criteria = settings.querySelector(".date-criteria").value;
                  var date_filter_compare = settings.querySelector(".date-compare").value;
                  var date_filter_date1 = settings.querySelector(".input-date-1").value;
                  var date_filter_time1 = settings.querySelector(".input-time-1").value;
                  var date_filter_date2 = settings.querySelector(".input-date-2").value;
                  var date_filter_time2 = settings.querySelector(".input-time-2").value;
                  var all_filter = settings.querySelector(".all-filter").checked ? 1 : 0;
                  filter_settings["status_filter"] = status_filter;
                  filter_settings["tag_filter"] = tag_filter;
                  filter_settings["response_filter"] = response_filter;
                  filter_settings["read_filter"] = read_filter;
                  filter_settings["nick_filter"] = nick_filter;
                  filter_settings["message_filter"] = message_filter;
                  filter_settings["date_filter"] = date_filter;
                  filter_settings["date_filter_criteria"] = date_filter_criteria;
                  filter_settings["date_filter_compare"] = date_filter_compare;
                  filter_settings["date_filter_date1"] = date_filter_date1;
                  filter_settings["date_filter_time1"] = date_filter_time1;
                  filter_settings["date_filter_date2"] = date_filter_date2;
                  filter_settings["date_filter_time2"] = date_filter_time2;
                  filter_settings["all_filter"] = all_filter;
                  simpanData(function(){
                    if(client_gesture) window.onbeforeunload = null;
                    window.location.reload();
                  })
                });

                settings.querySelector(".btn-reset").addEventListener("click",function(){
                  filter_settings = {};
                  simpanData(function(){
                    if(client_gesture) window.onbeforeunload = null;
                    window.location.reload();
                  });
                });
            });
          }

          if(!document.querySelector("#laris-filter-status")){
            var html = `
              <div id="laris-filter-status" class="text-center" style="background-color: #B8EBB8;display:none;font-size: 0.9em;padding: 2px;">
                `+getTransText('labelChatFilterIsActive').toUpperCase()+` - <a href="#">`+getTransText('labelReset')+`</a>
              </div>
              <div id="laris-filter-progress" class="text-center" style="background-color: #E7DB57;display:none;font-size: 0.9em;border-bottom: 1px solid #DEE2E6;padding: 2px;">
                `+getTransText('labelChatFilterProcessed')+` : <span class="processed">0</span> | `+getTransText('labelChatFilterDisplayed')+` : <strong class="filtered">0</strong>
              </div>
            `;
            var el = createElement(html);
            var target = document.querySelector("#content-primary > div");
            target.insertBefore(el,target.firstChild);
            waitUntilElement("#laris-filter-status",function(){
              if(JSON.stringify(filter_settings) != "{}"){
                document.querySelector("#laris-filter-status").style.display = "initial";
                document.querySelector("#laris-filter-progress").style.display = "initial";
              }
              document.querySelector("#laris-filter-status a").addEventListener("click",function(e){
                e.preventDefault();
                filter_settings = {};
                simpanData(function(){
                  if(client_gesture) window.onbeforeunload = null;
                  window.location.reload();
                });
              });
            });
          }
        });

        if(matchURL2(url,"*/chat/*")){
          //tampilkan tag sesuai warna di detail profile follower
          waitUntilElement("#content-thirdly",function(){
            if(Object.keys(tag_colors).length > 0){
              var tags = document.querySelectorAll("#content-thirdly .tag-link");
              if(tags.length > 0){
                tags.forEach(function(tag){
                  var options = tag.innerText in tag_colors ? tag_colors[tag.innerText] : null;
                  if(!current_improvements.includes("tag_color")){
                    options = null;
                  }
                  if(options){
                    tag.style = "background-color:"+options.color+";color:"+(options.light ? "black" : "white");
                  }
                });
              }
            }
          });
        }

      }

      waitUntilElement("#header-upper",function(){
        if(!document.querySelector("#laris-shortcut")){
          var html = `
          <style>
            

            #laris-shortcut .btn{
              border:1px solid #EDEFF0;
              background-color:#F8F9FA;
              color: rgb(73, 80, 87);
              padding: 6px;
              padding-left:8px;
              padding-right:8px;
              height:36px;
              margin-right:5px;
              line-height: initial;
            } 

            #laris-shortcut .btn-autoreply.active{
              border: 1px solid #00B900
            }

            #laris-shortcut .hidden{
              display:none !important;
            }

          </style>
          <div id="laris-shortcut" class="d-flex align-items-center">
            <a href="#" target="_blank" class="btn btn-permission d-flex align-items-center" title="`+getTransText("shortcutPermission")+`">
              <i class="las la-users"></i>
            </a>
            <a href="#" target="_blank" class="btn btn-clone d-flex align-items-center" title="`+getTransText("shortcutCloneTab")+`">
              <i class="las la-copy"></i>
            </a>
            
            `+(manifest && !("author" in manifest) ? `
            <a href="#" target="_blank" class="btn btn-help d-flex align-items-center" title="`+getTransText("buttonHelp")+`">
              <i class="las la-question-circle"></i>
            </a>
            ` : ``)
            +`
            <a href="#" target="_blank" class="btn btn-config d-flex align-items-center" title="`+getTransText("configTitle")+`">
              <i class="las la-gear"></i>
            </a>
            <a href="#" target="_blank" class="btn btn-autoreply d-flex align-items-center hidden" title="`+getTransText("titleAutoReply")+`">
              <i class="las la-reply-alt" style="margin-right:5px"></i>
              `+getTransText("nameAutoReply")+`
            </a>
          </div>`;
          var el = createElement(html);
          document.querySelector("#header-upper").appendChild(el);

  
          waitUntilElement("#laris-shortcut",function(){
            document.addEventListener('onApplyAccountConfig',function(e){
              delay_min = e.detail.delay_min;
              delay_max = e.detail.delay_max;
              rest_min = e.detail.rest_min;
              rest_max = e.detail.rest_max;

              var obj = {};
              obj["delay_min_"+line_id] = delay_min;
              obj["delay_max_"+line_id] = delay_max;
              obj["rest_min_"+line_id] = rest_min;
              obj["rest_max_"+line_id] = rest_max;
              browser.storage.local.set(obj);
            });

            var btn = null;
            btn = document.querySelector("#laris-shortcut .btn-autoreply");
            if(btn){
              if(current_improvements.includes("auto_reply")){
                btn.classList.remove("hidden");
              }
              if(auto_reply){
                btn.classList.add("active");
              }
              btn.addEventListener("click",function(e){
                e.preventDefault();
                if(content_port == null){
                  if(client_gesture) window.onbeforeunload = null;
                  window.location.reload();
                }
                content_port.postMessage({type:"manageAutoReply",data:line_id});
              });
            }
            btn = document.querySelector("#laris-shortcut .btn-permission");
            if(btn){
              btn.addEventListener("click",function(e){
                e.preventDefault();
                if(active_data == null){
                  if(client_gesture) window.onbeforeunload = null;
                }
                window.location.href = "https://manager.line.biz/account/"+line_data["basicSearchId"]+"/setting/user";
              });
            }
            btn = document.querySelector("#laris-shortcut .btn-clone");
            if(btn){
              btn.addEventListener("click",function(e){
                e.preventDefault();
                if(content_port == null){
                  if(client_gesture) window.onbeforeunload = null;
                  window.location.reload();
                }
                content_port.postMessage({type:"setupSession",data:{id:line_me.bizId,url:window.location.href,clone:true}});
              });
            }
            btn = document.querySelector("#laris-shortcut .btn-config");
            if(btn){
              btn.addEventListener("click",function(e){
                e.preventDefault();
                document.dispatchEvent(new CustomEvent('onAccountConfig', {detail:{
                  delay_min:delay_min,
                  delay_max:delay_max,
                  rest_min:rest_min,
                  rest_max:rest_max
                }}));
              });
            }
            btn = document.querySelector("#laris-shortcut .btn-help");
            if(btn){
              btn.addEventListener("click",function(e){
                e.preventDefault();
                document.dispatchEvent(new CustomEvent('onShowHelp', {detail:{
                  broadcast:active_data != null,
                  lang:current_lang
                }}));
              });
            }
          });
        }

        if(!document.querySelector("#laris-broadcast")){
          var html = `
          <style>
            .laris-backdrop{
              pointer-events: none;
              filter: blur(10px);
            }

            .swal2-html-container {
              text-align: justify
            }

            #laris-broadcast .btn{
              border: 1px solid #EDEFF0;
              color: rgb(73, 80, 87);
              padding: 6px;
              height:36px;
            } 

            #laris-broadcast .limitation{
              background-color: #F8F9FA;
              border-radius: 10px;
              font-size: 0.8em;
              padding: 5px;
              font-weight: bold;
            }
          </style>
          <div id="laris-broadcast" class="d-flex align-items-center">
            <a href="#" target="_blank" class="btn btn-prepare d-flex align-items-center">
              <img width="15px" src="https://laris.bionicprogram.com/img/favicon.png">
              <span class="ml-1">`+getTransText("labelBroadcast").toUpperCase()+`</span>
              <span id="laris-ration" class="ml-1 limitation" style="display:none"></span>
            </a>
          </div>`;
          var el = createElement(html);
          document.querySelector("#header-upper").appendChild(el);

          waitUntilElement("#laris-broadcast",function(){
            document.querySelector("#laris-broadcast .btn-prepare").addEventListener("click",function(e){
              e.preventDefault();
              if(broadcast_recovery && active_data == null){
                document.dispatchEvent(new CustomEvent('onBroadcastRecovery', {detail:null}));
              }else{
                launchSetupBroadcast();
              }
              if(!document.querySelector("#content-primary") && document.querySelector("#menu-btns > a")){
                document.querySelector("#menu-btns > a").click();
              }
            });
          });
        }

        if(!document.querySelector("#laris-schedule")){
          var html = `
          <style>
            #laris-schedule > div{
              border: 1px solid #EDEFF0;
                color: rgb(73, 80, 87);
                padding: 6px;
            }

            #laris-schedule .dropdown-menu{
              margin-top:-3px;
            }

            #laris-schedule .dropdown:hover .dropdown-menu{
              display: block;
            }

            #laris-schedule .dropdown-item span{
              float:right;
              cursor:pointer;
            }

            #laris-schedule .dropdown-item span i{
              color:red;
              font-weight:bold;
            }
          </style>
          <div id="laris-schedule" class="d-flex align-items-center ml-2" style="display:none !important">
            <div class="d-flex align-items-center dropdown">
              <span><i class="las la-calendar fa-fw mr-1"></i>`+getTransText("labelSchedules").toUpperCase()+`</span>
              <span class="bg-warning badge-sm tag ml-2 count" style="padding-top: 5px;">0</span>
              <div class="dropdown-menu"> 
              </div>
            </div>
            <div class="d-flex align-items-center">
              <span>`+getTransText("labelNextBroadcastIn")+`</span>
              <span class="ml-2 countdown" style="font-weight:bold">--:--:--</span>
            </div>
          </div>`;
          var el = createElement(html);
          document.querySelector("#header-upper").appendChild(el);
          waitUntilElement("#laris-schedule",function(){
            document.querySelector("#laris-schedule .dropdown").addEventListener("mouseenter",function(e){
              this.querySelector(".dropdown-menu").innerHTML = '';
              if(broadcast_schedules.length > 0){
                var html = "";
                var idx = 0;
                broadcast_schedules.forEach(function(entry){
                  html = html + `
                    <div class="dropdown-item d-flex" data-index="`+idx+`">
                      <span class="info">`+entry.schedule_text+`</span>
                      <span class="delete ml-2"><i class="las la-times la-fw"></i></span>
                        </div>
                  `;
                  idx++;
                });
                this.querySelector(".dropdown-menu").innerHTML = html;
                waitUntilElement("#laris-schedule .dropdown-item",function(){
                  var dropdowns = document.querySelectorAll("#laris-schedule .dropdown-item");
                  dropdowns.forEach(function(d){
                    d.querySelector(".info").addEventListener("click",function(){
                      if(this.classList.contains("clicked")) return;
                      this.classList.add('clicked');
                      var idx = parseInt(this.parentElement.getAttribute("data-index"));
                      var scd = broadcast_schedules[idx];
                      var schedule_name = "bc_"+line_id+"_"+scd.name;
                      browser.storage.local.get(schedule_name).then(function(item){
                        if(item){
                          document.dispatchEvent(new CustomEvent('onScheduleInfo', {detail:{
                            data:item[schedule_name],
                            idx:idx
                          }}));
                        }
                      });
                      this.classList.remove('clicked');
                    });
                    if(d.querySelector(".delete")){
                      d.querySelector(".delete").addEventListener("click",function(){
                        if(this.classList.contains("clicked")) return;
                        this.classList.add('clicked');
                        if(confirm(getTransText("areYouSure"))){
                          this.parentElement.remove();
                          document.dispatchEvent(new CustomEvent('onScheduleDelete', {
                            detail:{
                              idx:parseInt(this.parentElement.getAttribute("data-index")),
                            }
                          }));
                        }
                        this.classList.remove('clicked');
                      });
                    }
                  });
                });
              }else{  

                this.querySelector(".dropdown-menu").innerHTML = '<div class="dropdown-item">No broadcast schedule</div>';
              }
            });
          });
        }
      });

      waitUntilElement("#header-menu",function(){
        if(!document.querySelector("#laris-session") && current_improvements.includes("multi_admin")){
          var html = `
            <style>
              .user-name {
                max-width: 10rem !important;
              }

              #laris-session{
                margin-right:5px;
              }

              #laris-session .btn{
                border: 1px solid #EDEFF0;
                color: rgb(73, 80, 87);
                padding-left:10px;
                padding-right:10px;
                padding-top:6px;
                padding-bottom:6px;
                height:36px;
              }
            
              #laris-session .icon{
                color:#00B900 !important;
                font-size:1.1em;
              }

              #laris-session .info{
                width:100%;
              }

              #laris-session .info.expired{
                color:red;
              }

              #laris-session .hidden{
                display:none !important;
              }

              #laris-session .dropdown-menu{
                margin-top: -2px;
                margin-left: -2px;
                right: -2px;
                left: auto;
                max-height: 75vh;
                overflow-y: auto;
              }

              #laris-session .dropdown:hover .dropdown-menu{
                display: block;
              }

              #laris-session .dropdown-item{
                padding-left: 20px;
              }

              #laris-session .delete i{
                color: white;
                font-weight: bold;
                font-size: 1em;
                background-color: red;
                padding: 2px;
                border-radius: 5px;
              }

              #laris-session .delete-off i{
                color: white;
                font-weight: bold;
                font-size: 1em;
                background-color: gray;
                padding: 2px;
                border-radius: 5px;
              }

              #laris-session .color-mark{
                font-size: 0.5rem;
                margin-right: 10px;
              }

              #laris-session .avatar{
                width: 1.5rem !important;
                height: 1.5rem !important;
              }

              #laris-session .owner-mark{
                font-size: 0.8rem;
                margin-left: 10px;
              }

              #laris-session .gicon{
                font-size:1.1em;
              }

            </style>
            <div id="laris-session" class="d-flex align-items-center" title="`+getTransText("tipSwitchSession")+`">
              <a href="#" target="_blank" class="btn btn-new-session d-flex align-items-center">
                <i class="icon las la-user-plus text-success"></i>
                <span class="ml-1">`+getTransText("labelNewSession")+`</span>
              </a>
              <a href="#" class="btn btn-import-session d-flex align-items-center" title="`+getTransText("tipImportSession")+`">
                <i class="gicon las la-folder-users text-muted la-1x text-success"></i>
                <i class="gicon las la-sign-in text-muted la-1x text-success"></i>
              </a>
              <a href="#" class="dropdown btn btn-switch-session hidden d-flex align-items-center">
                <i class="icon las la-caret-down la-1x text-success"></i>
                <div class="dropdown-menu">
                </div>
              </a>
              <a href="#" class="btn btn-export-session hidden d-flex align-items-center" title="`+getTransText("tipExportSession")+`">
                <i class="gicon las la-download text-muted la-1x text-success"></i>
              </a>
            </div>`;
            var el = createElement(html);
            var target = document.querySelector("#header-menu");
            target.insertBefore(el,target.querySelector(":scope > *:first-child"));
            waitUntilElement("#laris-session",function(){
              document.querySelector("#laris-session .dropdown").addEventListener("mouseenter",function(e){
                this.querySelector(".dropdown-menu").innerHTML = '<div style="margin:0 auto" class="d-flex loader loader-primary loader-xs"></div>';
                if(Object.keys(admin_sessions).length > 0){
                  var html = '<h6 class="dropdown-header">'+getTransText("labelSwitchAdmin")+'</h6>';
                  var acc_name = line_data ? line_data.name : null;
                  for (const [key, value] of Object.entries(admin_sessions)) {
                    if(line_me && line_me.bizId == key){
                      continue;
                    }
                  
                    html = html + `
                    <div class="dropdown-item d-flex align-items-center cursor-pointer" data-id="`+key+`" data-expired="`+value.expired+`">
                      <span class="info`+(value.expired ? ' expired' : '')+`">
                      <i class="color-mark las la-circle" style="color:`+(("color" in value) ? value.color : "#868e96")+`"></i>`+
                     
                      (!("linePictureUri" in value.admin) || value.admin.linePictureUri == null || value.admin.linePictureUri == "" ? 
                      `<i class="las la-user-circle text-muted align-middle mr-2 flex-shrink-0"></i>`:
                      `<img class="avatar mr-2 rounded-circle" src="`+value.admin.linePictureUri+`">`)+
                      (!value.original ? value.admin.name : ('<b>'+value.admin.name+'</b>'))+`</span>`+
                      (line_owners && key in line_owners  ? `<i class="owner-mark las la-users" title="This account is a member of this OA `+(acc_name ? `(`+acc_name+`)`:``)+`"></i>` : ``)+
                      (!value.original ?  
                      `<span class="delete ml-2"><i class="las la-times la-fw"></i></span>`:
                      `<span class="delete-off ml-2"><i class="las la-times la-fw"></i></span>`)+`
                    </div>
                  `;
                 
                    
                  }
                  this.querySelector(".dropdown-menu").innerHTML = html;
                  waitUntilElement("#laris-session .dropdown-item",function(){
                    var dropdowns = document.querySelectorAll("#laris-session .dropdown-item");
                    dropdowns.forEach(function(d){
                      d.querySelector(".info").addEventListener("click",function(){
                        if(this.classList.contains("clicked")) return;
                        this.classList.add('clicked');
                        if(content_port == null){
                          if(client_gesture) window.onbeforeunload = null;
                          window.location.reload();
                        }
                        content_port.postMessage({type:"setupSession",data:{id:this.parentElement.getAttribute("data-id"),expired:this.parentElement.getAttribute("data-expired")}});
                        var el = this;
                        setTimeoutWorker(function(){
                          el.classList.remove('clicked');
                        },1000);
                      });
                      if(d.querySelector(".delete")){
                        d.querySelector(".delete").addEventListener("click",function(){
                          if(this.classList.contains("clicked")) return;
                          this.classList.add('clicked');
                          if(confirm(getTransText("areYouSure"))){
                            this.parentElement.remove();
                            content_port.postMessage({type:"destroySession",data:this.parentElement.getAttribute("data-id")});
                          }
                          var el = this;
                          setTimeoutWorker(function(){
                            el.classList.remove('clicked');
                          },1000);
                        });
                      }
                    });
                  });
                }else{
                  document.querySelector(".btn-switch-session").classList.add('hidden');
                }
              });
              document.querySelector("#laris-session .btn-new-session").addEventListener("click",function(e){
                e.preventDefault();
                if(content_port == null){
                  if(client_gesture) window.onbeforeunload = null;
                  window.location.reload();
                }
                content_port.postMessage({type:"setupSession",data:{expired:"true"}});
              });
              document.querySelector("#laris-session .btn-import-session").addEventListener("click",function(e){
                importSessions();
              });
              document.querySelector("#laris-session .btn-export-session").addEventListener("click",function(e){
                exportSessions();
              });
              var switcher = document.querySelector(".btn-switch-session");
              if(switcher){
                if(Object.keys(admin_sessions).length == 0 || (Object.keys(admin_sessions).length == 1 && line_me && line_me.bizId in admin_sessions)){
                  if(!switcher.classList.contains('hidden')) switcher.classList.add('hidden');
                }else{
                  if(switcher.classList.contains('hidden')) switcher.classList.remove('hidden');
                }
              }
              var exportses = document.querySelector(".btn-export-session");
              if(exportses){
                if(Object.keys(admin_sessions).length == 0 || (Object.keys(admin_sessions).length == 1 && line_me && line_me.bizId in admin_sessions)){
                  if(!exportses.classList.contains('hidden')) exportses.classList.add('hidden');
                }else{
                  if(exportses.classList.contains('hidden')) exportses.classList.remove('hidden');
                }
              }
            });
        }
      });

    }else if(url.startsWith("https://manager.line.biz")){

    }
  }
 
  

  
  function dataURItoBlob(dataURI) {
    try{
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(dataURI.split(',')[1]);

      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      var ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], {type: mimeString});
      return blob;
    }catch(e){
    }
  }

  

  function getRandomID(){
    var id = "";
    do {
      var id1 = Date.now();
      var id2 = Math.floor(Math.random()*90000000) + 10000000;
      id = id1+"_"+id2;
    }
    while (usedRandomIds.includes(id));
    usedRandomIds.push(id);
    return id;
  }

  function randomIntegerMs(min, max) {
    min = min*1000;
    max = max*1000;
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  function randomInteger(min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  function retryCountdown(){
    if(retry_times > 5 || retry_interval){
      return;
    }
    var count = 120*retry_times;
    retry_interval = setIntervalWorker(function(){
      el_retry.innerHTML = '<span><i class="las la-redo fa-fw mr-1"></i>'+getTransText("buttonRetry")+' ('+count+')'+'</span>';
      count--;
      if(count <= 0){
        clearIntervalWorker(retry_interval);
        retry_interval = null;
        setTimeoutWorker(function(){
          retryProcess();
        },1000);
      }
    },1000);
  }

  function closeCountdown(){
    var count = 10;
    close_interval = setIntervalWorker(function(){
      el_close.innerHTML = '<span><i class="las la-stop fa-fw mr-1"></i>'+getTransText("buttonClose")+' ('+count+')'+'</span>';
      count--;
      if(count <= 0){
        clearIntervalWorker(close_interval);
        close_interval = null;
        setTimeoutWorker(function(){
          closeProcess();
        },1000);
      }
    },1000);
  }

  function increaseProgress(){
    current_progress++;
    el_progress.innerHTML = current_progress+"/"+max_progress;
    checkIfFinished();
    //el_bar.value = successSentList/max_progress*100;
  }

  function checkIfFinished(){
    if(current_messages >= max_messages && is_fetching_done){
      current_progress = max_progress;
      el_progress.innerHTML = current_progress+"/"+max_progress;
      el_title.innerHTML = getTransText("broadcastCompleted");
      el_pause.style.display = "none";
      el_resume.style.display = "none";
      el_close.style.display = "initial";
      el_stop.style.display = "none";
      el_retry.style.display = "none";
      closeCountdown();
      setIndicator(2);
      if(process_type == "broadcast"){
        clearBroadcastRecovery();
        //saveCampaign(active_data.id,{sentList:successSentList,sent:successSentList.length,endedTime:Date.now()},"broadcast_result");
        var bid = active_data.id;
        updateBroadcastInDatabase(
        {
          ts_ended:Date.now(),
          failed_list:failedSentList
        },function(){
          reportBroadcast(bid,"broadcast_result",true);
        });
      }else{
        if(unsent_list.length > 0){
          unsent_list.forEach(function(id){
            //saveCampaign(id,{is_unsent:true},"unsend_result");
            var bid = id;
            updateBroadcastInDatabase(
            {
              ts_ended:Date.now(),
              failed_list:failedSentList
            },function(){
              reportBroadcast(bid,"unsend_result",true);
            });
          });
        }
      }
      if(content_port){
        content_port.postMessage({type:"stopBroadcast",data:{line_id:line_id}});
      }
      if(is_business_hours){
        setResponseHourEnabled(true,function(){
          var sets = {};
          sets["business_hours_"+line_id] = false;
          browser.storage.local.set(sets);
          is_business_hours = false;
        })
      }
      setTimeoutWorker(function(){
        process_running = false;
        active_data = null;
        process_stage = 2;
      },1000);
      return true;
    }else{
      return false;
    }
  }

  function waitUntilCondition(delegate){
    if(delegate() == false){
      setTimeoutWorker(function(){
        waitUntilCondition(delegate);
      },1000);
    }
  }

  function waitUntilElement(selector,callback){
    setTimeoutWorker(function(){
      var el = document.querySelector(selector);
      if(el){
        callback(el);
      }else{
        waitUntilElement(selector,callback);
      }
    },250);
  }

  function printLog(text,timer = 2){
    if(!text) return;
    document.dispatchEvent(new CustomEvent('onShowToast', {detail:{
     text: text,
     duration: timer*1000,
     gravity: 'bottom'
    }}));
  }

  function getTransText(name){
    if(langs == null){
      return name;
    }else{
      var str = name in langs  ? langs[name]["message"] : name;
      if(!manifest || !("author" in manifest)){
        if(name == "broadcastLimitationText"){
          str = str + "<br><a href='https://laris.bionicprogram.com/redirect/docs/"+langs['langCode']["message"]+"?route=general/troubleshoots.html#broadcast-has-a-big-delay' target='_blank'>("+('solutionText' in langs ? langs["solutionText"]["message"] : "?")+")</a>";
        }
      }
      return str;
    }
  }

  function setupUnsend(params){
    if(!document.querySelector("#laris-container")){
      buildBroadcastModal();
      return waitUntilElement("#laris-container",function(el){
        setupUnsend(params);
      });
    }

    active_data = params;
    retry_data = active_data;
    organizeUnsends(active_data.selected);
    customDelays = active_data.customdelays;    
    LIMIT_1 = active_data.customminutelimit;
    LIMIT_2 = active_data.customadminlimit;
    process_type = "unsend";
    el_title = document.querySelector("#laris-title");
    el_desc =  document.querySelector("#laris-desc");
    el_messages = document.querySelector("#laris-progress .p-message");
    el_progress = document.querySelector("#laris-progress .p-contact");
    el_delay = document.querySelector("#laris-progress .circular-container");
    el_bar = document.querySelector("#laris-progress progress");
    el_pause = document.querySelector("#laris-pause");
    el_pause.removeEventListener("click",pauseProcess);
    el_pause.addEventListener("click",pauseProcess);
    el_resume = document.querySelector("#laris-resume");
    el_resume.removeEventListener("click",resumeProcess);
    el_resume.addEventListener("click",resumeProcess);
    el_stop = document.querySelector("#laris-stop");
    el_stop.removeEventListener("click",stopProcess);
    el_stop.addEventListener("click",stopProcess);
    el_retry = document.querySelector("#laris-retry");
    el_retry.removeEventListener("click",retryProcess);
    el_retry.addEventListener("click",retryProcess);
    el_close = document.querySelector("#laris-close");
    el_close.removeEventListener("click",closeProcess);
    el_close.addEventListener("click",closeProcess);
    el_indicator = document.querySelector("#laris-indicator");
    el_bar.value = 0;
    total_speed = 0;
    user_ids = [];
    big_error_sent = false;
    usedRandomIds = [];
    successSentList = [];
    failedSentList = [];
    //renderLimit();
    showProcessor(true);

    getDataSetup(function(){
      el_pause.style.display = "none";
      el_resume.style.display = "none";
      el_close.style.display = "none";
      el_stop.style.display = "initial";
      el_retry.style.display = "none";
      processWatcher();
      for (var i = 0; i < Object.keys(unsent_messages).length; i++) {
        var key = Object.keys(unsent_messages)[i];
        var newuser = {
          id:key,
          name:'ID|'+key,
          icon:null,
          expires:null,
          tagIds:[],
          friend:true
        };
        ready_users.push(newuser);
      };
      prepareUnsend();
    });
  }

  function getDataSetup(callback){
    var obj = {};
    obj["broadcastAdmins"] = {};
    obj["original_admin"] = null;
    obj["currentImprovements"] = [];
    obj["remote_config_json"] = null;
    browser.storage.local.get(obj).then(function(item){
      original_admin = item["original_admin"];
      if(line_id in item["broadcastAdmins"]){
        broadcast_admins = {};
        item["broadcastAdmins"][line_id].forEach(function(admin){
          broadcast_admins[admin] = null;
        });
      };
      current_improvements = item["currentImprovements"];
      validateUserImprovements();
      remote_config = item["remote_config_json"];
      if(remote_config){
        var cfg = item["remote_config_json"];
        if("rest_min" in cfg){
          if(rest_min < cfg["rest_min"]) rest_min = cfg["rest_min"];
        }
        if("rest_max" in cfg){
          if(rest_max < cfg["rest_max"]) rest_max = cfg["rest_max"];
        }
        if("delay_min" in cfg){
          if(delay_min < cfg["delay_min"]) delay_min = cfg["delay_min"];
        }
        if("delay_max" in cfg){
          if(delay_max < cfg["delay_max"]) delay_max = cfg["delay_max"];
        }
        if("paralel_max" in cfg){
          paralel_max = cfg["paralel_max"];
        }
        if("message_max" in cfg){
          message_max = cfg["message_max"];
        }
      }
      if (typeof callback === "function") {
        callback();
      }
    });
  }

  function buildBroadcastModal(){
    var html = `
      <style>      
        /*! CSS Used from: Embedded */
        .lswal-container {
          display: grid;
          position: fixed;
          z-index: 2000;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          box-sizing: border-box;
          grid-template-areas: "top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";
          grid-template-rows: minmax(-webkit-min-content, auto) minmax(
              -webkit-min-content,
              auto
            ) minmax(-webkit-min-content, auto);
          grid-template-rows: minmax(min-content, auto) minmax(min-content, auto) minmax(
              min-content,
              auto
            );
          height: 100%;
          padding: 0.625em;
          overflow-x: hidden;
          transition: background-color 0.1s;
          -webkit-overflow-scrolling: touch;
        }
        .lswal-container.lswal-center {
          grid-template-columns: auto minmax(0, 1fr) auto;
        }
        .lswal-container.lswal-center > .lswal-popup {
          grid-column: 2;
          grid-row: 2;
          align-self: center;
          justify-self: center;
        }
        .lswal-popup {
          display: none;
          position: relative;
          box-sizing: border-box;
          grid-template-columns: minmax(0, 100%);
          width: 32em;
          max-width: 100%;
          padding: 0 0 1.25em;
          border: none;
          border-radius: 5px;
          background: #fff;
          color: #545454;
          font-family: inherit;
          font-size: 1rem;
        }
        .lswal-popup:focus {
          outline: 0;
        }
        .lswal-html-container {
          z-index: 1;
          justify-content: center;
          margin: 1em 1.6em 0.3em;
          padding: 0;
          overflow: auto;
          color: inherit;
          font-size: 1.125em;
          font-weight: 400;
          line-height: normal;
          text-align: center;
          word-wrap: break-word;
          word-break: break-word;
        }
        [class^="lswal"] {
          -webkit-tap-highlight-color: transparent;
        }
        .lswal-show {
          -webkit-animation: lswal-show 0.3s;
          animation: lswal-show 0.3s;
        }
        .lswal-container.lswal-no-backdrop {
          background-color: transparent !important;
          pointer-events: none;
        }
        .lswal-container.lswal-no-backdrop .lswal-popup {
          pointer-events: all;
        }
        .lswal-container.lswal-no-backdrop .lswal-modal {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
        /*! CSS Used from: Embedded */
        .lswal-container {
          display: flex;
          position: fixed;
          z-index: 1060;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 0.625em;
          overflow-x: hidden;
          transition: background-color 0.1s;
          -webkit-overflow-scrolling: touch;
        }
        .lswal-container.lswal-center {
          align-items: center;
        }
        .lswal-container:not(.lswal-top):not(.lswal-top-start):not(.lswal-top-end):not(.lswal-top-left):not(.lswal-top-right):not(.lswal-center-start):not(.lswal-center-end):not(.lswal-center-left):not(.lswal-center-right):not(.lswal-bottom):not(.lswal-bottom-start):not(.lswal-bottom-end):not(.lswal-bottom-left):not(.lswal-bottom-right):not(.lswal-grow-fullscreen)
          > .lswal-modal {
          margin: auto;
        }
        @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
          .lswal-container .lswal-modal {
            margin: 0 !important;
          }
        }
        .lswal-popup {
          display: none;
          position: relative;
          box-sizing: border-box;
          flex-direction: column;
          justify-content: center;
          width: 32em;
          max-width: 100%;
          padding: 1.25em;
          border: none;
          border-radius: 5px;
          background: #fff;
          font-family: inherit;
          font-size: 1rem;
        }
        .lswal-popup:focus {
          outline: 0;
        }
        [class^="lswal"] {
          -webkit-tap-highlight-color: transparent;
        }
        .lswal-show {
          -webkit-animation: lswal-show 0.3s;
          animation: lswal-show 0.3s;
        }
        .lswal-container.lswal-no-backdrop {
          top: auto;
          right: auto;
          bottom: auto;
          left: auto;
          max-width: calc(100% - 0.625em * 2);
          background-color: transparent !important;
        }
        .lswal-container.lswal-no-backdrop > .lswal-modal {
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        }
        .lswal-container.lswal-no-backdrop.lswal-center {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        /*! CSS Used from: Embedded */
        .lswal-html-container {
          text-align: justify;
        }
        /*! CSS Used keyframes */
        @-webkit-keyframes lswal-show {
          0% {
            transform: scale(0.7);
          }
          45% {
            transform: scale(1.05);
          }
          80% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lswal-show {
          0% {
            transform: scale(0.7);
          }
          45% {
            transform: scale(1.05);
          }
          80% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        @-webkit-keyframes lswal-show {
          0% {
            transform: scale(0.7);
          }
          45% {
            transform: scale(1.05);
          }
          80% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lswal-show {
          0% {
            transform: scale(0.7);
          }
          45% {
            transform: scale(1.05);
          }
          80% {
            transform: scale(0.95);
          }
          100% {
            transform: scale(1);
          }
        }

        @-webkit-keyframes rotating{
          from{
            -webkit-transform:rotate(0deg)
          }
          to{
            -webkit-transform:rotate(360deg)
          }
        }
        .rotating{
          -webkit-animation:rotating 2s linear infinite
        }
        .rotating-slow{
          -webkit-animation:rotating 4s linear infinite
        }
        .title-red{
          color:red;
        }

        .circular-container{
          background-color:red;
          width: 25px; /* Set the size of the progress bar */
          height: 25px;
          border-radius: 12.5px;
          position:relative;
          display:none;
          margin-left:10px;
        }

        .circular-container.on{
          display:inline-flex;
        }

        .circular-container .wrapper-bar {
          width: 25px; /* Set the size of the progress bar */
          height: 25px;
          position: absolute; /* Enable clipping */
          clip: rect(0px, 25px, 25px,12.5px); /* Hide half of the progress bar */
        }
        /* Set the sizes of the elements that make up the progress bar */
        .circular-container .circle-bar {
          width: 25px;
          height: 25px;
          border: 2.5px solid green;
          border-radius: 12.5px;
          position: absolute;
          clip: rect(0px, 12.5px, 25px, 0px);
          background-color:green;
        }
        /* Using the data attributes for the animation selectors. */
        /* Base settings for all animated elements */
        .circular-container div[data-anim~=base] {
          -webkit-animation-iteration-count: 1;  /* Only run once */
          -webkit-animation-fill-mode: forwards; /* Hold the last keyframe */
          -webkit-animation-timing-function:linear; /* Linear animation */
        }

        .circular-container.m60 .wrapper-bar[data-anim~=wrapper60] {
          -webkit-animation-duration: 0.01s; /* Complete keyframes asap */
          -webkit-animation-delay: 30s; /* Wait half of the animation */
          -webkit-animation-name: close-wrapper; /* Keyframes name */
        }

        .circular-container.m60 .circle-bar[data-anim~=left60] {
          -webkit-animation-duration: 60s; /* Full animation time */
          -webkit-animation-name: left-spin;
        }

        .circular-container.m60 .circle-bar[data-anim~=right60] {
          -webkit-animation-duration: 30s; /* Half animation time */
          -webkit-animation-name: right-spin;
        }

        .circular-container.m120 .wrapper-bar[data-anim~=wrapper120] {
          -webkit-animation-duration: 0.01s; /* Complete keyframes asap */
          -webkit-animation-delay: 60s; /* Wait half of the animation */
          -webkit-animation-name: close-wrapper; /* Keyframes name */
        }

        .circular-container.m120 .circle-bar[data-anim~=left120] {
          -webkit-animation-duration: 120s; /* Full animation time */
          -webkit-animation-name: left-spin;
        }

        .circular-container.m120 .circle-bar[data-anim~=right120] {
          -webkit-animation-duration: 60s; /* Half animation time */
          -webkit-animation-name: right-spin;
        }

        .circular-container.m3000 .wrapper-bar[data-anim~=wrapper3000] {
          -webkit-animation-duration: 0.01s; /* Complete keyframes asap */
          -webkit-animation-delay: 1500s; /* Wait half of the animation */
          -webkit-animation-name: close-wrapper; /* Keyframes name */
        }

        .circular-container.m3000 .circle-bar[data-anim~=left3000] {
          -webkit-animation-duration: 3000s; /* Full animation time */
          -webkit-animation-name: left-spin;
        }

        .circular-container.m3000 .circle-bar[data-anim~=right3000] {
          -webkit-animation-duration: 1500s; /* Half animation time */
          -webkit-animation-name: right-spin;
        }

        /* Rotate the right side of the progress bar from 0 to 180 degrees */
        @-webkit-keyframes right-spin {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(180deg);
          }
        }
        /* Rotate the left side of the progress bar from 0 to 360 degrees */
        @-webkit-keyframes left-spin {
          from {
            -webkit-transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
          }
        }
        /* Set the wrapper clip to auto, effectively removing the clip */
        @-webkit-keyframes close-wrapper {
          to {
            clip: rect(auto, auto, auto, auto);
          }
        }

        #laris-moreactions{
          position:relative;
        }

        #laris-moreactions .dropdown-menu{
          margin-top: 0px;
          margin-left: -2px;
          right: auto;
          left: 0px;
        }

        #laris-moreactions:hover .dropdown-menu{
          display: block;
        }

        #laris-moreactions .dropdown-item{
          padding-left: 20px;
        }

        #laris-desc .working{
          border-style: dotted;
        }

      </style>
      <div class="lswal-container lswal-no-backdrop lswal-center" style="overflow:visible" id="laris-container">
        <div class="lswal-popup lswal-modal lswal-show" role="dialog" style="display: grid;">
          <div class="lswal-html-container" style="display: block;overflow:visible">
            <div class="d-flex justify-content-center align-items-center mb-2">
              <img id="laris-indicator" class="rotating" width="50px" src="https://laris.bionicprogram.com/img/icon.png">
            </div>
            <div class="mb-2 text-center" style="font-weight: bold;" id="laris-title"></div>
            <div class="mb-2 text-center" id="laris-desc">--:--:--</div>
            <div class="text-center mb-1" id="laris-progress">
              <div style="align-items: center;display: flex;justify-content: center;">
                <i class="las la-envelope fa-fw mr-1"></i><span class="p-message">0</span>
                <i style="margin-left:10px" class="las la-user fa-fw mr-1"></i><span class="p-contact">0</span>
                <div class="circular-container" title="`+getTransText("broadcastLimitationTip")+`">
                  <div class="wrapper-bar" data-anim="base wrapper60">
                    <div class="circle-bar" data-anim="base left60"></div>
                    <div class="circle-bar" data-anim="base right60"></div>
                  </div>
                  <div class="wrapper-bar" data-anim="base wrapper120">
                    <div class="circle-bar" data-anim="base left120"></div>
                    <div class="circle-bar" data-anim="base right120"></div>
                  </div>
                  <div class="wrapper-bar" data-anim="base wrapper3000">
                    <div class="circle-bar" data-anim="base left3000"></div>
                    <div class="circle-bar" data-anim="base right3000"></div>
                  </div>
                </div>
              </div>
              <progress value="0" max="100" style="width:100%"></progress>
            </div>
            <div class="d-flex justify-content-center align-items-center mb-2">
              <a href="#" class="btn btn-sm btn-outline-info mr-2" id="laris-pause" style="display:none">
                <span><i class="las la-pause fa-fw mr-1"></i>`+getTransText("buttonPause")+`</span>
              </a>
              <a href="#" class="btn btn-sm btn-outline-info mr-2" id="laris-resume" style="display:none">
                <span><i class="las la-play fa-fw mr-1"></i>`+getTransText("buttonResume")+`</span>
              </a> 
              <a href="#" class="btn btn-sm btn-outline-info mr-2" id="laris-retry" style="display:none">
                <span><i class="las la-redo fa-fw mr-1"></i>`+getTransText("buttonRetry")+`</span>
              </a>
              <a href="#" class="btn btn-sm btn-outline-info mr-0" id="laris-stop" style="display:none">
                <span><i class="las la-stop fa-fw mr-1"></i>`+getTransText("buttonStop")+`</span>
              </a>
              <a href="#" class="btn btn-sm btn-outline-info mr-0" id="laris-close" style="display:none">
                <span><i class="las la-stop fa-fw mr-1"></i>`+getTransText("buttonClose")+`</span>
              </a>
              <a href="#" class="btn btn-sm btn-outline-info ml-2" id="laris-moreactions" title="`+getTransText("buttonMoreActions")+`" style="">
                <span><i class="las la-ellipsis-vertical fa-fw"></i></span>
                <div class="dropdown-menu">
                  <div class="dropdown-item d-flex align-items-center cursor-pointer" title="" id="laris-act-reportdev">
                    <span><i class="las la-megaphone mr-1"></i>`+getTransText("buttonActReportToDev")+`</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </
    `;
    var el = createElement(html);
    document.body.appendChild(el);
    document.dispatchEvent(new CustomEvent('onBlockNewChat', {detail:true}));
  }

  function setupBroadcast(bc){
    if(!document.querySelector("#laris-container")){
      buildBroadcastModal();
      return waitUntilElement("#laris-container",function(el){
        setupBroadcast(bc);
      });
    }

    bc.try = 'try' in bc ? bc.try+1 : 1;
    bc.id = "id" in bc ? bc.id : (bc.createdTime+"_"+line_id);
    
    active_data = bc;
    process_stage = 0;
    process_type = "broadcast";
    user_ids = [];
    big_error_sent = false;
    usedRandomIds = [];
    successSentList = [];
    failedSentList = [];
    ready_users = [];
    current_progress = -1;
    total_speed = 0;
    customDelays = active_data.customdelays;
    LIMIT_1 = active_data.customminutelimit;
    LIMIT_2 = active_data.customadminlimit;
    progress_data = {
      user:0,
      message:0,
      message2:0,
      max_users:0,
      max_messages:0
    };

    retry_data = {
      stage:"setup_broadcast",
      broadcast:active_data
    };

    el_title = document.querySelector("#laris-title");
    el_desc =  document.querySelector("#laris-desc");
    el_messages = document.querySelector("#laris-progress .p-message");
    el_progress = document.querySelector("#laris-progress .p-contact");
    el_delay = document.querySelector("#laris-progress .circular-container");
    el_bar = document.querySelector("#laris-progress progress");
    el_pause = document.querySelector("#laris-pause");
    el_pause.removeEventListener("click",pauseProcess);
    el_pause.addEventListener("click",pauseProcess);
    el_resume = document.querySelector("#laris-resume");
    el_resume.removeEventListener("click",resumeProcess);
    el_resume.addEventListener("click",resumeProcess);
    el_stop = document.querySelector("#laris-stop");
    el_stop.removeEventListener("click",stopProcess);
    el_stop.addEventListener("click",stopProcess);
    el_retry = document.querySelector("#laris-retry");
    el_retry.removeEventListener("click",retryProcess);
    el_retry.addEventListener("click",retryProcess);
    el_close = document.querySelector("#laris-close");
    el_close.removeEventListener("click",closeProcess);
    el_close.addEventListener("click",closeProcess);
    el_report_dev = document.querySelector("#laris-act-reportdev");
    el_report_dev.removeEventListener("click",reportProcessDev);
    el_report_dev.addEventListener("click",reportProcessDev);
    el_indicator = document.querySelector("#laris-indicator");
    if(agent_data == null){ //window.tippy_loaded && 

      tip_cooldown = tippy(el_delay);
      tip_cooldown.setProps({
        allowHTML: true,
        content: '',
        interactive: true,
        theme: 'translucent',
        animation: "scale",
        inertia: true,
        trigger: 'manual',
        hideOnClick: true,
        placement:'right',
        onShown(instance){
          setTimeoutWorker(function(){
            instance.hide();
          },30000)
        }
      });
    }

    setIndicator(1);
    el_bar.value = 0;
   
    
    //renderLimit();
    showProcessor(true);
    turnOnBroadcastButtons(["stop"]);
    el_title.innerHTML = getTransText("prepareBroadcastRequirement");

    if(!broadcast_recovery){
      var emessages = []
      if(active_data.messages && active_data.messages.length > 0){
        if(user_type == 1 && user_token != ""){
          var fmessages = [];
          try{
            active_data.messages.forEach(function(m){
              if(m.type == "text" && m.content.includes("https://bit.ly/laris_app")){
              }else{
                fmessages.push(m);
              }
            });
            active_data.messages = fmessages;
          }catch(e){
          }
        }

        active_data.messages.forEach(function(m){
          try{
            var data = null;
            if(m.type == "text"){
              data = {
                id:m.id,
                type:m.type,
                value:m.content_alt,
              };
            }else if(m.type == "file"){
              data = {
                id:m.id,
                type:m.type,
                value:[]
              };
              m.forEach(function(content){
                data.value.push({
                  name:content.name,
                  type:content.type,
                  size:content.size,
                });
              });
            }else{
              data = {
                id:m.id,
                type:m.type,
                value:m.value,
              };
            }
            emessages.push(data);
          }catch(e){
            
          }
        });
      }

      var edited_bc = JSON.parse(JSON.stringify(active_data));
      edited_bc.account = {id:line_id,name:line_data ? line_data.name : "-"};
      edited_bc.emessages = emessages;
      edited_bc.admins = broadcast_admins ? Object.keys(broadcast_admins) : [];
      edited_bc.improvements = current_improvements;
      edited_bc.original = original_admin;
      //saveCampaign(active_data.id,saving,"broadcast_start");

      var rid = Date.now();
      content_port.onMessage.addListener(function callbackSetupBroadcast(request){
        if(request.type == "idb_callback" && request.id == rid){
          reportBroadcast(active_data.id,"broadcast_start");
          var obj = {};
          obj["backup_bc_"+line_id] = active_data.id;
          browser.storage.local.set(obj);
          content_port.onMessage.removeListener(callbackSetupBroadcast);
        }
      });
      content_port.postMessage({
        type:"idb",
        id:rid,
        actions:[
          {
            mode:"insert",
            table:cnst["TBL_M_BBC"],
            values:[{
              bc_id:active_data.id,
              line_id:line_id,
              fetched_users:[],
              bc_setup:edited_bc,
              user_sent:progress_data.user,
              msg_idx_1:progress_data.message,
              msg_idx_2:progress_data.message2,
              max_users:progress_data.max_users,
              max_messages:progress_data.max_messages,
              ts_added:Date.now(),
              try:active_data.try
            }]
          }
        ]
      }); 
    }else{

      ready_users = broadcast_recovery.users;
      //if(ready_users.length > 0) ready_users.splice(0,broadcast_recovery.progress.user);
      
      successSentList = [];
      failedSentList = [];
      for (var i = ready_users.length - 1; i >= 0; i--) {
        var msg_sent = broadcast_recovery.sent.filter(item => item.chat_id === ready_users[i].id)
        var msg_length = active_data.messages.length+("messages" in ready_users[i] ? ready_users[i].messages.length-1 : 0);
        if(msg_sent && msg_sent.length >= msg_length){
          ids_sent.push(ready_users[i].id);
          ready_users.splice(i,1);
        }
      }
      
      if(broadcast_recovery.progress.message > active_data.messages.length-1){
        broadcast_recovery.progress.message = 0; //jika lebih dari index maka 0 in lagi
      }
      progress_data = broadcast_recovery.progress;
      if(progress_data.user != ids_sent.length && ids_sent.length > 0){
        progress_data.user = ids_sent.length;
      }
      max_progress = progress_data.max_users;
      max_messages = progress_data.max_messages;
      broadcast_recovery.sent.forEach(function(msg){
        if(msg.status == 200){
          successSentList.push(msg.type+"#"+msg.idx+"#"+msg.send_id+"#"+msg.status+"#"+msg.ts_added+"#"+msg.admin);
        }else{
          failedSentList.push(msg.type+"#"+msg.idx+"#"+msg.send_id+"#"+msg.status+"#"+msg.ts_added+"#"+msg.admin);
        }
      });
      updateBroadcastInDatabase(
      {
        try:active_data.try
      });
      // saveCampaign(active_data.id,{
      //   sent:successSentList.length,
      //   try:active_data.try
      // });
    }

    checkBroadcastBackground(function(status){
      if(!status){
        process_stage = -1;
        failed_message = getTransText("failedBroadcastRequirement");
        //failed_resumable = false;
        process_running = false;
        el_title.innerHTML = failed_message;
        setIndicator(-1);
        content_port.postMessage({type:"stopBroadcast",data:{line_id:line_id}});
        active_data = null;
        clearBroadcastRecovery();
        turnOnBroadcastButtons(["retry","close"]);
        retryCountdown();
        // setTimeoutWorker(function(){
        //   alert(getTransText("failedBroadcastRequirement"));
        // },2000);
        return;
      }

      processWatcher();
      if(active_data.try == 1 || (ready_users.length == 0 && active_data.isbcfetchsametime == false)){
        // if(active_data.fetch =c= 1){
        if(active_data.target == 3){
          if(active_data.sheetmethod == "name_photo"){
            getUsersFromSpreadsheetByNamePhoto();
          }else{
            getUsersFromSpreadsheetByID();
          }
        }else if(active_data.target == 4){
          getUsersFromCustomAPI(function(count){
            simpanData(function(){
              if(active_data.volmin > 1){
                if(active_data.volend == "number"){
                  ready_users.splice(active_data.volmax,ready_users.length);
                }
                ready_users.splice(0,active_data.volmin-1);
              }
              max_messages = (ready_users.length*(active_data.messages.length-1))+count;
              max_progress = ready_users.length;
              progress_data.max_users = max_progress;
              progress_data.max_messages = max_messages;
              //var obj = {};
              //obj["backup_users_"+line_id] = ready_users;
              //browser.storage.local.set(obj);
              updateBroadcastInDatabase(
              {
                fetched_users:ready_users
              });

              prepareBroadcast();
            });
          });
        }else{
          if(active_data.isbcfetchsametime == false){
            el_title.innerHTML = getTransText("statusFetching");
            fetchUsersForBroadcast();
          }else{
            prepareFetchAndBroadcast();
          }
        }
      }else if(active_data.try > 1){
        if(active_data.isbcfetchsametime == false){
          prepareBroadcast(broadcast_recovery.progress.user-1,
            broadcast_recovery.sent.length,
            broadcast_recovery.progress.message,
            broadcast_recovery.progress.message2);
        }else{
          prepareFetchAndBroadcast(broadcast_recovery.progress.user-1,
            broadcast_recovery.sent.length,
            broadcast_recovery.progress.message,
            broadcast_recovery.progress.message2);
        }
      }
    });
  }

  function prepareFetchAndBroadcast(curProgress = -1,curMessage = 0,curIdxMessages = 0,curIdxMessages2 = 0){
    process_stage = 1;
    process_paralel = [];
    process_queue = [];
    template_queue = [];
    paralel_done = 0;
    process_running = true;
    active_count = 0;
    inactive_count = 0;
    last_unix = Date.now();
    if(!broadcast_recovery){
      //jika bukan recovery maka save total dan started time
      updateBroadcastInDatabase(
      {
        ts_started:Date.now()
      });
      // saveCampaign(active_data.id,{
      //   total:max_messages,
      //   startedTime:Date.now()
      // });
    }
    current_progress = curProgress;
    current_messages = curMessage;
    total_speed = 0;
    process_count = current_progress;
    max_progress = max_progress;
    rest_last = 0;
    current_id = "";
    if(current_improvements.includes("divided_broadcast") && !remote_config){
      if(customDelays && "rest_min" in customDelays && "rest_max" in customDelays){
        if(rest_max < parseInt(customDelays["rest_max"])){
          rest_point = randomInteger(parseInt(customDelays["rest_min"]),parseInt(customDelays["rest_max"]));
        }else{
          rest_point = randomInteger(rest_min,rest_max);
        }
      }else{
        if(rest_max <= 3){
          rest_point = randomInteger(1,3);  
        }else{
          rest_point = randomInteger(rest_min,rest_max);
        } 
      }
    }else{
      rest_point = randomInteger(rest_min,rest_max);
    }
    increaseProgress();
    turnOnBroadcastButtons(["pause","stop"]);

    ambilCSRF(function(){
      makeSureChatModeManual(function(){
        var is_first = true;
        fetchUsersForBroadcast("",null,1,function(idx,user){
          if(user){

            max_progress = active_count;
            max_messages = active_count*active_data.messages.length;

            var max = getBroadcastRangeText();
            el_title.innerHTML = getTransText("broadcastSendingText")+max;
            el_messages.innerHTML = current_messages+"/"+max_messages;
            if(active_data.target == 1){
              //el_desc.innerHTML = getTransText("statusFetchAllInbox");
              el_progress.innerHTML = current_progress+"/"+max_progress;
            }else if(active_data.target == 2){
              //el_desc.innerHTML = getTransText("statusFetchByTags");
              el_progress.innerHTML = current_progress+"/"+max_progress;//+" ("+getTransText("statusUserChecked")+": <b>"+(all_users.length+inactive_count)+"</b>)";
            }

            ready_users.push(user);
            if(is_first){
              executeNextProcess();
              is_first = false;
            }
          }
        },
        function(current_page,next_page){
        },
        function(){
          is_fetching_done = true;
          if(all_users.length <= 0 && ready_users.length <= 0){
            cancelBroadcastNoTarget();
          }
        });
      });
    });
  }

  function checkBroadcastBackground(callback){
    var checkerTimeout = setTimeoutWorker(function(){
      content_port.onMessage.removeListener(prepareListener);
      getDataSetup(function(){
        callback(false);
      });
    },180000);
    var prepareListener = function(response){
      if(response.type == "broadcastChecked"){
        clearTimeoutWorker(checkerTimeout);
        checkerTimeout = null;
        content_port.onMessage.removeListener(prepareListener);
        if(response.data.status){
          active_data.messages = response.data.messages;
        }
        getDataSetup(function(){
          callback(response.data.status);
        });
      }
    };
    content_port.onMessage.addListener(prepareListener);
    content_port.postMessage({type:"checkBroadcast",data:{
      broadcast:active_data,
      line:line_data,
      admin:line_me,
    }});
  }

  function ambilTags(callback){
    var xobj = new XMLHttpRequest();
    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v1/bots/'+line_id+'/tags', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        if(xobj.status == "200"){
          var obj = JSON.parse(xobj.responseText);
          if(obj && obj.list){
            loaded_user_tags = {};
            obj.list.forEach(function(tag){
              loaded_user_tags[tag.tagId] = tag;
            });
            document.dispatchEvent(new CustomEvent('onContextUpdateTag', { detail: loaded_user_tags }));
          }
        }
        callback();
      }
    };
    xobj.send();  
  }

  function ambilMe(callback,admin = null){
    var xobj = new XMLHttpRequest();
    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v1/me', true);
    if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',admin);
    }
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        if(xobj.status == 200){
          //harusnya tidak perlu lapor me lagi
          //line_me = JSON.parse(xobj.responseText);
          // if(content_port){
          //   content_port.postMessage({type:"reportMe",data:line_me});
          // }
          callback(true,xobj.responseText);
        }else{
          if(xobj.status == 401 && xobj.responseText.includes("not_login")){
            //ini ngk guna, malah bikin ngaco kalau me nya admin lain
            //if(content_port) content_port.postMessage({type:"reportLogout",data:line_me});
          }
          callback(false,xobj.status);
        }
      }
    };
    xobj.send();  
  }

  function ambilCSRF(callback){
    var xobj = new XMLHttpRequest();
    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v1/csrfToken', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        var obj = null;
        try{
          obj = JSON.parse(xobj.responseText);    
        }catch(e){
          obj = xobj.responseText;
        }
        if(xobj.status == "200" && obj){
          callback();
        }else{
          process_stage = -1;
          failed_message = getTransText("cannotFindLine")+xobj.responseText;
          //failed_resumable = false;
          process_running = false;
          alert(failed_message);
        }
      }
    };
    xobj.send();  
  }

  function setResponseHourEnabled(enabled,callback){
    var xobj = new XMLHttpRequest();
    xobj.open('PUT', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v1/bots/'+line_id+'/settings/chatModeSchedules/enabled', true);
    xobj.withCredentials = true;
    xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xobj.setRequestHeader(x_client_version,line_client_version);
    xobj.setRequestHeader('x-xsrf-token', line_csrf);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        if (typeof callback === "function") {
          callback();
        }
      }
    };
    xobj.send('{"value":'+(enabled ? 'true' : 'false')+'}');
  }

  function makeSureChatModeManual(callback){
    var xobj = new XMLHttpRequest();
    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v4/bots/'+line_id+'/settings/chatMode', true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        var obj = null;
        try{
          obj = JSON.parse(xobj.responseText);    
          chat_mode = obj;
          if(obj && obj.current != "MANUAL" && line_me){
            is_smart_response = true;
            if(obj.setting && obj.setting.isBusinessHoursEnabled ){
              return setResponseHourEnabled(false,function(){
                var sets = {};
                sets["business_hours_"+line_id] = true;
                browser.storage.local.set(sets);
                is_business_hours = true;
                callback();
              })
            }else{
              callback();
            }
          }else{
            callback();
          }
        }catch(e){  
          callback();
        }
      }
    };
    xobj.send();  
  }

  function setIndicator(status){
    if(status == -1){
      if(el_indicator.classList.contains("rotating")) el_indicator.classList.remove("rotating");
      if(el_indicator.classList.contains("rotating-slow")) el_indicator.classList.remove("rotating-slow");
      if(!el_title.classList.contains("title-red")) el_title.classList.add("title-red");
    }else if(status == 0){
      if(el_indicator.classList.contains("rotating")) el_indicator.classList.remove("rotating");
      if(!el_indicator.classList.contains("rotating-slow")) el_indicator.classList.add("rotating-slow");
      if(!el_title.classList.contains("title-red")) el_title.classList.add("title-red");
    }else if(status == 1){
      if(el_indicator.classList.contains("rotating-slow")) el_indicator.classList.remove("rotating-slow");
      if(!el_indicator.classList.contains("rotating")) el_indicator.classList.add("rotating");
      if(el_title.classList.contains("title-red")) el_title.classList.remove("title-red");
    }else if(status == 2){
      if(el_indicator.classList.contains("rotating")) el_indicator.classList.remove("rotating");
      if(el_indicator.classList.contains("rotating-slow")) el_indicator.classList.remove("rotating-slow");
      if(el_title.classList.contains("title-red")) el_title.classList.remove("title-red");
    }
  }



  function getUsersFromCustomAPI(callback,data = null,message_count=0, next = ""){
    if(data == null){
      var idx = -1;
      for (var i = 0; i < active_data.messages.length; i++) {
        if(active_data.messages[i].type == "api"){
          data = active_data.messages[i].value;
          break;
        }
      }
      if(data == null){
        return cancelBroadcastNoTarget();
      }
    }
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        var data = null;
        try {
          data = JSON.parse(xhr.responseText);
        }
        catch(err) {
          data = null;
        }
        var message = "";
        if(xhr.status == "200"){  
          if(data && data.list){
            if(data.list.length > 0){
              el_title.innerHTML = getTransText("titleReadAPI");
              el_desc.innerHTML = getTransText("DescReadAPI");
              data.list.forEach(function(entry) {
                var newuser = {
                  id:entry.uid,
                  name:entry.uid,
                  messages: entry.msg
                };
                ready_users.push(newuser);
                el_progress.innerHTML ="<b>"+ready_users.length+" "+getTransText("Users")+", "+message_count+" "+getTransText("Messages")+"</b>";
                message_count = message_count + entry.msg.length;
              });
              if(data.next && data.next.trim() != ""){
                return callback(message_count);
              }else{
                return getUsersFromCustomAPI(callback,data,message_count,data.next);
              }
            }else{
              message = "Your response is empty. Please make sure the data is available.";
            }
          }else{
            message = "Your response format and structure is wrong. Please follow the requirements.";
          }
          el_desc.innerHTML = getTransText(message);
          setTimeoutWorker(function(){
            return callback(message_count);
          },5000);
        }else{
          var message = "";
          if(xhr.status == 429){
            message = "Too many requests. Please wait for 1 minute and then try again.";
          }else if(xhr.status == 413){
            message = "Your API response is too large. Please setup a pagination system to split the data (Recommended data in one request  : 500 users)";
          }else if(xhr.status == 404){
            message = "API not found. Please check your API URL and endpoint.";
          }else if(xhr.status == 500){
            message = "Error occured on your API. Please check your server.";
          }else{
            message = "Unknown error occured, please make sure your headers are correct or contact us to get help.";
          }
          setTimeoutWorker(function(){
            return callback(message_count);
          },5000);
        }
      }
    };
    const params = new URLSearchParams();
    params.set('endpoint', data.endpoint);
    params.set('uid', data.uid);
    params.set('heads', data.headers);

    xhr.open("GET", cnst[/* @mangle */"LARIS_MAIN_URL"/* @/mangle */]+'/api/recipients/api?'+params.toString(), true);
    xhr.send();
  }

  function getUsersFromSpreadsheetByID(){
    var data = {};
    var idx = -1;
    for (var i = 0; i < active_data.messages.length; i++) {
      if(active_data.messages[i].type == "spreadsheet"){
        idx = i;
        data = active_data.messages[i].value;
        break;
      }
    }
    const length = Object.keys(data).length;
    if(length == 0){
      return cancelBroadcastNoTarget();
    }

    active_count = 0;
    inactive_count = 0;
    el_desc.innerHTML = "";
    var message_count = 0;
    ready_users = [];
    el_title.innerHTML = getTransText("titleReadSpreadsheet");
    el_desc.innerHTML = getTransText("DescReadSpreadsheet");
    var is_id = false;
    for (const [key, value] of Object.entries(data)) {
      if(key.trim() == "") continue;

      var newuser = {
        id:key,
        name:key,
        messages: value
      };
      ready_users.push(newuser);
      
      
      el_progress.innerHTML ="<b>"+ready_users.length+" "+getTransText("Users")+", "+message_count+" "+getTransText("Messages")+"</b>";
      if(value == null){
        is_id = true;
      }else{
        message_count = message_count + value.length;
      }
    };
    simpanData(function(){
      if(active_data.volmin > 1){
        if(active_data.volend == "number"){
          ready_users.splice(active_data.volmax,ready_users.length);
        }
        ready_users.splice(0,active_data.volmin-1);
      }
      max_messages = (ready_users.length*(active_data.messages.length-1))+message_count;
      max_progress = ready_users.length;
      progress_data.max_users = max_progress;
      progress_data.max_messages = max_messages;
      // var obj = {};
      // obj["backup_users_"+line_id] = ready_users;
      // browser.storage.local.set(obj);
      updateBroadcastInDatabase(
      {
        fetched_users:ready_users
      });


      prepareBroadcast();
    });
  }

  function getUsersFromSpreadsheetByNamePhoto(){
    var data = {};
    var idx = -1;
    for (var i = 0; i < active_data.messages.length; i++) {
      if(active_data.messages[i].type == "spreadsheet"){
        idx = i;
        data = active_data.messages[i].value;
        break;
      }
    }
    const length = Object.keys(data).length;
    if(length == 0){
      return cancelBroadcastNoTarget();
    }

    active_count = 0;
    inactive_count = 0;
    el_desc.innerHTML = "";
    var message_count = 0;
    var temp_users = [];
    el_title.innerHTML = getTransText("titleReadSpreadsheet");
    el_desc.innerHTML = getTransText("DescReadSpreadsheet");
    fetchUsersForBroadcast("",null,1,
      function(idx,user){
        if(user){
          for (const [key, value] of Object.entries(data)) {
            if(key.trim() == "") continue;

            var splitted = key.split("|_#_|");
            var user_name = splitted[0];
            var user_picture = splitted[1];
  
            if(user.name == user_name && (user.icon == null || user_picture.includes(user.icon))){
              user.messages = value;
              temp_users.push(user);
              //el_progress.innerHTML ="<b>"+ready_users.length+" "+getTransText("Users")+", "+message_count+" "+getTransText("Messages")+"</b>";
              if(value){
                message_count = message_count + value.length;
              }
            }
          };
        }
        el_progress.innerHTML = "("+getTransText("statusUserChecked")+": <b>"+(all_users.length+inactive_count)+"</b>, "+getTransText("statusUserFound")+": <b>"+temp_users.length+"</b>)";
        el_messages.innerHTML = message_count;
      },
      function(current_page,next_page){

      },
      function(){
        ready_users = temp_users;
        if(active_data.volmin > 1){
          if(active_data.volend == "number"){
            ready_users.splice(active_data.volmax,ready_users.length);
          }
          ready_users.splice(0,active_data.volmin-1);
        }
        max_messages = (ready_users.length*(active_data.messages.length-1))+message_count;
        max_progress = ready_users.length;
        progress_data.max_users = max_progress;
        progress_data.max_messages = max_messages;
        // var obj = {};
        // obj["backup_users_"+line_id] = ready_users;
        // browser.storage.local.set(obj);
        updateBroadcastInDatabase(
        {
          fetched_users:ready_users
        });


        prepareBroadcast();
    });
    
  }

  function turnOnBroadcastButtons(arrays){
    el_pause.style.display = arrays.includes("pause") ? "initial" : "none";
    el_resume.style.display = arrays.includes("resume") ? "initial" : "none";
    el_retry.style.display = arrays.includes("retry") ? "initial" : "none";
    el_close.style.display = arrays.includes("close") ? "initial" : "none";
    el_stop.style.display = arrays.includes("stop") ? "initial" : "none";
  }

  function fetchUsersForBroadcast(next = "",admin = null,step = 1,callback_user = null,callback_page = null,callback_finish = null){
    var xobj = new XMLHttpRequest();
    var nxt = "";
    if(next != ""){
      nxt = "&next="+next;
    }
    if(step > 1 && step % LIMIT_1 == 0){
      if(admin == null && line_me){
        admin = line_me.bizId;
      }
      admin = getRandomAdmin(admin);
    }

    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR2"/* @/mangle */]+line_id+'/chats?folderType=ALL&tagIds=&limit=25'+nxt, true);
    xobj.setRequestHeader(x_client_version,line_client_version);
    if(line_me.bizId == admin || !admin){
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
    }else if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',admin);
    }
    var xobjTimeout = setTimeoutWorker(function(){
      xobj.abort();
    },60000);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        clearTimeoutWorker(xobjTimeout);
        xobjTimeout = null;
        if(xobj.status == "200"){
          var obj = JSON.parse(xobj.responseText);
          if(obj.list && obj.list.length > 0){
            var idx = 0;
            obj.list.forEach(function(entry) {
              var newuser = {
                id:entry.chatId,
                line:line_id,
                name:(entry.profile && entry.profile.name ? entry.profile.name : 'ID|'+entry.chatId),
                icon:(entry.profile && entry.profile.iconHash ? entry.profile.iconHash : null),
                expires:(entry.profile && entry.profile.lastActivityExpiresAt ? entry.profile.lastActivityExpiresAt : null),
                tagIds:entry.tagIds.join(','),
                friend:(entry.profile && entry.profile.friend ? entry.profile.friend : false),
                received:entry.lastReceivedAt
              };

              var filter_result = filterUsers(entry);
              if(filter_result){
                all_users.push(newuser);
                active_count++;
                if (typeof callback_user === "function") { 
                  callback_user(idx,newuser);
                }
              }else{
                inactive_count++;
                if (typeof callback_user === "function") {
                  callback_user(idx,null);
                }
              }

              
              if(active_data.isbcfetchsametime == false){
                var max = getBroadcastRangeText();
                el_title.innerHTML = getTransText("statusFetching")+max;
                if(active_data.target == 1){
                  el_desc.innerHTML = getTransText("statusFetchAllInbox");
                  el_progress.innerHTML = "("+getTransText("statusActive")+" : <b>"+active_count+"</b>, "+getTransText("statusInactive")+": <b>"+inactive_count+"</b>)";
                }else if(active_data.target == 2){
                  el_desc.innerHTML = getTransText("statusFetchByTags");
                  el_progress.innerHTML = "("+getTransText("statusUserChecked")+": <b>"+(all_users.length+inactive_count)+"</b>, "+getTransText("statusUserFound")+": <b>"+active_count+"</b>)";
                }else if(active_data.target == 3 && "sheetmethod" in active_data && active_data.sheetmethod == "name_photo"){
                  el_desc.innerHTML = getTransText("statusFetchMatchingByNamePhoto");
                }else{
                  el_desc.innerHTML = "";
                  el_progress.innerHTML = "("+getTransText("statusActive")+": <b>"+active_count+"</b>";
                }
              }
              idx++;
            });
          }

          var is_max = active_data.volend != "" && active_data.volmin == 1 && active_data.volmax > 0 && active_count >= active_data.volmax;
          if (typeof callback_user === "function") {
            callback_page(next,obj.next);
          }
          if(obj.next && obj.next != "" && !(is_max)){
            fetchUsersForBroadcast(obj.next,admin,(step+1),callback_user,callback_page,callback_finish);
          }else{
            // const duplicateArr = (arr, times) =>
            // Array(times)
            //     .fill([...arr])
            //     .reduce((a, b) => a.concat(b));
            // all_users = duplicateArr(all_users,100);
            // console.log(all_users);
            
            //content_port.postMessage({type:"idb",mode:"insert",table:cnst[/* @mangle */"TBL_USERS"/* @/mangle */],values:ready_users});
            if (typeof callback_finish === "function") {
              callback_finish();
            }else{
              ready_users = all_users;

              if(active_data.volmin > 1){
                if(active_data.volend == "number"){
                  ready_users.splice(active_data.volmax,ready_users.length);
                }
                ready_users.splice(0,active_data.volmin-1);
              }


              max_messages = ready_users.length*active_data.messages.length;
              max_progress = ready_users.length;
              progress_data.max_users = max_progress;
              progress_data.max_messages = max_messages;
              // var obj = {};
              // obj["backup_users_"+line_id] = ready_users;
              // browser.storage.local.set(obj);
              updateBroadcastInDatabase(
              {
                fetched_users:ready_users
              });

              prepareBroadcast();
            }
          }
        }else if(xobj.status == "401"){ // && xobj.responseText.includes("not_login")
          loggedOutProcedure(admin,function(){
            delayRemove();
            fetchUsersForBroadcast(next,admin,step,callback_user,callback_page,callback_finish);
          },getTransText("statusFetching"));
        }else{
          failed_message = "";
          process_running = false;
          setIndicator(-1);
          if(xobj.status == 0){
            failed_message = getTransText("errorFetchUsersTimeout");
          }else{
            failed_message = getTransText("warningServerError");
          }
          turnOnBroadcastButtons(["retry","stop"]);
          el_title.innerHTML = failed_message;
          retry_data.stage = "fetch_users";
          retry_data.params = {
            next:next,
            admin:admin,
            step:step
          };
          retryCountdown();
        } 
      }
    };
    xobj.send();
  }
  
  function updateBroadcastInDatabase(extra_data = null,callback = null){
    var val_data = {
      user_sent:progress_data.user,
      msg_idx_1:progress_data.message,
      msg_idx_2:progress_data.message2,
      max_users:progress_data.max_users,
      max_messages:progress_data.max_messages
    };
    if(extra_data){
      val_data = {...val_data, ...extra_data};
    }
    var id = Date.now();
    if (typeof callback === "function") {
      content_port.onMessage.addListener(function callbackUpdateBCInDatabase(request){
        if(request.type == "idb_callback" && request.id == id){
          callback();
          content_port.onMessage.removeListener(callbackUpdateBCInDatabase);
        }
      });
    }
    content_port.postMessage({
      type:"idb",
      id:id,
      actions:[
        {
          mode:"update",
          table:cnst["TBL_M_BBC"],
          value:val_data,
          where:{
            bc_id:active_data.id,
          }
        }
      ]
    }); 
  }

  function getBroadcastRangeText(){
    var max = "";
    if(active_data.volume == "range"){
      if(active_data.volmin > 0 && active_data.volmax > 0){
        if(active_data.volmin == 1 && active_data.volend != ""){
          max = (active_data.volmin == 1 && active_data.volmax > 0 ? " ("+getTransText("statusMax")+" : "+(active_data.volmax)+")" : "");
        }else{
          if(active_data.volend != ""){
            var finish = active_data.volmax;
            max = " ("+getTransText("textStartAt")+" : <b>"+(active_data.volmin)+"</b>, "+getTransText("textFinishAt")+" : <b>"+(finish)+"</b>)";
          }else{
            max = " ("+getTransText("textStartAt")+" : <b>"+(active_data.volmin)+"</b> "+getTransText("textUntilMaximum")+")";
          }
        }
      }
    }
    return max;
  }

  function filterUsers(entry){
    if(entry.status == "active" && (entry.profile != null && (entry.profile.friend || entry.profile.lastActivityExpiresAt == null || (entry.profile.lastActivityExpiresAt != null && entry.profile.lastActivityExpiresAt > Date.now())))){
      if(active_data.isbcfetchsametime){
        if((active_count+inactive_count)+1 < active_data.volmin){
          return false;
        }
      }
      if(active_data.volend != ""){
        if(active_data.volmin == 1 && active_data.volmax > 0 && all_users.length >= active_data.volmax){
          return false; 
        }
      }
      if(active_data.target == 2){
        var found = true;
        if(entry.tagIds != null){
          if(active_data.excludetags){
            active_data.excludetags.forEach(function(t){
              //jika user tagnya ada di exclude, maka skip dan return
              if(entry.tagIds.includes(t.tagId)){
                found = false;
              }
            });
          }
          if(found && active_data.includetags && active_data.includetags.length > 0){
            //jika tidak di exclude, maka filter lagi include
            found = false;
            active_data.includetags.forEach(function(t){
              if(entry.tagIds.includes(t.tagId)){
                found = true;
              }
            });
          }
        }else{
          if(active_data.includetags && active_data.includetags.length > 0){
            found = false;
          }
        } 
        if(found){
          if(!user_ids.includes(entry.chatId)){
            user_ids.push(entry.chatId);
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }else{
        if(!user_ids.includes(entry.chatId)){
          user_ids.push(entry.chatId);
          return true;
        }else{
          return false;
        }
      }
      return true;
    }else{
      return false;
    }
  }

  function prepareUnsend(){
    if(ready_users.length > 0){
      setIndicator(1);
      el_title.innerHTML = getTransText("statusReadyToSend");
      el_progress.innerHTML = getTransText("statusActive")+" : <b>"+ready_users.length+"</b>";
      ready_timeout = setTimeoutWorker(function(){
        if(process_stage < 0){
          process_running = false;
          return;
        }
        process_stage = 1;
        max_progress = ready_users.length;
        max_messages = ready_users.length*1;
        current_progress = -1;
        current_messages = 0;
        increaseProgress();
        total_speed = 0;
        process_count = 0;
        rest_last = 0;
        current_id = "";
        if(!remote_config){
          if(customDelays && "rest_min" in customDelays && "rest_max" in customDelays){
            if(rest_max < parseInt(customDelays["rest_max"])){
              rest_point = randomInteger(parseInt(customDelays["rest_min"]),parseInt(customDelays["rest_max"]));
            }else{
              rest_point = randomInteger(rest_min,rest_max);
            }
          }else{
            if(rest_max <= 3){
              rest_point = randomInteger(1,3);  
            }else{
              rest_point = randomInteger(rest_min,rest_max);
            } 
          }
        }else{
          rest_point = randomInteger(rest_min,rest_max);
        }
        el_pause.style.display = "initial";
        el_resume.style.display = "none";
        el_stop.style.display = "initial";
        el_title.innerHTML = getTransText("broadcastUnsendingText");
        ambilCSRF(function(){
          executeNextProcess();
        });
      },5000);
    }else{
      cancelBroadcastNoTarget();
    }
  }

  function prepareBroadcast(curProgress = -1,curMessage = 0,curIdxMessages = 0,curIdxMessages2 = 0){
    if(ready_users.length > 0){
      setIndicator(1);
      
      var max = getBroadcastRangeText();
      
      el_desc.innerHTML = getTransText("titlePleaseStandby")+max;
      el_title.innerHTML = getTransText("statusReadyToSend");
      el_progress.innerHTML = "("+getTransText("statusActive")+" : <b>"+ready_users.length+"</b>, "+getTransText("statusInactive")+" : <b>"+inactive_count+"</b>)";
      ready_timeout = setTimeoutWorker(function(){
        if(process_stage < 0){
          process_running = false;
          return;
        }
        process_stage = 1;
        process_paralel = [];
        process_queue = [];
        template_queue = [];
        paralel_done = 0;
        process_running = true;
        last_unix = Date.now();
        if(!broadcast_recovery){
          //jika bukan recovery maka save total dan started time
          // saveCampaign(active_data.id,{
          //   total:max_messages,
          //   startedTime:Date.now()
          // });
          updateBroadcastInDatabase(
          {
            ts_started:Date.now()
          });
        }
        if(Object.keys(unsent_messages).length > 0){
          for (var i = Object.keys(unsent_messages).length - 1; i >= 0; i--) {
            var key = Object.keys(unsent_messages)[i];
            var idx = ready_users.findIndex(item => item.id === key);
            if(idx == -1){
              var newuser = {
                id:key,
                name:'ID|'+key,
                icon:null,
                expires:null,
                tagIds:[],
                friend:true
              };
              ready_users.unshift(newuser);
            }   
            max_messages = max_messages + (unsent_messages[key].length);
          };
        }
        current_progress = curProgress;
        current_messages = curMessage;
        increaseProgress();
        total_speed = 0;
        process_count = current_progress;
        rest_last = 0;
        current_id = "";
        if(current_improvements.includes("divided_broadcast") && !remote_config){
          if(customDelays && "rest_min" in customDelays && "rest_max" in customDelays){
            if(rest_max < parseInt(customDelays["rest_max"])){
              rest_point = randomInteger(parseInt(customDelays["rest_min"]),parseInt(customDelays["rest_max"]));
            }else{
              rest_point = randomInteger(rest_min,rest_max);
            }
          }else{
            if(rest_max <= 3){
              rest_point = randomInteger(1,3);  
            }else{
              rest_point = randomInteger(rest_min,rest_max);
            } 
          }
        }else{
          rest_point = randomInteger(rest_min,rest_max);
        }
        turnOnBroadcastButtons(["pause","stop"]);
        is_fetching_done = true;
        el_title.innerHTML = getTransText("broadcastSendingText");
        ambilCSRF(function(){
          makeSureChatModeManual(function(){
            executeNextProcess(curIdxMessages,curIdxMessages2);
          });
        });
      },5000);
    }else{
      cancelBroadcastNoTarget();
    }
  }

  function cancelBroadcastNoTarget(){
    process_stage = -1;
    failed_message = getTransText("warningNoTarget");
    //failed_resumable = false;
    process_running = false;
    el_title.innerHTML = failed_message;
    setIndicator(-1);
    el_pause.style.display = "none";
    el_resume.style.display = "none";
    el_retry.style.display = "initial";
    el_close.style.display = "initial";
    el_stop.style.display = "none";
    content_port.postMessage({type:"stopBroadcast",data:{line_id:line_id}});
    active_data = null;
    clearBroadcastRecovery();
    setTimeoutWorker(function(){
      alert(getTransText("broadcastStoppedText"));
    },2000);
  }

  function verifikasiAkses(tabid,userid,token,callback,trycount = 5){
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('POST', cnst[/* @mangle */"LARIS_MAIN_URL"/* @/mangle */]+'/api/users/request2', true);
    xobj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xobj.onreadystatechange = function(){
      if (xobj.readyState == 4) {
        var response = null;
        try{
          response = JSON.parse(xobj.responseText);
        }catch(e){
          response = null;
        }
        if (xobj.status == '200' && response && response.ration != null) {
          //content_port.postMessage({type:"changeRation",ration:response.ration});
          user_ration = response.ration;
          if(response.ration > 0){
            return callback(true,true,"");
          }else{
            var obj2 = {};
            browser.storage.local.set(obj2);
            return callback(false,false,getTransText("warningLimitReached"));
          }
        } else {
            if(trycount > 0){
            trycount--;
            verifikasiAkses(tabid,userid,token,callback,trycount);
          }else{
            return callback(false,false,getTransText("errorConnection")+xobj.responseText);
          }
        }
      }
    };
    xobj.send('id='+userid+'&token='+token);
   }

  function cleanString(str) {
    var a = {};
    a[str] = 1;
    return JSON.stringify(a).slice(2, -4);
  }

  function getUserInfo(id,callback){
    var xobj = new XMLHttpRequest();
    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v1/bots/'+line_id+'/users?userIds='+id, true);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        var obj = "";
        try{
          obj = JSON.parse(xobj.responseText);    
        }catch(e){
          obj = "";
        }
        if(xobj.status == "200" && obj.list.length > 0){
          user_infos[id] = obj.list[0];
          callback(obj.list[0].name);
        }else{
          callback("");
        }
      }
    };
    xobj.send();  
  }


  function processTextMesage(user,message,callback){
    var content = "";
    var emojis = [];
    var stop = false;
    if('value' in message){
      message.value.ops.forEach(function(value){
        if(value && value.insert){
          if(!(typeof value.insert === 'string')){
            if('emojiManager' in value.insert){
              try{
                content = content + String.fromCodePoint("0x"+value.insert.emojiManager.key);
              }catch(e){
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"parse-emoji-manager",
                  message:e.toString()
                }});
              }
            }else if('emojiChat' in value.insert){
              try{
                emojis.push({
                  emojiId:value.insert.emojiChat.key,
                  index:content.length,
                  length:1,
                  productId:value.insert.emojiChat.id
                });
                content = content + '$';
              }catch(e){
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"parse-emoji-chat",
                  message:e.toString()
                }});
              }
            }else if('placeholder' in value.insert){
              if(value.insert.placeholder.id == "name"){
                if(user.name == null){
                  stop = true;
                  return getUserInfo(user.id,function(name){
                    user.name = name;
                    processTextMesage(user,message,callback);
                  });
                }else if(user.name != ""){
                  content = content + user.name;
                }
              }
            }
          }else{
            content = content + value.insert;
          }
        }
      });
    }else if('content_alt' in message){
      content = message.content;
    }else if('content' in message){
      content = message.content;
    }
    if(stop) return;
    //content = replace(parseSpintax(content),'</br>','\\n').replace(/"/g,'\\"');
    //content = parseSpintax(content);
    content = replace(cleanString(content),'</br>','\\n');
    content = replace(content,'<br>','\\n');
    //content = replace(content,'\n','\\n');
    if(content.substring(content.length-2) == "\\n"){ //jika ada enter diakhir yg tidak diinginkan maka hapus
      content = content.substring(0,content.length-2);
    }
    callback(content,emojis)
  }

  function executeNextProcess(idx = 0,idx2 = 0){
    if(process_stage < 0){
      process_running = false;
      return;
    }

    if(anti_crashing) return;

    // if(process_pausing){
    //   process_pausing = false;
    //   process_paused = true;
    //   process_idx = idx;
    //   process_running = false;
    //   el_resume.style.display = "initial";
    //   return;
    // }

    var user = ready_users[0];
    var message = null;
    var is_last = false;
    var m_length = "messages" in active_data ? active_data.messages.length : 0;

    if(unsent_list.length > 0 && user && user.id && user.id in unsent_messages && idx == 0){
      var uidx = 0;
      unsent_messages[user.id].forEach(function(sendid){
        placeProcessOnQueue({
          type:"unsendMessage",
          user:user,
          sendid:sendid,
          last:(uidx == unsent_messages[user.id].length-1),
        });
        uidx++;
      });
    }


    if(process_type == "broadcast"){
      if(user){
        //console.log(user);
        //console.log("idx:"+idx+" idx2:"+idx2);
        if("messages" in user && user.messages && idx2 < user.messages.length && broadcast_recovery){
          let match = broadcast_recovery.sent.find(item => item.idx == idx && item.idx2 == idx2 && item.chat_id == user.id);
          if (match) {
            //console.log("matched on user messages idx:"+idx+" idx2:"+idx2);
            idx2++;
            return executeNextProcess(idx,idx2);
          }
        }else if(idx < m_length && broadcast_recovery){
          //jika recovery dan pesan sudah pernah terkirim maka jgn dikirim lagi
          let match = broadcast_recovery.sent.find(item => item.idx == idx && item.chat_id == user.id);
          if (match) {
            //console.log("matched on main messages idx:"+idx+" idx2:"+idx2);
            idx++;
            idx2 = 0;
            //console.log(idx);
            return executeNextProcess(idx,idx2);
          }
        }
        is_last = idx >= m_length;
      }else{
        is_last = true;
      }
    }else if(process_type == "unsend"){
      is_last = true; 
    }

    if(is_last || user == null || user.id == null || user.id == current_id){
      current_id = user != null ? user.id : "";
      //log_process.push("last "+current_id);
      ready_users.shift();
      return waitUntilCondition(function(){
        if(active_data){
          if(active_data.isbcfetchsametime == false){
            if(ready_users.length > 0 && process_queue.length < paralel_max){
              executeNextProcess(0);
              return true;
            }else{
              executeProcessQueue();
              return true;
            }
          }else if(active_data.isbcfetchsametime == true){
            if(ready_users.length > 0 || (is_fetching_done && process_queue.length > 0)){
              if(ready_users.length > 0 && process_queue.length < paralel_max){
                executeNextProcess(0);
                return true;
              }else{
                executeProcessQueue();
                return true;
              }
            }else{
              if(checkIfFinished()){
                return true;
              }else{
                return false;
              }
            }
          }
        }else{
          return true;
        }
      })
      
    }
    //log_process.push("placing "+current_id+" idx "+idx);

    if(process_type == "broadcast"){ 
      var message = active_data.messages[idx];
      if(message.type == "text"){
        processTextMesage(user,message,function(content,emojis){
          var request = {
            type:"sendText",
            index:idx,
            user:user,
            content:content,
            emojis:emojis,
            last:idx == m_length-1,
          };
          placeProcessOnQueue(request,function(){
            idx++;
            executeNextProcess(idx);
          });
        });
      }else if(message.type == "sticker"){
        placeProcessOnQueue({
          type:"sendSticker",
          index:idx,
          user:user,
          content:message.value,
          last:idx == m_length-1,
        },function(){
          idx++;
          executeNextProcess(idx);
        });
      }else if(message.type == "coupon"){
        placeProcessOnQueue({
          type:"sendCoupon",
          index:idx,
          user:user,
          content:message.value,
          last:idx == m_length-1,
        },function(){
          idx++;
          executeNextProcess(idx);
        });
      }else if(message.type == "file"){
        placeProcessOnQueue({
          type:"sendFile",
          index:idx,
          user:user,
          last:idx == m_length-1,
          contents:message.contents
        },function(){
          idx++;
          executeNextProcess(idx);
        });
      }else if(message.type == "card"){
        placeProcessOnQueue({
          type:"sendCard",
          index:idx,
          user:user,
          content:message.value.id,
          last:idx == m_length-1,
        },function(){
          idx++;
          executeNextProcess(idx);
        });
      }else if(message.type == "spreadsheet"){
        if(user.messages){
          for (var i = idx2; i < user.messages.length; i++) {
            const m = user.messages[i];
            if(m.type == 'coupon'){
              placeProcessOnQueue({
                type:"sendCoupon",
                index:idx,
                user:user,
                content:m.value,
                last:(idx == m_length-1 && i == user.messages.length-1),
              },function(){
                idx++;
                executeNextProcess(idx);
              });
            }else{
              placeProcessOnQueue({
                type:"sendText",
                index:idx,
                user:user,
                content:m.value,
                last:(idx == m_length-1 && i == user.messages.length-1),
              },(i == user.messages.length-1) ? function(){
                idx++;
                executeNextProcess(idx);
              } : function(){});
            }
          };
        }else{
          placeProcessOnQueue({
            type:"sendNothing",
            index:idx,
            user:user,
            content:null,
            last:idx == m_length-1,
          },function(){
            idx++;
            executeNextProcess(idx);
          });
        }
      }else if(message.type == "api"){
        if(user.messages){
          for (var i = idx2; i < user.messages.length; i++) {
            const m = user.messages[i];
            placeProcessOnQueue({
              type:"sendText",
              index:idx,
              index2:i,
              user:user,
              content:m,
              last:(idx == m_length-1 && i == user.messages.length-1),
            },(i == user.messages.length-1) ? function(){
              idx++;
              executeNextProcess(idx);
            } : function(){});
          }
        }else{
          placeProcessOnQueue({
            type:"sendNothing",
            index:idx,
            user:user,
            content:null,
            last:idx == m_length-1,
          },function(){
            idx++;
            executeNextProcess(idx);
          });
        }
      }
    }
  }

  function placeProcessOnQueue(request,callback = null){
    if(last_id != request.user.id){
      if(template_queue.length > 0){
        process_queue.splice(0,0,template_queue);
      }
      template_queue = [];
    }
    last_id = request.user.id;

    template_queue.push(request);
    
    if(request.last){
      process_queue.splice(0,0,template_queue);
      template_queue = [];
    }
    
    if(process_queue.length >= paralel_max && paralel_done == 0){
      executeProcessQueue();
    }

    if (typeof callback === "function") {
      callback();
    }
    //placed_process.push(request);
  }

  function queueResendMessage(request){
    resend_queue.push(request);
  }

  function clearBroadcastRecovery(callback = null){
    browser.storage.local.remove(["backup_bc_"+line_id]).then(function(){
      fetchAccount(function(){
        if (typeof callback === "function") {
          callback(false);
        }
      });
      // content_port.onMessage.addListener(function callbackClearRecovery(request){
      //   if(request.type == "idb_callback" && request.id == "delete_"+line_id){
      //     fetchAccount(function(){
      //       if (typeof callback === "function") {
      //         callback(false);
      //       }
      //     });
      //     content_port.onMessage.removeListener(callbackClearRecovery);
      //   }
      // });
      // content_port.postMessage({
      //   type:"idb",
      //   id:"delete_"+line_id,
      //   actions:[{
      //     mode:"delete",
      //     table:cnst["TBL_D_BSENT"],
      //     where:{
      //       line_id:line_id
      //     }
      //   },
      //   {
      //     mode:"delete",
      //     table:cnst["TBL_M_BBC"],
      //     where:{
      //       line_id:line_id
      //     }
      //   }]
      // });
    });
  }

  function executeProcessQueue(){
    if(is_processing){
      return false;
    }
    is_processing = true;
    if(process_queue.length > 0){
      for (var i = process_queue.length - 1; i >= 0; i--) {
        if(process_queue[i].length > 0 && process_paralel.length < paralel_max){
          process_paralel.push(process_queue[i]);
          //executed_process.push(process_queue[i]);
          process_queue.splice(i,1);
        }
      }
      for (var i = 0; i < process_paralel.length; i++) {
        if(!("processed" in process_paralel[i])){
          executeChildProcess(i,0);
        }
      }
    }
    is_processing = false;
  }

  function increaseParalel(){
    paralel_done++;
    if(paralel_done >= process_paralel.length){
      process_paralel = [];
      paralel_done = 0;
      waitTime = 0;
      if(!anti_crashing) executeProcessQueue();
    }
  }



  function executeChildProcess(idxData,idxChildProcess){
    var data = process_paralel[idxData];
    if(data == null) return;
    process_paralel[idxData].processed = true;
    
    var callback = function(request = null,xobj = null,increment_message = true){
      if(increment_message){
        current_messages++;
        if(temp_message_sent == 0){
          temp_message_start = secondElapsed;
        }
        temp_message_sent++;
      }

      el_messages.innerHTML = current_messages+"/"+max_messages;
      el_bar.value = current_messages/max_messages*100;

      if(request){
        if(request.last){
          increaseProgress();
          ids_sent.push(request.user.id);
          if("ai" in data){
            setManualMessage(request.user.id,false);
          }
        }

        if(increment_message){
          if(notification_users.length > 0){
            notification_users.forEach(function(id){
              var usr = {
                id:id,
              };
              var ctn = current_progress+`. `+request.user.name+`\n 
              \n
              `+(request.index+1)+`/`+max_messages+`, `+request.type+` 
              `;
              placeProcessOnQueue({
                type:"sendText",
                index:0,
                user:usr,
                content:ctn,
                emojis:[],
                last:true,
              });
            });
          }

          try{
            progress_data.user = current_progress;
            progress_data.message = request.index+1;
            progress_data.message2 = 'index2' in request ? request.index2+1 : 0;
            progress_data.max_users = max_progress;
            progress_data.max_messages = max_messages;
            updateBroadcastInDatabase();

            var now = Date.now();
            if(xobj && xobj.status == 200){
              successSentList.push(request.type+"#"+request.index+"#"+request.sendId+"#"+(xobj ? xobj.status : -1)+"#"+now+"#"+request.admin);
            }else{
              failedSentList.push(request.type+"#"+request.index+"#"+request.sendId+"#"+(xobj ? xobj.status : -1)+"#"+now+"#"+request.admin);
            }
            content_port.postMessage({
              type:"idb",
              actions:[
                {
                  mode:"insert",
                  table:cnst["TBL_D_BSENT"],
                  values:[{
                    type:request.type,
                    bc_id:active_data.id,
                    line_id:line_id,
                    idx:request.index,
                    idx2:'index2' in request ? request.index2 : 0,
                    chat_id:request.user.id,
                    send_id:request.sendId,
                    status:xobj ? xobj.status : null,
                    ts_added:now
                  }]
                }
              ]
            });
          }catch(exp){
            console.log(exp);
            content_port.postMessage({type:"sendLog",data:{
              type:"error",
              source:"update_broadcast_progress",
              message:exp.stack
            }});
          }   
        }
      }
      

      var nextidx = idxChildProcess+1;
      if(nextidx < data.length){
        executeChildProcess(idxData,nextidx);
      }else{
        increaseParalel();
      }
    };
    if(idxChildProcess == 0){
      start_unix = Date.now();
    }
    
    var request = data[idxChildProcess];
    request.admin = getReadyAdmin();
    processSendMessage(idxChildProcess,request,callback,idxData);
  }

  function processSendMessage(idxChildProcess,request,callback,idxData){
    if(process_pausing || process_paused){
      process_pausing = false;
      process_paused = true;
      process_idx = request.index;
      process_running = false;
      el_resume.style.display = "initial";
      return setTimeoutWorker(function(){
        processSendMessage(idxChildProcess,request,callback,idxData);
      },1000);
    }

    if(active_data == null){
      return;
    }

    if(request.admin && !(request.admin in admin_sent_1)){
      admin_sent_1[request.admin] = 0;
    }
    if(request.admin && !(request.admin in admin_sent_2)){
      admin_sent_2[request.admin] = 0;
    }
    if(request.admin && !(request.admin in admin_total_sent)){
      admin_total_sent[request.admin] = 0;
    }
    if(admin_sent_1[request.admin] < LIMIT_1 && request.admin){
      delayRemove();
      if(request.type != "sendNothing"){

        increaseAdminSent(request.admin);
        //admin_sent_1[request.admin] += 1;
        // if(admin_sent_1[request.admin] >= LIMIT_1){
        //   broadcast_admins[request.admin] = Date.now();
        // }
      }
      
      process_idx = request.index;
      
      //if(idxChildProcess == 0){
      if((user_type != 1 || user_token == "") && current_messages >= parseInt(/* @mangle */"5000"/*@/mangle */) && process_running){
        process_stage = -1;
        failed_message = getTransText(/* @mangle */"warningLimitReached"/*@/mangle */);
        //failed_resumable = false;
        process_running = false;
        el_resume.style.display = "none";
        el_pause.style.display = "none";
        el_stop.style.display = "none";
        el_retry.style.display = "none";
        el_close.style.display = "initial";
        el_title.innerHTML = failed_message;
        setIndicator(-1);

        if(process_type == "broadcast"){
          clearBroadcastRecovery();
          //saveCampaign(active_data.id,{sentList:successSentList,sent:successSentList.length,endedTime:Date.now()},"broadcast_result");
          var bid = active_data.id;
          updateBroadcastInDatabase(
          {
            failed_list:failedSentList,
            ts_ended:Date.now()
          },function(){
            reportBroadcast(bid,"broadcast_result",true);
          });
        }else{
          if(unsent_list.length > 0){
            unsent_list.forEach(function(id){
              //saveCampaign(id,{is_unsent:true},"unsend_result");
              var bid = id;
              updateBroadcastInDatabase(
              {
                failed_list:failedSentList,
                ts_ended:Date.now()
              },function(){
                reportBroadcast(bid,"unsend_result",true);
              });
            });
          }
        }
        if(content_port){
          content_port.postMessage({type:"stopBroadcast",data:{line_id:line_id}});
        }
        if(is_business_hours){
          setResponseHourEnabled(true,function(){
            var sets = {};
            sets["business_hours_"+line_id] = false;
            browser.storage.local.set(sets);
            is_business_hours = false;
          })
        }
        active_data = null;
        return;
      }

      waitTime = randomInteger(0,300);
      if((secondElapsed-rest_last) >= rest_point){
        if(current_improvements.includes("divided_broadcast") && !remote_config){
          if(customDelays && "rest_min" in customDelays && "rest_max" in customDelays){
            if(rest_max < parseInt(customDelays["rest_max"])){
              rest_point = randomInteger(parseInt(customDelays["rest_min"]),parseInt(customDelays["rest_max"]));
            }else{
              rest_point = randomInteger(rest_min,rest_max);
            }
          }else{
            if(rest_max <= 3){
              rest_point = randomInteger(1,3);  
            }else{
              rest_point = randomInteger(rest_min,rest_max);
            } 
          }
          if("delay_min" in customDelays && "delay_max" in customDelays){
            if(delay_max < parseInt(customDelays["delay_max"])){
              waitTime = randomIntegerMs(parseInt(customDelays["delay_min"]),parseInt(customDelays["delay_max"]));
            }else{
              waitTime = randomIntegerMs(delay_min,delay_max);
            }
          }else{
            if(delay_max < 1){
              waitTime = randomIntegerMs(0.5,1);
            }else{
              waitTime = randomIntegerMs(delay_min,delay_max);
            }
          }
        }else{
          waitTime = randomIntegerMs(delay_min,delay_max);
          rest_point = randomInteger(rest_min,rest_max);
        }
        if(waitTime > 60000){
          waitTime = 60000;
        }
        if(secondElapsed-rest_last >= waitTime){
          rest_last = secondElapsed;
        }
      }
      //}
      if(idxChildProcess == 0){
        process_count++;
      }

      setTimeoutWorker(function(){
        let can_send = true;
        if(is_idle1day && !isWithinLast7Days(request.user.received)){
          printLog("💬 "+(request.user.name ? request.user.name : request.user.id)+" 🚫24h🚫(idle user)");
          can_send = false;
        }
        if(can_send){
          executeTasksBeforeSend(idxChildProcess == 0,request,function(){
            if(request.type == "sendText"){
              sendText(request,callback); 
            }else if(request.type == "sendFile"){
              if('send_file_method' in server_configs && server_configs['send_file_method'] == 'new'){
                sendFile(request,callback);
              }else{
                sendFileOld(request,callback);
              }
            }else if(request.type == "sendSticker"){
              sendSticker(request,callback);
            }else if(request.type == "sendCoupon"){
              sendCoupon(request,callback); 
            }else if(request.type == "sendCard"){
              sendCard(request,callback); 
            }else if(request.type == "unsendMessage"){
              unsendMessage(request,callback);
            }else{
              callback(request,null,request.type == "sendNothing" ? false : true);
            }
          },idxData);
        }else{
          increaseAdminSent(request.admin,-1)
          callback(request,null,true);
        }
      },waitTime);
    }else{
      var prev_admin = request.admin;
      request.admin = getReadyAdmin(prev_admin);
      if(request.admin && prev_admin != request.admin){
        return setTimeoutWorker(function(){
          processSendMessage(idxChildProcess,request,callback,idxData);
        },1000);
      }else{
        //calculateSpeed(1);
        delaySetOn60(true);
        callback_queue.push(function(){
          request.admin = getReadyAdmin(prev_admin);
          processSendMessage(idxChildProcess,request,callback,idxData);
        });
      }
    }
  }

  function delaySetOn60(showTip=false){
    if(!el_delay.classList.contains("on")){
      el_delay.classList.add("on");
      if(el_delay.classList.contains("m120")){
        el_delay.classList.remove("m120");
      }
      if(el_delay.classList.contains("m3000")){
        el_delay.classList.remove("m3000");
      }
      if(!el_delay.classList.contains("m60")){
        el_delay.classList.add("m60");
        setIndicator(0);
        if(tip_cooldown && showTip){
          try{
            if(current_improvements.includes("divided_broadcast") && current_improvements.includes("multi_admin") && Object.keys(broadcast_admins).length > 1){
              tip_cooldown.setProps({
                content: getTransText("adminCountNotEnough").replace('{COUNT}',Object.keys(broadcast_admins).length),
              });
            }else{
              tip_cooldown.setProps({
                content: (getTransText("yourSpeedSlow")+'<br><a href="https://laris.bionicprogram.com/redirect/docs/'+(langs ? langs['langCode']["message"] : 'en')+'?route=general/troubleshoots.html#broadcast-has-a-big-delay" target="_blank" class="btn btn-sm btn-danger p-0 pl-2 pr-2 mb-1 mt-1">'+getTransText("clickToLearnHow")+'</a>'),
              });
            }
            tip_cooldown.show();
          }catch(e){
          }
        }
      }
    }
  }

  function delayRemove(){
    if(el_delay.classList.contains("on")){
      el_delay.classList.remove("on");
      if(el_delay.classList.contains("m60")){
        el_delay.classList.remove("m60");
        setIndicator(1);
        if(tip_cooldown){
          tip_cooldown.hide();
        }
      }
      if(el_delay.classList.contains("m120")){
        el_delay.classList.remove("m120");
      }
      if(el_delay.classList.contains("m3000")){
        el_delay.classList.remove("m3000");
      }
    }
  }

  function delaySetOn120(){
    if(!el_delay.classList.contains("on")){
      el_delay.classList.add("on");
      if(el_delay.classList.contains("m60")){
        el_delay.classList.remove("m60");
      }
      if(el_delay.classList.contains("m3000")){
        el_delay.classList.remove("m3000");
      }
      if(!el_delay.classList.contains("m120")){
        el_delay.classList.add("m120");
      }
    }
  }

  function delaySetOn3000(){
    if(!el_delay.classList.contains("on")){
      el_delay.classList.add("on");
      if(el_delay.classList.contains("m60")){
        el_delay.classList.remove("m60");
      }
      if(el_delay.classList.contains("m120")){
        el_delay.classList.remove("m120");
      }
      if(!el_delay.classList.contains("m3000")){
        el_delay.classList.add("m3000");
      }
    }
  }


  function getUserMessages(id,backward,callback){
    var xobj = new XMLHttpRequest();
    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v2/bots/'+line_id+'/messages/'+id+(backward ? "backward="+backward : ""), true);
    xobj.withCredentials = true;
    xobj.timeout = 60000;
    xobj.setRequestHeader(x_client_version,line_client_version);
    xobj.setRequestHeader('x-xsrf-token', line_csrf);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        if(xobj.status == 200){
          var json = JSON.parse(xobj.responseText);
          if(json && json.list){
            if(!(id in user_messages)){
              user_messages[id] = [];
            }
            user_messages[id] = user_messages[id].concat(json.list);
            message_backwards[id] = json.backward;
          }
        }
        callback();
      }
    };
    xobj.send();
  }

  function setManualMessage(id,enable,callback){
    var xobj = new XMLHttpRequest();
    xobj.open('PUT', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v1/bots/'+line_id+'/chats/'+id+'/useManualChat', true);
    xobj.timeout = 60000;
    xobj.withCredentials = true;
    xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xobj.setRequestHeader(x_client_version,line_client_version);
    xobj.setRequestHeader('x-xsrf-token', line_csrf);
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        if (typeof callback === "function") {
          callback();
        }
      }
    };
    xobj.send('{"value":'+(enable ? 'true' : 'false')+'}');
  }

  function executeTasksBeforeSend(enable,request,callback,idxParalel = -1){
    if(enable){
      // getUserMessages(request.user.id,null,function () {
        
      // });
      var xobj = new XMLHttpRequest();
      xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+'api/v1/bots/'+line_id+'/chats/'+request.user.id+'/useManualChat', true);
      xobj.withCredentials = true;
      xobj.timeout = 60000;
      xobj.setRequestHeader(x_client_version,line_client_version);
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4) {
          var isManual = true;
          if(xobj.status == 200){
            var obj = JSON.parse(xobj.responseText);
            if(obj && !obj.value){
              isManual = false;
              if(idxParalel > -1 && process_paralel[idxParalel]){
                process_paralel[idxParalel].ai = true;
              }
            }
          }
          if(!isManual && is_smart_response){
            setManualMessage(request.user.id,true,function(){
              if(checkDevMessageMinuteLimitation()){
                setTimeoutWorker(function(){
                  executeTasksBeforeSend(false,request,callback,idxParalel);
                },1000);
              }else{
                callback();
              }
            });
          }else{
            if(checkDevMessageMinuteLimitation()){
              setTimeoutWorker(function(){
                executeTasksBeforeSend(false,request,callback,idxParalel);
              },1000);
            }else{
              callback();
            }
          }
        }
      };
      xobj.send();
    }else{
      if(checkDevMessageMinuteLimitation()){
        setTimeoutWorker(function(){
          executeTasksBeforeSend(false,request,callback,idxParalel);
        },1000);
      }else{
        callback();
      }
    }
  }

  function checkDevMessageMinuteLimitation(){
    if(temp_message_sent >= message_max && message_max > 0){
      return true;
    }else{
      return false;
    }
  }

  var modalTimeout = null;

  function processWatcher(){
    if(active_data != null){
      setTimeoutWorker(function(){
        try{
          if(modalTimeout == null){
            modalTimeout = document.evaluate("//span[contains(.,'Your session has timed out. Please log in again.')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if(!modalTimeout) modalTimeout = document.evaluate("//span[contains(.,'หมดเวลาเข้าสู่ระบบแล้ว โปรดเข้าสู่ระบบอีกครั้ง')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if(!modalTimeout) modalTimeout = document.evaluate("//span[contains(.,'超過登入有效時間，請重新登入。')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if(modalTimeout){ 
              // if(expired_admin){
              //   var button = modalTimeout.closest(".modal-content").querySelector('button');
              //   button.style.pointerEvents = "none";
              //   button.parentElement.style.cursor = "pointer";
              //   button.parentElement.addEventListener('click',function(e){
              //     e.preventDefault();
              //     var win = window.open("https://chat.line.biz", '_blank');
              //     win.focus();
              //   },false);
              // }
              modalTimeout.closest(".modal").parentElement.remove();
              modalTimeout = null;
            }
          }

        }catch(e){

        }
        if(expired_admin){
          ambilMe(function(result){
            if(result){
              expired_admin = null;
              auto_login = false;
              //document.dispatchEvent(new CustomEvent('onCloseSwal', {detail:null}));
            }
          },expired_admin);
        }
        processWatcher();
      },1000);
    }
  }

  function removeAdmin(key){
    if(key in broadcast_admins) delete broadcast_admins[key];
  }

  function getReadyAdmin(exclude = null){
    function checkAdmin(){
      if(current_improvements.includes("divided_broadcast")){
        for (const [key, value] of Object.entries(broadcast_admins)) {
          if((value == null || ((!resting_logins.includes(key) && !(key in resting_limit) && (Date.now()-value) >= WAIT_1) || (resting_logins.includes(key) && (Date.now()-value) >= WAIT_2) || (key in resting_limit && (Date.now()-value) >= WAIT_3))) && (exclude == null || exclude != key)){
            if(original_admin && line_me && (line_me.bizId != original_admin.bizId && original_admin.bizId == key)){
              ////skip jika admin default untuk tab dengan admin custom
              continue;
            }else{
              return key; 
            }
          }
        }
        return null;
      }else{
        var id = line_me ? line_me.bizId : null;
        if(id && broadcast_admins[id] && ((!resting_logins.includes(id) && !(id in resting_limit) && (Date.now()-broadcast_admins[id]) < WAIT_1) || (resting_logins.includes(id) && (Date.now()-broadcast_admins[id]) < WAIT_2) || (id in resting_limit && (Date.now()-broadcast_admins[id]) < WAIT_3))){
          id = null;
        }
        return id;
      }
    }
    admin_last = checkAdmin();
    return admin_last;
  }

  function getRandomAdmin(exclude = null){
    var admins = Object.keys(broadcast_admins);
    if(line_me && !(admins.includes(line_me.bizId))){
      admins.push(line_me.bizId);
    }
    if(exclude && admins.length > 1){
      if(admin_exclusions.length >= admins.length-1){
        admin_exclusions = [];
      }
      admin_exclusions.push(exclude);
      admin_exclusions.forEach(function(exc){
        var idx_delete = admins.indexOf(exc)
        if(idx_delete > -1){
          admins.splice(idx_delete,1);
        }
      });
    }
    var idx_res = randomInteger(0,admins.length-1);
    return admins[idx_res];
  }

  var message_timestamp = null;
  
  function unsendMessage(request,callback,trycount = 1){
    var mid = "";
    for (var i = 0; i < user_messages[request.user.id].length; i++) {
      var sent = user_messages[request.user.id][i];
      message_timestamp = sent.timestamp;
      if(Date.now()-message_timestamp < ms_24){
        if(sent.sendId == request.sendid){
          //jika ketemu break dari pengecekan
          mid = sent.message.id;
          break;
        }else if(i == user_messages[request.user.id].length-1){
          if(request.user.id in message_backwards && message_backwards[request.user.id]){
            //jika semua pesan sudah dicek tapi belum ketemu maka ambil dari backward..pastikan masih dibawah 24 jam
            user_messages[request.user.id] = [];
            return getUserMessages(request.user.id,message_backwards[request.user.id],function () {
              unsendMessage(request,callback,1);
            });
          }else{
            //jika backward ngk ada anggap gagal
            return callback(request,null);
          }
        }
      }else{
        //jika sudah diatas 24 jam anggap gagal
        return callback(request,null);
      }
    };
    var xobj = new XMLHttpRequest();
    xobj.open('DELETE', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/messages/'+request.user.id+'/unsend/'+mid+"?timestamp="+(Date.now()), true);
    xobj.withCredentials = true;
    xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');  
    xobj.setRequestHeader(x_client_version,line_client_version);
    if(line_me.bizId == request.admin || !request.admin){
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
    }else if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',request.admin);
    }
    var sendTimeout = setTimeoutWorker(function(){
      xobj.abort();
    },60000);
    xobj.upload.onprogress = function(e) {
      var percentComplete = Math.ceil((e.loaded / e.total) * 100);
      //log("text : "+percentComplete);
    };
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        clearTimeoutWorker(sendTimeout);
        sendTimeout = null;
        if(xobj.status == 200){
          admin_total_sent[request.admin] += 1;
          printLog("🗑 "+request.user.name+" ✅");
          el_title.innerHTML = getTransText("broadcastUnsendingText");
          callback(request,xobj);
        }else{
          if(xobj.status == 429){
            //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
            if(admin_sent_2[request.admin] >= LIMIT_2){
              admin_sent_1[request.admin] = 0;
            }else{
              admin_sent_1[request.admin] = LIMIT_1;
            }
            if(request.admin in broadcast_admins){
              broadcast_admins[request.admin] = Date.now();
              var new_admin = getReadyAdmin();
              if(new_admin){
                //clearAdminSent(request.admin);
                request.admin = new_admin;
                increaseAdminSent(request.admin); //pastikan admin baru ketambah statusnya
                //admin_sent_1[request.admin] += 1; 
                return unsendMessage(request,callback,(trycount+1));
              }
            }
            start_unix = 0;
            //el_title.innerHTML = getTransText("broadcastLimitationText");
            printLog("🗑 "+request.user.name+" ⚠️ 🔄("+trycount+")",60);
            if(trycount <= 1000){
              //calculateSpeed(1);
              callback_queue.push(function(){
                request.admin = getReadyAdmin(request.admin);
                increaseAdminSent(request.admin);
                //admin_sent_1[request.admin] += 1;
                unsendMessage(request,callback,(trycount+1));
              });
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"unsend_limit",
                message:xobj.responseText+"|"+mid+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }else if(xobj.status == 500){
            printLog("🗑 "+request.user.name+" 💥 🔄("+trycount+")");
            if(trycount <= 5){
              setTimeoutWorker(function(){
                unsendMessage(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"unsend_message_1",
                message:xobj.status+"|"+xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
              callback(request,xobj);
            }
          }else if(xobj.status == 409){
            printLog("🗑 "+request.user.name+" 🚫("+xobj.status+")");
            callback(request,xobj);
          }else if(xobj.status == 0){
            printLog("🗑 "+request.user.name+" ⌛ 🔄("+trycount+")");
            if(trycount <= 10){
              setTimeoutWorker(function(){
                unsendMessage(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              // }
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"unsend_aborted",
                message:xobj.responseText+"|"+mid+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }else{
            printLog("🗑 "+request.user.name+" ❌("+xobj.status+")");
            printLog(xobj.responseText);
            
            if(xobj.status == 401){
              // if(xobj.responseText.includes("not_login")){
              //   if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
              //     request.admin = original_admin.bizId;
              //   }
              //   loggedOutProcedure(request.admin,function(){
              //     unsendMessage(request,callback);
              //   },getTransText("broadcastUnsendingText"));
              // }else{
              //   callback();
              // }
              if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                request.admin = original_admin.bizId;
              }
              loggedOutProcedure(request.admin,function(){
                unsendMessage(request,callback);
              },getTransText("broadcastUnsendingText"));
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"unsend_message_2",
                message:xobj.status+"|"+xobj.statusText+"|"+xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }
        }
      }
    };
    Object.defineProperty(xobj, 'l', {value: true});
    xobj.send(); 
  }

  function sendText(request,callback,trycount = 1){
    request.sendId = request.user.id+'_'+getRandomID();
    var xobj = new XMLHttpRequest();
    xobj.open('POST', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+request.user.id+'/messages/send', true);
    xobj.withCredentials = true;
    xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xobj.setRequestHeader(x_client_version,line_client_version);
    if(line_me.bizId == request.admin || !request.admin){
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
    }else if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',request.admin);
    }
    
    var sendTimeout = setTimeoutWorker(function(){
      xobj.abort();
    },60000);
    xobj.upload.onprogress = function(e) {
      var percentComplete = Math.ceil((e.loaded / e.total) * 100);
      //log("text : "+percentComplete);
    };
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        clearTimeoutWorker(sendTimeout);
        sendTimeout = null;
        if(xobj.status == 200){
          admin_total_sent[request.admin] += 1;
          printLog("💬 "+(request.user.name ? request.user.name : request.user.id)+" ✅");
          el_title.innerHTML = getTransText("broadcastSendingText");
          
          //content_port.postMessage({type:request.type,result:true});
          // if(request.last){
          //  printLog("Broadcast done for "+request.user.name);
          //  increaseProgress();
          // }
          callback(request,xobj);
        }else{
          if(xobj.status == 429){
            let jsonobj = null;
            try{
              jsonobj =  JSON.parse(xobj.responseText);
            }catch(exp){
            }
            if(jsonobj != null && 'code' in jsonobj && jsonobj['code'].includes('idle')){
              is_idle1day = true;
              printLog("💬 "+(request.user.name ? request.user.name : request.user.id)+" 🚫24h🚫("+xobj.status+")");
              increaseAdminSent(request.admin,-1);
              callback(request,xobj); 
            }else{
              //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
              if(admin_sent_2[request.admin] >= LIMIT_2){
                admin_sent_1[request.admin] = 0;
              }else{
                admin_sent_1[request.admin] = LIMIT_1;
              }
              if(request.admin in broadcast_admins){
                broadcast_admins[request.admin] = Date.now();
                var new_admin = getReadyAdmin();
                if(new_admin){
                  request.admin = new_admin;
                  increaseAdminSent(request.admin);//pastikan admin baru ketambah statusnya
                  //admin_sent_1[request.admin] += 1; 
                  return sendText(request,callback,(trycount+1));
                } 
              }
              start_unix = 0;
              //el_title.innerHTML = getTransText("broadcastLimitationText");
              printLog("💬 "+(request.user.name ? request.user.name : request.user.id)+" ⚠️ 🔄("+trycount+")",60);
              if(trycount <= 1000){
                //calculateSpeed(1);
                delaySetOn60();
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendText(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_text_limit",
                  message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }
          }else if(xobj.status == 500 || xobj.status == 409){
            printLog("💬 "+(request.user.name ? request.user.name : request.user.id)+" 💥 🔄("+trycount+")");
            if(trycount <= 5){
              setTimeoutWorker(function(){
                sendText(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_text_1",
                message:xobj.status+"|"+xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(usedRandomIds)+"|"+JSON.stringify(request.user)
              }});
            }
          }else if(xobj.status == 0){
            printLog("💬 "+(request.user.name ? request.user.name : request.user.id)+" ⌛ 🔄("+trycount+")");
            if(trycount <= 10){
              setTimeoutWorker(function(){
                sendText(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_text_aborted",
                message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }else{
            printLog("💬 "+(request.user.name ? request.user.name : request.user.id)+" ❌("+xobj.status+")");
            printLog(xobj.responseText);

            
            if(xobj.status == 401){
              // if(xobj.responseText.includes("not_login")){
              //   if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
              //     request.admin = original_admin.bizId;
              //   }
              //   loggedOutProcedure(request.admin,function(){
              //     sendText(request,callback);
              //   },getTransText("broadcastSendingText"));
              // }else{
              //   callback();
              //   content_port.postMessage({type:"sendLog",data:{
              //     type:"error",
              //     source:"send_text_unathorized",
              //     message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              //   }});
              // }
              if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                request.admin = original_admin.bizId;
              }
              loggedOutProcedure(request.admin,function(){
                request.admin = getReadyAdmin(request.admin);
                if(request.admin) increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                sendText(request,callback);
              },getTransText("broadcastSendingText"));
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("user_not_found")){
              callback(request,xobj);
              // content_port.postMessage({type:"sendLog",data:{
              //   type:"error",
              //   source:"send_text_unotfound",
              //   message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              // }});
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("smart_response_enabled")){
              if(trycount == 1){
                setManualMessage(request.user.id,true,function(){
                  sendText(request,callback,(trycount+1));
                });
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_text_autoresponse",
                  message:xobj.responseText+"|"+JSON.stringify(chat_mode)+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }else{
                callback(request,xobj);
              }
            }else if(xobj.status == 403){ //kalau forbidden
              if(trycount <= 3){
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendText(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_text_forbidden",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else if(xobj.status == 404 && xobj.responseText && xobj.responseText.includes("not_found_operatable_bot")){
              if(trycount <= 3 && Object.keys(broadcast_admins).length > 1){
                removeAdmin(request.admin);
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendText(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_text_non_operator",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_text_2",
                message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }
        }
      }
    };
    var json = {  
      id: "",
      quoteToken: "",
      sendId:request.sendId,
      text:request.content,
      type:"textV2"
    } 
    if(request.emojis && request.emojis.length > 0){
      json.emojis = request.emojis;
    }
    json = JSON.stringify(json);
    json = json.replace(/\\\\+/g, '\\'); //remove special
    xobj.send(json); 
  }

  function sendFile(request,callback,trycount = 1,filestep = 0){

    var fileTokens = {items:[]};

    function deliverMessage(){
      var xobj = new XMLHttpRequest();
      xobj.open('POST', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+request.user.id+'/messages/bulkSendFiles', true);
      xobj.withCredentials = true;
      xobj.setRequestHeader('Content-type', 'application/json');
      xobj.setRequestHeader('Accept', "application/json, text/plain, */*");
      xobj.setRequestHeader(x_client_version,line_client_version);
      if(line_me.bizId == request.admin || !request.admin){
        xobj.setRequestHeader('x-xsrf-token', line_csrf);
      }else if(current_improvements.includes("divided_broadcast")){
        xobj.setRequestHeader('checkadmin',request.admin);
      }
      var sendTimeout = setTimeoutWorker(function(){
        xobj.abort();
      },300000);
      
      xobj.onreadystatechange = function () {
        //log("file ready state : "+xobj.readyState) 
        if (xobj.readyState == 4) { 
          clearTimeoutWorker(sendTimeout);
          sendTimeout = null;
          if(xobj.status == 200){
            admin_total_sent[request.admin] += 1;
            printLog("➡️🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ✅");
            el_title.innerHTML = getTransText("broadcastSendingText");
            callback(request,xobj);
          }else{
            if(xobj.status == 429){
              let jsonobj = null;
              try{
                jsonobj =  JSON.parse(xobj.responseText);
              }catch(exp){
              }
              if(jsonobj != null && 'code' in jsonobj && jsonobj['code'].includes('idle')){
                is_idle1day = true;
                printLog("➡️🖼️ "+(request.user.name ? request.user.name : request.user.id)+" 🚫24h🚫("+xobj.status+")");
                increaseAdminSent(request.admin,-1);
                callback(request,xobj); 
              }else{
                //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
                if(admin_sent_2[request.admin] >= LIMIT_2){
                  admin_sent_1[request.admin] = 0;
                }else{
                  admin_sent_1[request.admin] = LIMIT_1;
                }
                if(request.admin in broadcast_admins){
                  broadcast_admins[request.admin] = Date.now();
                  var new_admin = getReadyAdmin();
                  if(new_admin){
                    request.admin = new_admin;
                    increaseAdminSent(request.admin);
                    trycount++;
                    return deliverMessage();
                  }
                }
                start_unix = 0;
                printLog("➡️🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ⚠️ 🔄("+trycount+")",60);
                if(trycount <= 1000){
                  //calculateSpeed(1);
                  delaySetOn60();
                  callback_queue.push(function(){
                    request.admin = getReadyAdmin(request.admin);
                    increaseAdminSent(request.admin);
                    //admin_sent_1[request.admin] += 1;
                    trycount++;
                    deliverMessage();
                  });
                }else{
                  callback(request,xobj);
                  content_port.postMessage({type:"sendLog",data:{
                    type:"error",
                    source:"send_file_limit",
                    message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                  }});
                }
              }
            }else if(xobj.status == 500 || xobj.status == 409){
              printLog("➡️🖼️ "+(request.user.name ? request.user.name : request.user.id)+" 💥 🔄("+trycount+")");
              if(trycount <= 5){
                setTimeoutWorker(function(){
                  trycount++;
                  deliverMessage();
                },6000*trycount);
              }else{
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_file_1",
                  message:xobj.status+"|"+xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(usedRandomIds)+"|"+JSON.stringify(request.user)
                }});
                callback(request,xobj);
              }
            }else if(xobj.status == 0){
              printLog("➡️🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ⌛ 🔄("+trycount+")");
              if(trycount <= 10){
                setTimeoutWorker(function(){
                  trycount++;
                  deliverMessage();
                },6000*trycount);
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_file_aborted",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else{
              printLog("➡️🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ❌("+xobj.status+")");
              printLog(xobj.responseText);
              
              if(xobj.status == 401){
              
                if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                  request.admin = original_admin.bizId;
                }
                loggedOutProcedure(request.admin,function(){
                  request.admin = getReadyAdmin(request.admin);
                  if(request.admin) increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                  trycount++;
                  deliverMessage();
                },getTransText("broadcastSendingText"));
              }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("user_not_found")){
                callback(request,xobj);
              }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("smart_response_enabled")){
                if(trycount == 1){
                  setManualMessage(request.user.id,true,function(){
                    trycount++;
                    deliverMessage();
                  });
                  content_port.postMessage({type:"sendLog",data:{
                    type:"error",
                    source:"send_file_autoresponse",
                    message:xobj.responseText+"|"+JSON.stringify(chat_mode)+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                  }});
                }else{
                  callback(request,xobj);
                }
              }else if(xobj.status == 403){ //kalau forbidden
                if(trycount <= 3){
                  callback_queue.push(function(){
                    request.admin = getReadyAdmin(request.admin);
                    increaseAdminSent(request.admin);
                    //admin_sent_1[request.admin] += 1;
                    trycount++;
                    deliverMessage();
                  });
                }else{
                  callback(request,xobj);
                  content_port.postMessage({type:"sendLog",data:{
                    type:"error",
                    source:"send_file_forbidden",
                    message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                  }});
                }
              }else if(xobj.status == 404 && xobj.responseText && xobj.responseText.includes("not_found_operatable_bot")){
                if(trycount <= 3 && Object.keys(broadcast_admins).length > 1){
                  removeAdmin(request.admin);
                  callback_queue.push(function(){
                    request.admin = getReadyAdmin(request.admin);
                    increaseAdminSent(request.admin);
                    //admin_sent_1[request.admin] += 1;
                    trycount++;
                    deliverMessage();
                  });
                }else{
                  callback(request,xobj);
                  content_port.postMessage({type:"sendLog",data:{
                    type:"error",
                    source:"send_file_non_operator",
                    message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                  }});
                }
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_file_2",
                  message:xobj.status+"|"+xobj.statusText+"|"+xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }
          }
        }
      };

      Object.defineProperty(xobj, 'l', {value: true});
      xobj.send(JSON.stringify(fileTokens)); 
    }

    function uploadFiles(){
      var xhr = new XMLHttpRequest();
      xhr.open('POST', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/messages/'+request.user.id+'/uploadFile', true);
      xhr.withCredentials = true
      xhr.setRequestHeader('accept', "application/json, text/plain, */*");
      xhr.setRequestHeader(x_client_version,line_client_version);
      if(line_me.bizId == request.admin || !request.admin){
        xhr.setRequestHeader('x-xsrf-token', line_csrf);
      }else if(current_improvements.includes("divided_broadcast")){
        xhr.setRequestHeader('checkadmin',request.admin);
      }
      var xhrTimeout = setTimeoutWorker(function(){
        xhr.abort();
      },300000);
      xhr.upload.onprogress = function(e) {
          var percentComplete = Math.ceil((e.loaded / e.total) * 100);
          //log("file : "+percentComplete);
      };
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { 
          clearTimeoutWorker(xhrTimeout);
          xhrTimeout = null;
          if(xhr.status == 200){
            var result = null;
            try{
              result = JSON.parse(xhr.responseText);
            }catch(err){
            }
            if(result){
              var sid = request.user.id+'_'+getRandomID();
              if(request.sendId){
                if(request.sendId != ""){
                  request.sendId += "#";
                }
              }else{
                request.sendId = "";
              }
              request.sendId += sid;
              fileTokens.items.push({
                sendId:sid,
                contentMessageToken:result.contentMessageToken,
              });
            }
          }else{ 
            if(xhr.status == 429){
              //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
              if(admin_sent_2[request.admin] >= LIMIT_2){
                admin_sent_1[request.admin] = 0;
              }else{
                admin_sent_1[request.admin] = LIMIT_1;
              }
              if(request.admin in broadcast_admins){
                broadcast_admins[request.admin] = Date.now();
                var new_admin = getReadyAdmin();
                if(new_admin){
                  request.admin = new_admin;
                  increaseAdminSent(request.admin);
                  trycount++;
                  return uploadFiles();
                }
              }
              start_unix = 0;
              printLog("📤🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ⚠️ 🔄("+trycount+")",60);
              if(trycount <= 1000){
                //calculateSpeed(1);
                delaySetOn60();
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  trycount++;
                  uploadFiles();
                });
              }else{
                callback(request,xhr);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"upload_file_limit",
                  message:xhr.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
              return;
            }else if(xhr.status == 401){
              if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                request.admin = original_admin.bizId;
              }
              return loggedOutProcedure(request.admin,function(){
                request.admin = getReadyAdmin(request.admin);
                if(request.admin) increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                uploadFiles();
              },getTransText("broadcastSendingText"));
            }else if(xhr.status == 400){
              if(xhr.responseText && xhr.responseText.includes("user_not_found")){
                
              }else if(xhr.status == 400 && xhr.responseText && xhr.responseText.includes("smart_response_enabled")){
                if(trycount == 1){
                  content_port.postMessage({type:"sendLog",data:{
                    type:"error",
                    source:"upload_file_autoresponse",
                    message:xhr.responseText+"|"+JSON.stringify(chat_mode)+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                  }});
                  return setManualMessage(request.user.id,true,function(){
                    uploadFiles();
                  });
                }
              }
            }else{
              printLog("📤🖼️ "+(request.user.name ? request.user.name : request.user.id)+" 💥 🔄("+trycount+")");
              if(trycount <= 5){
                return setTimeoutWorker(function(){
                  uploadFiles();
                },6000*trycount);
              }else{
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"upload_file_1",
                  message:xhr.status+"|"+xhr.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(usedRandomIds)+"|"+JSON.stringify(request.user)
                }});
              }
            }
          }
          filestep++;
          if(filestep < request.contents.length){
            uploadFiles();
          }else{
            if(fileTokens.items.length > 0){
              deliverMessage();
            }else{
              callback(request,xhr);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"upload_file_failed",
                message:''
              }});
            }
          }
        }
      };


      var content = request.contents[filestep];
      input.files = null;
      const dT = new DataTransfer(); 
      dT.items.add(new File([dataURItoBlob(content.data)], content.name, {type:content.type}));
      input.files = dT.files;
      
      var formData = new FormData();
      formData.append("file", input.files[0]);
      Object.defineProperty(xhr, 'l', {value: true});
      xhr.send(formData);  
    }

    uploadFiles();
  }

  function sendFileOld(request,callback,trycount = 1){
    request.sendId = request.user.id+'_'+getRandomID();
    var xobj = new XMLHttpRequest();
    xobj.open('POST', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+request.user.id+'/messages/sendFile', true);
    xobj.withCredentials = true
    xobj.setRequestHeader('accept', "application/json, text/plain, */*");
    xobj.setRequestHeader(x_client_version,line_client_version);
    if(line_me.bizId == request.admin || !request.admin){
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
    }else if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',request.admin);
    }
    var sendTimeout = setTimeoutWorker(function(){
      xobj.abort();
    },300000);
    xobj.upload.onprogress = function(e) {
        var percentComplete = Math.ceil((e.loaded / e.total) * 100);
        //log("file : "+percentComplete);
    };
    xobj.onreadystatechange = function () {
      //log("file ready state : "+xobj.readyState) 
      if (xobj.readyState == 4) { 
        clearTimeoutWorker(sendTimeout);
        sendTimeout = null;
        if(xobj.status == 200){
          admin_total_sent[request.admin] += 1;
          printLog("🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ✅");
          el_title.innerHTML = getTransText("broadcastSendingText");
          // if(active_data){
            
          //   successSentList.push("fl#"+request.index+"#"+request.sendId+"#"+Date.now());
          // }
          //content_port.postMessage({type:request.type,result:true});
          // if(request.last){
          //  printLog("Broadcast done for "+request.user.name);
          //  increaseProgress();
          // }
          callback(request,xobj);
        }else{
          if(xobj.status == 429){
            let jsonobj = null;
            try{
              jsonobj =  JSON.parse(xobj.responseText);
            }catch(exp){
            }
            if(jsonobj != null && 'code' in jsonobj && jsonobj['code'].includes('idle')){
              is_idle1day = true;
              printLog("➡🖼️ "+(request.user.name ? request.user.name : request.user.id)+" 🚫24h🚫("+xobj.status+")");
              increaseAdminSent(request.admin,-1);
              callback(request,xobj); 
            }else{
              //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
              if(admin_sent_2[request.admin] >= LIMIT_2){
                admin_sent_1[request.admin] = 0;
              }else{
                admin_sent_1[request.admin] = LIMIT_1;
              }
              if(request.admin in broadcast_admins){
                broadcast_admins[request.admin] = Date.now();
                var new_admin = getReadyAdmin();
                if(new_admin){
                  //clearAdminSent(request.admin);
                  request.admin = new_admin;
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1; //pastikan admin baru ketambah statusnya
                  return sendFileOld(request,callback,(trycount+1));
                }
              }
              start_unix = 0;
              // if(active_data){
              //   el_title.innerHTML = getTransText("broadcastLimitationText");
              // }
              printLog("🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ⚠️ 🔄("+trycount+")",60);
              if(trycount <= 1000){
                //calculateSpeed(1);
                delaySetOn60();
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendFileOld(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_file_limit",
                  message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }
          }else if(xobj.status == 500 || xobj.status == 409){
            printLog("🖼️ "+(request.user.name ? request.user.name : request.user.id)+" 💥 🔄("+trycount+")");
            if(trycount <= 5){
              setTimeoutWorker(function(){
                sendFileOld(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_file_1",
                message:xobj.status+"|"+xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(usedRandomIds)+"|"+JSON.stringify(request.user)
              }});
              callback(request,xobj);
            }
          }else if(xobj.status == 0){
            printLog("🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ⌛ 🔄("+trycount+")");
            if(trycount <= 10){
              setTimeoutWorker(function(){
                sendFileOld(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_file_aborted",
                message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }else{
            printLog("🖼️ "+(request.user.name ? request.user.name : request.user.id)+" ❌("+xobj.status+")");
            printLog(xobj.responseText);
            // if(request.last){
            //  printLog("Broadcast done for "+request.user.name);
            //  increaseProgress();
            // }
            
            
            if(xobj.status == 401){
              // if(xobj.responseText.includes("not_login")){
              //   if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
              //     request.admin = original_admin.bizId;
              //   }
              //   loggedOutProcedure(request.admin,function(){
              //     sendFileOld(request,callback);
              //   },getTransText("broadcastSendingText"));
              // }else{
              //   callback();
              // }
              if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                request.admin = original_admin.bizId;
              }
              loggedOutProcedure(request.admin,function(){
                request.admin = getReadyAdmin(request.admin);
                if(request.admin) increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                sendFileOld(request,callback);
              },getTransText("broadcastSendingText"));
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("user_not_found")){
              callback(request,xobj);
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("smart_response_enabled")){
              if(trycount == 1){
                setManualMessage(request.user.id,true,function(){
                  sendFileOld(request,callback,(trycount+1));
                });
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_file_autoresponse",
                  message:xobj.responseText+"|"+JSON.stringify(chat_mode)+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }else{
                callback(request,xobj);
              }
            }else if(xobj.status == 403){ //kalau forbidden
              if(trycount <= 3){
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendFileOld(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_file_forbidden",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else if(xobj.status == 404 && xobj.responseText && xobj.responseText.includes("not_found_operatable_bot")){
              if(trycount <= 3 && Object.keys(broadcast_admins).length > 1){
                removeAdmin(request.admin);
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendFileOld(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_file_non_operator",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_file_2",
                message:xobj.status+"|"+xobj.statusText+"|"+xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }
        }
      }
    };

    var content = request.contents[0];
    input.files = null;
    const dT = new DataTransfer(); 
    dT.items.add(new File([dataURItoBlob(content.data)], content.name, {type:content.type}));
    input.files = dT.files;
    
    var formData = new FormData();
    formData.append("sendId", request.sendId);
    formData.append("file", input.files[0]);
    Object.defineProperty(xobj, 'l', {value: true});
    xobj.send(formData);  
  }

  function sendSticker(request,callback,trycount = 1){
    request.sendId = request.user.id+'_'+getRandomID();
    var xobj = new XMLHttpRequest();
    xobj.open('POST', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+request.user.id+'/messages/send', true);
    xobj.withCredentials = true;
    xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xobj.setRequestHeader(x_client_version,line_client_version);
    if(line_me.bizId == request.admin || !request.admin){
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
    }else if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',request.admin);
    }
    var sendTimeout = setTimeoutWorker(function(){
      xobj.abort();
    },60000);
    xobj.upload.onprogress = function(e) {
      var percentComplete = Math.ceil((e.loaded / e.total) * 100);
    };
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        clearTimeoutWorker(sendTimeout);
        sendTimeout = null;
        if(xobj.status == 200){
          printLog("🙂 "+(request.user.name ? request.user.name : request.user.id)+" ✅");
          el_title.innerHTML = getTransText("broadcastSendingText");
          // if(active_data){
          //   el_title.innerHTML = getTransText("broadcastSendingText");
          //   successSentList.push("st#"+request.index+"#"+request.sendId+"#"+Date.now());
          // }
          //content_port.postMessage({type:request.type,result:true});
          // if(request.last){
          //  printLog("Broadcast done for "+request.user.name);
          //  increaseProgress();
          // }
          callback(request,xobj);
        }else{
          if(xobj.status == 429){
            let jsonobj = null;
            try{
              jsonobj =  JSON.parse(xobj.responseText);
            }catch(exp){
            }
            if(jsonobj != null && 'code' in jsonobj && jsonobj['code'].includes('idle')){
              is_idle1day = true;
              printLog("🙂 "+(request.user.name ? request.user.name : request.user.id)+" 🚫24h🚫("+xobj.status+")");
              increaseAdminSent(request.admin,-1);
              callback(request,xobj); 
            }else{
              //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
              if(admin_sent_2[request.admin] >= LIMIT_2){
                admin_sent_1[request.admin] = 0;
              }else{
                admin_sent_1[request.admin] = LIMIT_1;
              }
              if(request.admin in broadcast_admins){
                broadcast_admins[request.admin] = Date.now();
                var new_admin = getReadyAdmin();
                if(new_admin){
                  //clearAdminSent(request.admin);
                  request.admin = new_admin;
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1; //pastikan admin baru ketambah statusnya
                  return sendSticker(request,callback,(trycount+1));
                } 
              }
              start_unix = 0;
              // if(active_data){
              //   el_title.innerHTML = getTransText("broadcastLimitationText");
              // }
              printLog("🙂 "+(request.user.name ? request.user.name : request.user.id)+" ⚠️ 🔄("+trycount+")",60);
              if(trycount <= 1000){
                //calculateSpeed(1);
                delaySetOn60();
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendSticker(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_sticker_limit",
                  message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }
          }else if(xobj.status == 500 || xobj.status == 409){
            printLog("🙂 "+(request.user.name ? request.user.name : request.user.id)+" 💥 🔄("+trycount+")");
            if(trycount <= 5){
              setTimeoutWorker(function(){
                sendSticker(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_sticker_1",
                message:xobj.status+"|"+xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(usedRandomIds)+"|"+JSON.stringify(request.user)
              }});
              callback(request,xobj);
            }
          }else if(xobj.status == 0){
            printLog("🙂 "+(request.user.name ? request.user.name : request.user.id)+" ⌛ 🔄("+trycount+")");
            if(trycount <= 10){
              setTimeoutWorker(function(){
                sendSticker(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_sticker_aborted",
                message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }else{
            printLog("🙂 "+(request.user.name ? request.user.name : request.user.id)+" ❌("+xobj.status+")");
            printLog(xobj.responseText);
            
            if(xobj.status == 401){
              // if(xobj.responseText.includes("not_login")){
              //   if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
              //     request.admin = original_admin.bizId;
              //   }
              //   loggedOutProcedure(request.admin,function(){
              //     sendSticker(request,callback);
              //   },getTransText("broadcastSendingText"));
              // }else{
              //   callback();
              // }
              if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                request.admin = original_admin.bizId;
              }
              loggedOutProcedure(request.admin,function(){
                request.admin = getReadyAdmin(request.admin);
                if(request.admin) increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                sendSticker(request,callback);
              },getTransText("broadcastSendingText"));
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("user_not_found")){
              callback(request,xobj);
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("smart_response_enabled")){
              if(trycount == 1){
                setManualMessage(request.user.id,true,function(){
                  sendSticker(request,callback,(trycount+1));
                });
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_sticker_autoresponse",
                  message:xobj.responseText+"|"+JSON.stringify(chat_mode)+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }else{
                callback(request,xobj);
              }
            }else if(xobj.status == 403){ //kalau forbidden
              if(trycount <= 3){
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                  sendSticker(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_sticker_forbidden",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else if(xobj.status == 404 && xobj.responseText && xobj.responseText.includes("not_found_operatable_bot")){
              if(trycount <= 3 && Object.keys(broadcast_admins).length > 1){
                removeAdmin(request.admin);
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                  sendSticker(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_sticker_non_operator",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_sticker_2",
                message:xobj.status+"|"+xobj.statusText+"|"+xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }
        }
      }
    };
    var json = '{"type":"sticker","packageId":"'+request.content.packageId+'","stickerId":"'+request.content.stickerId+'","sendId":"'+request.sendId+'"}';
    Object.defineProperty(xobj, 'l', {value: true});
    xobj.send(json); 
  }

  function sendCoupon(request,callback,trycount = 1){
    request.sendId = request.user.id+'_'+getRandomID();
    var xobj = new XMLHttpRequest();
    xobj.open('POST', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+request.user.id+'/messages/send', true);
    xobj.withCredentials = true;
    xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xobj.setRequestHeader(x_client_version,line_client_version);
    if(line_me.bizId == request.admin || !request.admin){
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
    }else if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',request.admin);
    }
    var sendTimeout = setTimeoutWorker(function(){
      xobj.abort();
    },60000);
    xobj.upload.onprogress = function(e) {
      var percentComplete = Math.ceil((e.loaded / e.total) * 100);
    };
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        clearTimeoutWorker(sendTimeout);
        sendTimeout = null;
        if(xobj.status == 200){
          admin_total_sent[request.admin] += 1;
          printLog("🏷️ "+(request.user.name ? request.user.name : request.user.id)+" ✅");
          el_title.innerHTML = getTransText("broadcastSendingText");
          // if(active_data){
            
          //   successSentList.push("cp#"+request.index+"#"+request.sendId+"#"+Date.now());
          // }
          //content_port.postMessage({type:request.type,result:true});
          // if(request.last){
          //  printLog("Broadcast done for "+request.user.name);
          //  increaseProgress();
          // }
          callback(request,xobj);
        }else{
          if(xobj.status == 429){
            let jsonobj = null;
            try{
              jsonobj =  JSON.parse(xobj.responseText);
            }catch(exp){
            }
            if(jsonobj != null && 'code' in jsonobj && jsonobj['code'].includes('idle')){
              is_idle1day = true;
              printLog("🏷️ "+(request.user.name ? request.user.name : request.user.id)+" 🚫24h🚫("+xobj.status+")");
              increaseAdminSent(request.admin,-1);
              callback(request,xobj); 
            }else{
              //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
              if(admin_sent_2[request.admin] >= LIMIT_2){
                admin_sent_1[request.admin] = 0;
              }else{
                admin_sent_1[request.admin] = LIMIT_1;
              }
              if(request.admin in broadcast_admins){
                broadcast_admins[request.admin] = Date.now();
                var new_admin = getReadyAdmin();
                if(new_admin){
                  //clearAdminSent(request.admin);
                  request.admin = new_admin;
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1; //pastikan admin baru ketambah statusnya
                  return sendCoupon(request,callback,(trycount+1));
                } 
              }
              start_unix = 0;
              // if(active_data){
              //   el_title.innerHTML = getTransText("broadcastLimitationText");
              // }
              printLog("🏷️ "+(request.user.name ? request.user.name : request.user.id)+" ⚠️ 🔄("+trycount+")",60);
              if(trycount <= 1000){
                //calculateSpeed(1);
                delaySetOn60();
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendCoupon(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_coupon_limit",
                  message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }
          }else if(xobj.status == 500 || xobj.status == 409){
            printLog("🏷️ "+(request.user.name ? request.user.name : request.user.id)+" 💥 🔄("+trycount+")");
            if(trycount <= 5){
              setTimeoutWorker(function(){
                sendCoupon(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_coupon_1",
                message:xobj.status+"|"+xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(usedRandomIds)+"|"+JSON.stringify(request.user)
              }});
              callback(request,xobj);
            }
          }else if(xobj.status == 0){
            printLog("🏷️ "+(request.user.name ? request.user.name : request.user.id)+" ⌛ 🔄("+trycount+")");
            if(trycount <= 10){
              setTimeoutWorker(function(){
                sendCoupon(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_coupon_aborted",
                message:xobj.responseText+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }else{
            printLog("🏷️ "+(request.user.name ? request.user.name : request.user.id)+" ❌("+xobj.status+")");
            printLog(xobj.responseText);
            
            if(xobj.status == 401){
              // if(xobj.responseText.includes("not_login")){
              //   if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
              //     request.admin = original_admin.bizId;
              //   }
              //   loggedOutProcedure(request.admin,function(){
              //     sendCoupon(request,callback);
              //   },getTransText("broadcastSendingText"));
              // }else{
              //   callback();
              // }
              if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                request.admin = original_admin.bizId;
              }
              loggedOutProcedure(request.admin,function(){
                request.admin = getReadyAdmin(request.admin);
                if(request.admin) increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                sendCoupon(request,callback);
              },getTransText("broadcastSendingText"));
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("user_not_found")){
              callback(request,xobj);
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("smart_response_enabled")){
              if(trycount == 1){
                setManualMessage(request.user.id,true,function(){
                  sendCoupon(request,callback,(trycount+1));
                });
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_coupon_autoresponse",
                  message:xobj.responseText+"|"+JSON.stringify(chat_mode)+"|"+request.sendId+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }else{
                callback(request,xobj);
              }
            }else if(xobj.status == 403){ //kalau forbidden
              if(trycount <= 3){
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendCoupon(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_coupon_forbidden",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else if(xobj.status == 404 && xobj.responseText && xobj.responseText.includes("not_found_operatable_bot")){
              if(trycount <= 3 && Object.keys(broadcast_admins).length > 1){
                removeAdmin(request.admin);
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendCoupon(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_coupon_non_operator",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_coupon_2",
                message:xobj.status+"|"+xobj.statusText+"|"+xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
              }});
            }
          }
        }
      }
    };
    var json = '{"type":"coupon","couponId":"'+request.content+'","sendId":"'+request.sendId+'"}';
    Object.defineProperty(xobj, 'l', {value: true});
    xobj.send(json); 
  }
  

  function sendCard(request,callback,trycount = 1){
    request.sendId = request.user.id+'_'+getRandomID();
    var xobj = new XMLHttpRequest();
    xobj.open('POST', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR1"/* @/mangle */]+line_id+'/chats/'+request.user.id+'/messages/send', true);
    xobj.withCredentials = true;
    xobj.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xobj.setRequestHeader(x_client_version,line_client_version);
    if(line_me.bizId == request.admin || !request.admin){
      xobj.setRequestHeader('x-xsrf-token', line_csrf);
    }else if(current_improvements.includes("divided_broadcast")){
      xobj.setRequestHeader('checkadmin',request.admin);
    }
    var sendTimeout = setTimeoutWorker(function(){
      xobj.abort();
    },60000);
    xobj.upload.onprogress = function(e) {
      var percentComplete = Math.ceil((e.loaded / e.total) * 100);
    };
    var json = '{"type":"cardType","cardTypeMessageId":"'+request.content+'","sendId":"'+request.sendId+'"}';
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4) {
        clearTimeoutWorker(sendTimeout);
        sendTimeout = null;
        if(xobj.status == 200){
          admin_total_sent[request.admin] += 1;
          printLog("📰 "+(request.user.name ? request.user.name : request.user.id)+" ✅");
          el_title.innerHTML = getTransText("broadcastSendingText");
          // if(active_data){
          //   successSentList.push("cr#"+request.index+"#"+request.sendId+"#"+Date.now());
          // }
          //content_port.postMessage({type:request.type,result:true});
          // if(request.last){
          //  printLog("Broadcast done for "+request.user.name);
          //  increaseProgress();
          // }
          callback(request,xobj);
        }else{
          if(xobj.status == 429){
            let jsonobj = null;
            try{
              jsonobj =  JSON.parse(xobj.responseText);
            }catch(exp){
            }
            if(jsonobj != null && 'code' in jsonobj && jsonobj['code'].includes('idle')){
              is_idle1day = true;
              printLog("📰 "+(request.user.name ? request.user.name : request.user.id)+" 🚫24h🚫("+xobj.status+")");
              increaseAdminSent(request.admin,-1);
              callback(request,xobj); 
            }else{
              //kalau admin sent 2 nya udah lewat 200 maka admin sent 1 nya kosongin aja
              if(admin_sent_2[request.admin] >= LIMIT_2){
                admin_sent_1[request.admin] = 0;
              }else{
                admin_sent_1[request.admin] = LIMIT_1;
              }
              if(request.admin in broadcast_admins){
                broadcast_admins[request.admin] = Date.now();
                var new_admin = getReadyAdmin();
                if(new_admin){
                  //clearAdminSent(request.admin);
                  request.admin = new_admin;
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1; //pastikan admin baru ketambah statusnya
                  return sendCard(request,callback,(trycount+1));
                } 
              }
              start_unix = 0;
              // if(active_data){
              //   el_title.innerHTML = getTransText("broadcastLimitationText");
              // }
              printLog("📰 "+(request.user.name ? request.user.name : request.user.id)+" ⚠️ 🔄("+trycount+")",60);
              if(trycount <= 1000){
                //calculateSpeed(1);
                delaySetOn60();
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendCard(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_card_limit",
                  message:xobj.status+'|'+xobj.responseText+'|'+json
                }});
              }
            }
          }else if(xobj.status == 500 || xobj.status == 409){
            printLog("📰 "+(request.user.name ? request.user.name : request.user.id)+" 💥 🔄("+trycount+")");
            if(trycount <= 5){
              setTimeoutWorker(function(){
                sendCard(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_card_1",
                message:xobj.status+'|'+xobj.responseText+'|'+json
              }});
              callback(request,xobj);
            }
          }else if(xobj.status == 0){
            printLog("📰 "+(request.user.name ? request.user.name : request.user.id)+" ⌛ 🔄("+trycount+")");
            if(trycount <= 10){
              setTimeoutWorker(function(){
                sendCard(request,callback,(trycount+1));
              },6000*trycount);
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_card_aborted",
                message:xobj.status+'|'+xobj.responseText+'|'+json
              }});
            }
          }else{
            printLog("📰 "+(request.user.name ? request.user.name : request.user.id)+" ❌("+xobj.status+")");
            printLog(xobj.responseText);
            
            if(xobj.status == 401){
              if(request.admin == null && original_admin && line_me && line_me.bizId == original_admin.bizId){
                request.admin = original_admin.bizId;
              }
              loggedOutProcedure(request.admin,function(){
                request.admin = getReadyAdmin(request.admin);
                if(request.admin) increaseAdminSent(request.admin);//admin_sent_1[request.admin] += 1;
                sendCard(request,callback);
              },getTransText("broadcastSendingText"));
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("user_not_found")){
              callback(request,xobj);
            }else if(xobj.status == 400 && xobj.responseText && xobj.responseText.includes("smart_response_enabled")){
              if(trycount == 1){
                setManualMessage(request.user.id,true,function(){
                  sendCard(request,callback,(trycount+1));
                });
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_card_autoresponse",
                  message:xobj.status+'|'+xobj.responseText+'|'+json
                }});
              }else{
                callback(request,xobj);
              }
            }else if(xobj.status == 403){ //kalau forbidden
              if(trycount <= 3){
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendCard(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_card_forbidden",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else if(xobj.status == 404 && xobj.responseText && xobj.responseText.includes("not_found_operatable_bot")){
              if(trycount <= 3 && Object.keys(broadcast_admins).length > 1){
                removeAdmin(request.admin);
                callback_queue.push(function(){
                  request.admin = getReadyAdmin(request.admin);
                  increaseAdminSent(request.admin);
                  //admin_sent_1[request.admin] += 1;
                  sendCard(request,callback,(trycount+1));
                });
              }else{
                callback(request,xobj);
                content_port.postMessage({type:"sendLog",data:{
                  type:"error",
                  source:"send_card_non_operator",
                  message:xobj.responseText+"|"+window.location.href+"|"+line_id+"|"+JSON.stringify(request.user)
                }});
              }
            }else{
              callback(request,xobj);
              content_port.postMessage({type:"sendLog",data:{
                type:"error",
                source:"send_card_2",
                message:xobj.status+'|'+xobj.responseText+'|'+json
              }});
            }
          }
        }
      }
    };
    
    Object.defineProperty(xobj, 'l', {value: true});
    xobj.send(json); 
  }

  document.addEventListener('onTestAutoLogin',function(e){
    content_port.postMessage({type:"startAutoLogin",data:{
      admin:"709fe890-4428-11ea-b5ee-fa163e3af8d6"
    }});
  });

  function waitForAdminTotalClearing(admin,callback){
    
    setTimeoutWorker(function(){
      if(clearing_total_sent[admin] == false){
        callback();
      }else{
        waitForAdminTotalClearing(admin,callback);
      }
    },1000);
  }

  function restAdminAfterRelogin(admin,callback = null){
    if(resting_logins.includes(admin)){
      if (typeof callback === "function") {
        //taro disini biar kalau admin masih istirahat, maka harus masuk queue
        callback_queue.push(callback);
      }
      return;
    }
    resting_logins.push(admin);
    broadcast_admins[admin] = Date.now();
    if (typeof callback === "function") {
      //taro disini biar diset dulu adminnya lagi istirahat baru masukin queue agar mencegah proses di execute
      callback_queue.push(callback);
    }
    if(getReadyAdmin() == null){
      delayRemove();
      setTimeoutWorker(function(){
        delaySetOn120();
      },250);
    }
  }

  function loggedOutProcedure(admin,callback,statusText = ""){
    var waitInt = setIntervalWorker(function(){
      if(expired_admin == null){
        clearIntervalWorker(waitInt);
        el_pause.style.display = "initial";
        el_title.innerHTML = statusText;
        setIndicator(1);
        restAdminAfterRelogin(admin,callback);
      }else{

      }
    },1000);
    if(expired_admin) return;
    expired_admin = admin;
    ambilMe(function(result){
      if(result){
        expired_admin = null;
        auto_login = false;
      }else{
        el_title.innerHTML = getTransText("broadcastLoggedOutText"); 
        setIndicator(-1);
        el_resume.style.display = "none";
        el_pause.style.display = "none";
        el_stop.style.display = "initial";
        el_close.style.display = "none";
        el_retry.style.display = "none";

        if(current_improvements.includes("auto_login")){
          if(auto_login == false){
            auto_login = true;
            content_port.postMessage({type:"startExpiredLogin",manual:false,data:{
              admin:admin,
              original:original_admin
            }});
          }
        }else{
          el_desc.innerHTML = "<a href='#' id='laris-manual-login' target='_blank' class='btn btn-sm btn-outline-warning mr-0'>"+getTransText("textLoginNow").toUpperCase()+"</a>";  
          waitUntilElement("#laris-manual-login",function(){
            document.querySelector("#laris-manual-login").addEventListener("click",function(e){
              e.preventDefault();

              content_port.postMessage({type:"startExpiredLogin",manual:true,data:{
                admin:expired_admin
              }});
            });
          });
        }
      }
    },expired_admin);
  }


  function fancyTimeFormat(duration)
  {   
      if(duration < 0) duration = 0;
      // Hours, minutes and seconds
      var hrs = ~~(duration / 3600);
      var mins = ~~((duration % 3600) / 60);
      var secs = ~~duration % 60;

      // Output like "1:01" or "4:03:59" or "123:03:59"
      var ret = hrs.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + mins.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + secs.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      //ret += "" + secs;
      return ret;
  }

  function createElement(str) {
    var frag = document.createDocumentFragment();

    var elem = document.createElement('div');
    elem.innerHTML = str;

    while (elem.childNodes[0]) {
      frag.appendChild(elem.childNodes[0]);
    }
    return frag;
  }

  function showProcessor(show){
    injectElements();
    if(document.querySelector('#laris-container')){
      if(show){
        document.querySelector('#laris-container').style.display = '';
        document.querySelector('#page #container #wrapper').classList.add("laris-backdrop");
        document.querySelector("#header-user a").style.pointerEvents = "none";
        //document.querySelector("aside").style.display = "none";
        //document.querySelector('#content-secondary .d-flex').setAttribute('style', 'display:none !important');
      }else{
        document.querySelector('#laris-container').style.display = 'none';
        document.querySelector('#page #container #wrapper').classList.remove("laris-backdrop");
        document.querySelector("#header-user a").style.pointerEvents = "";
        //document.querySelector('#content-secondary .d-flex').setAttribute('style', '');
        //document.querySelector("aside").style.display = "";
      }
    }
  }

  function validateSpintax(text) {
      try {
        text = parseSpintax(text);
        return text.match(/(\{[^}]*\|)|(\|[^{]*\})/) === null;
      }
      catch(err) {
        return false;
      }
  }

  function findSpintax(text) {
      return text.match(/\{([^{}]+?)\}/);
  }

  function isSpintax(text) {
      return text.match(/\{[^}]*\|*[^}]*\}/) !== null;
  }

  function parseSpintax(text, randomFn) {
      var spin;
      var options;
      var choice;
      var originalText = text;
      var unspinCount = 0;

      // While we find Spintax keep unspinning it
      while (isSpintax(text)) {
          if (unspinCount >= 1000) {
              throw new Error('Unable unspin text after 1000 iterations (' + originalText + ')');
          }

          // Find first Spintax occurrence
          spin = findSpintax(text);
          if(spin == null || spin.length == 0) return "";

          // Put the Spintax options in an array
          options = spin[1].split('|');

          // Choose a random option based on the options length
          choice = options[Math.floor((randomFn || Math.random)() * options.length)];

          // Put our unspun choice back into text
          text = text.replace(spin[0], choice);

          // Increase unspin counter
          unspinCount++;
      }

      return text;
  }

  function simpanData(callback = null){
    var obj = {};
    obj["tag_colors_"+line_id] = tag_colors;
    obj["filter_settings_"+line_id] = filter_settings;
    obj["currentLang"] = current_lang;
    browser.storage.local.set(obj).then(function(item){
        if (typeof callback === "function") {
          callback();
        }
    });
  }

  function ambilData(callback = null){
    var obj = {};
    obj["tag_colors_"+line_id] = {};
    obj["filter_settings_"+line_id] = {};
    //obj["broadcast_schedules_"+line_id] = [];
    obj["schedule_migrated_v1_"+line_id] = null;
    obj["currentLang"] = "en";
    obj["currentImprovements"] = [];
    obj["delay_min_"+line_id] = 0;
    obj["delay_max_"+line_id] = 0;
    obj["rest_min_"+line_id] = 1;
    obj["rest_max_"+line_id] = 5;
    obj["broadcastAdmins"] = {};
    obj["original_admin"] = null;
    obj["business_hours_"+line_id] = false;
    obj["auto_reply_"+line_id] = null;
    browser.storage.local.get(obj).then(function(item){
      tag_colors = item["tag_colors_"+line_id];
      filter_settings = item["filter_settings_"+line_id];
      current_lang = item["currentLang"];
      current_improvements = item["currentImprovements"];
      delay_min = item["delay_min_"+line_id];
      if(document.querySelector("#delay-min")) document.querySelector("#delay-min").value = delay_min;
      delay_max = item["delay_max_"+line_id];
      if(document.querySelector("#delay-max")) document.querySelector("#delay-max").value = delay_max;
      rest_min = item["rest_min_"+line_id];
      if(document.querySelector("#rest-min")) document.querySelector("#rest-min").value = rest_min;
      rest_max = item["rest_max_"+line_id];
      if(document.querySelector("#rest-max")) document.querySelector("#rest-max").value = rest_max;
      original_admin = item["original_admin"];
      if(line_id in item["broadcastAdmins"]){
        broadcast_admins = {};
        item["broadcastAdmins"][line_id].forEach(function(admin){
          broadcast_admins[admin] = null;
        });
      };
      document.dispatchEvent(new CustomEvent('onImprovements', {detail:current_improvements}));
      //broadcast_schedules = item["broadcast_schedules_"+line_id];
      // if(!item["schedule_migrated_v1_"+line_id]){
      //  //untuk migrasi perubahan schedule
      //  var new_schedules = [];
      //  if(broadcast_schedules.length > 0){
      //    broadcast_schedules.every(function(bc, index) {
      //      var name = Date.now();
      //      new_schedules.push({
      //        name:name,
      //        schedule:bc.schedule,
      //        schedule_text:bc.schedule_text
      //      });

      //      var obj = {};
      //      obj["bc_"+line_id+"_"+name] = bc;
      //      chrome.storage.local.set(obj);
      //      return true;
      //    });
      //  }
     //   broadcast_schedules = new_schedules;
     //   var obj = {};
      //  obj["broadcast_schedules_"+line_id] = broadcast_schedules;
      //  obj["schedule_migrated_v1_"+line_id] = Date.now();
      //  chrome.storage.local.set(obj);
      // }
      is_business_hours = item["business_hours_"+line_id];
      auto_reply = item["auto_reply_"+line_id];
      if (typeof callback === "function") {
        callback();
      }
    });
  }

  

  function ambilSemuaInfo(callback){
    ambilData(function(){
      return callback();
    }); 
  }

  function log(obj){
    if(is_debug) console.log(obj);
  }

  function fetchAccount(callback = null){
    waitUntilCondition(function(){
      if(line_bots){
        var paths = location.pathname.split("/");
        line_id = paths[1];
        if(line_bots){
          var idx = line_bots.findIndex(item => item.botId === line_id);
          line_data = line_bots[idx];
        }
        //line_name = document.querySelector("#header-user .lead").innerText.trim();
        //line_img = document.querySelector("#header-user img").src;
        document.dispatchEvent(new CustomEvent('onLineData', {detail:{
          line_id:line_id
        }}));



        var obj = {};
        obj["backup_bc_"+line_id] = null;
        browser.storage.local.get(obj).then(function(item){
          var backup_id = item["backup_bc_"+line_id];
          waitUntilElement("#laris-broadcast .btn-prepare",function(btnPrepare){
            if(backup_id && active_data == null){
              content_port.onMessage.addListener(function checkbackup(request){
                if(request.type == "idb_callback" && request.id == backup_id){
                  var bc_sent = [];
                  var bc_master = null;
                  request.result.forEach(function(data){
                    if(data.table == cnst["TBL_D_BSENT"] && data.mode == "select"){
                      bc_sent = data.result;
                    }else if(data.table == cnst["TBL_M_BBC"] && data.mode == "select"){
                      bc_master = data.result ? data.result[0] : null; 
                    }
                  });
                  if(bc_master){
                    progress_data = {
                      user:bc_master.user_sent,
                      message:bc_master.msg_idx_1,
                      message2:bc_master.msg_idx_2,
                      max_users:bc_master.max_users,
                      max_messages:bc_master.max_messages
                    };
                    broadcast_recovery = {
                      bc:bc_master.bc_setup,
                      users:bc_master.fetched_users,
                      progress:progress_data,
                      sent:bc_sent
                    };
                    btnPrepare.style = "border: 1px solid red;";
                    btnPrepare.title = getTransText("youHaveUnfinishedBroadcast");
                    if(auto_recovery && active_data == null){
                      launchRecovery();
                    } 
                  }else{
                    broadcast_recovery = null;
                    btnPrepare.style = "";
                    btnPrepare.title = getTransText("setupABroadcast");
                  }
                  content_port.onMessage.removeListener(checkbackup);
                }
              });
              content_port.postMessage({
                type:"idb",
                id:backup_id,
                actions:[{
                  mode:"select",
                  table:cnst["TBL_D_BSENT"],
                  where:{
                    bc_id:backup_id
                  }
                },
                {
                  mode:"select",
                  table:cnst["TBL_M_BBC"],
                  where:{
                    bc_id:backup_id
                  }
                }]
              });
            }else{
              broadcast_recovery = null;
              btnPrepare.style = "";
              btnPrepare.title = getTransText("setupABroadcast");
            }
          });
        });
        if (typeof callback === "function") {
          callback(true);
        }
        return true;
      }else{
        if (typeof callback === "function") {
          callback(false);
        }
        return false;
      }
    });
  }

  function validateUserImprovements(){
    if(user_type != 1 || user_token == ""){
      var old = current_improvements;
      current_improvements = [];
      if(old.includes("handle_limited")) current_improvements.push("handle_limited");
      if(old.includes("anti_crash")) current_improvements.push("anti_crash");
      if(old.includes("auto_login")) current_improvements.push("auto_login");
      if(old.includes("auto_reply")) current_improvements.push("auto_reply");
    }
    document.dispatchEvent(new CustomEvent('onImprovements', {detail:current_improvements}));
  }

  function connectPort(){
    content_port = browser.runtime.connect({name:/* @mangle */"laris_content"/* @/mangle */});
    content_port.onMessage.addListener(function(request) {
      if(request.type == /* @mangle */"register"/* @/mangle */){

        content_port.postMessage({type:/* @mangle */"requestUserData"/* @/mangle */}); 
        if(request.manifest){
          manifest = request.manifest;
        }
        document.dispatchEvent(new CustomEvent(/* @mangle */"onManifest"/* @/mangle */, {detail:manifest}));
        windowId = request.windowId;
        tabId = request.tabId;
        custom_session = request.isCustomSession;
        admin_sessions = request.adminSessions;
        watermark = request.watermark;
        agent_data = request.agent;
        langs = request.langs;
        server_configs = request.serverConfigs;
        line_client_version = server_configs['line_client_version'];
        waitUntilCondition(function(){
          var script_oa = document.querySelector("script#oa.loaded");
          if(script_oa){
            script_oa.remove();
            construct(function(){
              return waitUntilCondition(function(){
                if(line_data && line_me){ // && window.sw_loaded
                  line_data["admin"] = line_me;

                  var sendObj = {
                    type:/* @mangle */"tabRegistered"/* @/mangle */,
                    data:line_data
                  };
                  sendObj[/* @mangle */"amankeun_oa"/* @/mangle */] = cnst[/* @mangle */"sumputkeun_ah"/* @/mangle */](/* @mangle */"content_oa"/* @/mangle */)
                  content_port.postMessage(sendObj); 

                  if(loaded_chats_idx > loaded_chats_data.length){
                    var xobj = new XMLHttpRequest();
                    xobj.open('GET', cnst[/* @mangle */"OA_MAIN_URL"/* @/mangle */]+cnst[/* @mangle */"OA_API_DIR2"/* @/mangle */]+line_id+'/chats?folderType=ALL&tagIds=&limit=25', true);
                    xobj.withCredentials = true;
                    xobj.send();
                  }

                  if(user_conflict) document.dispatchEvent(new CustomEvent(/* @mangle */'onLicenseConflict'/* @/mangle */, {}));

                  var obj = {};
                  obj["replied_users_"+line_id+"_"+line_me.bizId] = {};
                  browser.storage.local.get(obj).then(function(item){
                    replied_users = item["replied_users_"+line_id+"_"+line_me.bizId];
                  });
                  return true;
                }else{
                  return false;
                }
              });
            });
          }else{
            return false;
          }
        });
        if(!(/* @mangle */"meh_aman_yeuh"/* @/mangle */ in request) || cnst[/* @mangle */"tingalikeun_ah"/* @/mangle */](request[/* @mangle */"meh_aman_yeuh"/* @/mangle */]) != cnst[/* @mangle */"tingalikeun_ah"/* @/mangle */](cnst[/* @mangle */"sumputkeun_ah"/* @/mangle */](/* @mangle */"background_oa"/* @/mangle */))){
          content_port[/* @mangle */"disconnect"/* @/mangle */]();
        }
      }else if(request.type == "setMainContent"){
        is_main = true;
        injectOverrider();
        waitUntilElement("#laris-schedule",function(){
          countdown_active = false;
          schedule_active = false;
          var obj = {};
          obj["broadcast_schedules_"+line_id] = [];
          browser.storage.local.get(obj).then(function(item){
            broadcast_schedules = item["broadcast_schedules_"+line_id];
            setupSchedule();
          });
        });
      }else if(request.type == "setSecondaryContent"){
        //log("setSecondaryContent");
        is_main = false;
        if(client_gesture) window.onbeforeunload = null;
        waitUntilElement("#laris-schedule",function(){
          countdown_active = false;
          schedule_active = false;
          broadcast_schedules = [];
          setupSchedule();
        });
      }else if(request.type == "refreshTab"){
        if(request.ignore == true || active_data == null){
          if(client_gesture) window.onbeforeunload = null;
          window.location.reload();
        }
      }else if(request.type == "autoRecover"){
        if(request.data){
          auto_recovery = true;
          if(broadcast_recovery && active_data == null) launchRecovery();
        }
      }else if(request.type == /* @mangle */"reportLicenseUser"/* @/mangle */){
        var data = request.data;
        user_id = data[/* @mangle */'usr_id'/* @/mangle */];
        user_token = data[/* @mangle */'usr_tkn'/* @/mangle */];
        user_type = data[/* @mangle */'usr_tpe'/* @/mangle */];
        user_units = data[/* @mangle */'usr_unt'/* @/mangle */];
        user_ration = data[/* @mangle */'usr_rtn'/* @/mangle */];
        user_rnd = data[/* @mangle */'usr_rnd'/* @/mangle */];
        user_conflict = data[/* @mangle */'usr_cfc'/* @/mangle */];
        validateUserImprovements();
      }else if(request.type == "cookies"){
        var cookies = document.cookie;
        sendResponse(cookies);
      }else if(request.type == "startBroadcast"){
        var data = request.data;   
        //checkAccount();
        var includetags = [];
        data.includetags.forEach(function(t){
          if(t.botId == line_id){
            includetags.push(t);
          }
        });
        var excludetags = [];
        data.excludetags.forEach(function(t){
          if(t.botId == line_id){
            excludetags.push(t);
          }
        });
        data.createdTime = Date.now();
        data.includetags = includetags;
        data.excludetags = excludetags;
        if(data.unsends){
          organizeUnsends(data.unsends);
        }
        if(data.schedule == null){
          setupBroadcast(data);
        }else{
          insertSchedule(data);
        }
      }else if(request.type == "startUnsend"){ 
        setupUnsend(request);
      }else if(request.type == "stopBroadcast"){
        if(client_gesture) window.onbeforeunload = null;
      }else if(request.type == /* @mangle */"lcsConflict"/* @/mangle */){
        document.dispatchEvent(new CustomEvent(/* @mangle */'onLicenseConflict'/* @/mangle */, {}));
      }else if(request.type == /* @mangle */"lcsExpire"/* @/mangle */){
        if(active_data == null) document.dispatchEvent(new CustomEvent(/* @mangle */'onLicenseExpired'/* @/mangle */, {}));
      }else if(request.type == "validateBroadcast"){
        var data = {result:true,code:''};
        ambilMe(function(login,data){
          content_port.postMessage({type:"broadcastValidated",data:{id:line_id,result:login,code:"login"}});
          if(!login){
            if(client_gesture) window.onbeforeunload = null;
            window.location.reload();
          }
        },line_me ? line_me.bizId : null);
      }else if(request.type == "setColorMark"){
        injectColorLine(request.data.color);
        changeFavicon(request.data.icon);
      }else if(request.type == "requestForFavicon"){
        content_port.postMessage({type:'processFaviconColor',data:{
          favIconUrl:document.querySelector("link[rel~='icon']").href,
          tabId:request.data.tabId,
          color:request.data.color,
        }});
      }else if(request.type == "serverConfigs"){
        try{
          server_configs = {...server_configs,...request.data};
        }catch(exp){
          console.log(exp);
          server_configs = request.data;
        }
      }else if(request.type == "adminSessions"){
        admin_sessions = request.data;
        var switcher = document.querySelector(".btn-switch-session");
        if(switcher){
          if(Object.keys(admin_sessions).length == 0 || (Object.keys(admin_sessions).length == 1 && line_me && line_me.bizId in admin_sessions)){
            if(!switcher.classList.contains('hidden')) switcher.classList.add('hidden');
          }else{
            if(switcher.classList.contains('hidden')) switcher.classList.remove('hidden');
          }
        }
        var exportses = document.querySelector(".btn-export-session");
        if(exportses){
          if(Object.keys(admin_sessions).length == 0 || (Object.keys(admin_sessions).length == 1 && line_me && line_me.bizId in admin_sessions)){
            if(!exportses.classList.contains('hidden')) exportses.classList.add('hidden');
          }else{
            if(exportses.classList.contains('hidden')) exportses.classList.remove('hidden');
          }
        }
      }else if(request.type == "closeTab"){
        if(client_gesture) window.onbeforeunload = null;
        window.close();
      }else if(request.type == "duplicatedAdmin"){
        //document.dispatchEvent(new CustomEvent('onAdminDuplicated', {detail:request.data}));
        setTimeoutWorker(function(){
          if(client_gesture) window.onbeforeunload = null;
          window.location.href = "https://account.line.biz/login?redirectUri=https%3A%2F%2Fchat.line.biz%2F";
        },5000);
      }else if(request.type == "recoverBroadcastOnMain"){
        if(broadcast_recovery && active_data == null) launchRecovery();
      }else if(request.type == "saveAutoReply"){
        if(request.data.account == line_id){
          auto_reply = request.data;
          var btn = document.querySelector("#laris-shortcut .btn-autoreply");
          if(btn){
            if(auto_reply && !btn.classList.contains("active")){
              btn.classList.add("active");
            }
          }
        }
      }else if(request.type == "removeAutoReply"){
        if(auto_reply && request.data == line_id){
          auto_reply = null;
          var btn = document.querySelector("#laris-shortcut .btn-autoreply");
          if(btn){
            if(btn.classList.contains("active")){
              btn.classList.remove("active");
            }
          }
        }
      }else if(request.type == "refreshOwners"){
        var xobj = new XMLHttpRequest();
        xobj.open('GET', 'https://chat.line.biz/api/v1/bots/'+line_id+'/owners', true);
        if(line_me) xobj.setRequestHeader("checkadmin",line_me ? line_me.bizId : null);
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4) {
            if(xobj.status == 200){
              var rows = JSON.parse(xobj.responseText);
              if(rows){
                document.dispatchEvent(new CustomEvent('onOwners', { detail: rows.list }));
              }
            }
          }
        };
        xobj.send();  
      }else if(windowId == 0 || tabId == 0){
        log("request denied.");
        return;
      }
    });
    content_port.onDisconnect.addListener(function() {
      content_port = null;
      if(client_gesture) window.onbeforeunload = null;
      setTimeoutWorker(function(){
        window.location.reload();
      },500);
    });
  }


  function launchRecovery(){
    setupBroadcast(broadcast_recovery.bc);
    content_port.postMessage({
      type:"setBroadcastStatus",
      data:{
        line_id:line_id,
        status:true
      }
    });
    var btnPrepare = document.querySelector("#laris-broadcast .btn-prepare");
    if(btnPrepare){
      btnPrepare.title = getTransText("setupABroadcast");
      btnPrepare.style = "";
    }  
  }

  function insertSchedule(bc){
    var idx = 0;
    broadcast_schedules.every(function(element, index) {
      if(element.schedule > bc.schedule){
        return false;
      }
      idx++;
      return true;
    });
    if(idx == 0){
      countdown_active = false;
      schedule_active = false;
    }
    var name = Date.now();
    broadcast_schedules.splice(idx,0,{
      name:name,
      schedule:bc.schedule,
      schedule_text:bc.schedule_text
    });
    var obj = {};
    obj["bc_"+line_id+"_"+name] = bc;
    obj["broadcast_schedules_"+line_id] = broadcast_schedules;
    browser.storage.local.set(obj).then(function(item){
      setupSchedule();
    });
  }

  function organizeUnsends(data){
    unsent_list = [];
    unsent_messages = {};
    for (const [key, row] of Object.entries(data)) {
      if(row.account && line_id === row.account.id){
        var cid = row.createdTime+"_"+row.account.id;
        if(!unsent_list.includes(cid)) unsent_list.push(cid);
        if(row.sentList && row.sentList.length > 0){
          row.sentList.forEach(function(send){
            var splitted = send.split("#");
            if(splitted && splitted.length >= 3){
              var splitted2 = splitted[1].split("_");
              if(splitted2 && splitted2.length >= 3){
                var id = splitted2[0];
                if(!(id in unsent_messages)){
                  unsent_messages[id] = [];
                }
                unsent_messages[id].push(splitted[1]);
              }
            }
          });
        }
      }
    }
  }

  function injectColorLine(color){
      var html = `
      <div id="laris-line" style="position:fixed;width:100%;height:3px;background-color:`+color+`">
      </div>`;
      var el = createElement(html);
      document.querySelector("html").insertBefore(el,document.querySelector("body"));
  }


  function isWithinLast7Days(timestamp) {
    // Get the current timestamp in milliseconds
    const currentTimestamp = Date.now();
      
    // Calculate the timestamp for 7 days ago
    const sevenDaysInMillis = 7 * 24 * 60 * 60 * 1000;  // 7 days in milliseconds
    const sevenDaysAgoTimestamp = currentTimestamp - sevenDaysInMillis;
      
    // Check if the provided timestamp is within the last 7 days
    return timestamp >= sevenDaysAgoTimestamp && timestamp <= currentTimestamp;
  }

  function changeFavicon(dataUrl){
    var link = document.querySelectorAll("link[rel~='icon']");
    if (link.length === 0) {
        var newLink = document.createElement("link");
        newLink.setAttribute("rel", "icon");
        newLink.setAttribute("href", dataUrl);
        document.head.appendChild(newLink);
    }
    else {
      for (var i = 0, len = link.length; i < len; i++) {
          link[i].type = "image/x-icon";
          link[i].href = dataUrl;
      }
    }
    var shortcutIcon = document.querySelectorAll("link[rel='shortcut icon']");
    for (var i = 0, len = shortcutIcon.length; i < len; i++) {
      shortcutIcon[i].type = "image/x-icon";
      shortcutIcon[i].href = dataUrl;
    }
  }

  function sendReplyMessage(data,idx = -1,callback){
    if(idx >= auto_reply.messages.length){
      return callback();
    }
    var user = {
      id:data.payload.source.userId,
      name:data.payload.source.userId in replied_users && "name" in replied_users[data.payload.source.userId] ? replied_users[data.payload.source.userId].name : null
    }
    if(idx == -1){
      if(user_type != 1 || user_token == ""){
        var message = {
          "id":0,
          "type":"text",
          "content":watermark.replace("{name}",getTransText("appName"))+" "+(agent_data == null ? "https://bit.ly/laris_app" : ""),
          "content_alt":watermark.replace("{name}",getTransText("appName"))+" "+(agent_data == null ? "https://bit.ly/laris_app" : "")
        };
        return processTextMesage(user,message,function(content,emojis){
          var request = {
            user:user,
            content:content,
            emojis:emojis,
          };
          sendText(request,function(){
            sendReplyMessage(data,idx+1,callback);
          }); 
        });
      }
      idx = 0;
    }
    var message = auto_reply.messages[idx];
    if(message.type == "text"){
      processTextMesage(user,message,function(content,emojis){
        var request = {
          user:user,
          content:content,
          emojis:emojis,
        };
        sendText(request,function(){
          sendReplyMessage(data,idx+1,callback);
        }); 
      });
    }else if(message.type == "sticker"){
      var request = {
        user:user,
        content:message.value,
      };
      sendSticker(request,function(){
        sendReplyMessage(data,idx+1,callback);
      }); 
    }else if(message.type == "coupon"){
      var request = {
        user:user,
        content:message.value,
      };
      sendCoupon(request,function(){
        sendReplyMessage(data,idx+1,callback);
      }); 
    }else if(message.type == "file"){
      var request = {
        user:user,
        contents:message.contents,
      };

      if('send_file_method' in server_configs && server_configs['send_file_method'] == 'new'){
        sendFile(request,function(){
          sendReplyMessage(data,idx+1,callback);
        }); 
      }else{
        sendFileOld(request,function(){
          sendReplyMessage(data,idx+1,callback);
        }); 
      }
    }else if(message.type == "card"){
      var request = {
        user:user,
        content:message.value.id,
      };
      sendCard(request,function(){
        sendReplyMessage(data,idx+1,callback);
      }); 
    }
  }

  function startAutoReply(data){
    var uid = data.payload.source.userId;
    if(auto_reply.reset == "1min"){
      if(uid in replied_users && replied_users[uid].count >= auto_reply.limit){
        if((Date.now()-replied_users[uid].last) < 60000){
          printLog("↩️ "+uid+" 🌡");
          return;
        }else{
          replied_users[uid].count = 0;
        }
      }
    }else if(auto_reply.reset == "1hour"){
      if(uid in replied_users && replied_users[uid].count >= auto_reply.limit){
        if((Date.now()-replied_users[uid].last) < 3600000){
          printLog("↩️ "+uid+" 🌡");
          return;
        }else{
          replied_users[uid].count = 0;
        }
      }
    }else if(auto_reply.reset == "1day"){
      if(uid in replied_users && replied_users[uid].count >= auto_reply.limit){
        var today = new Date().setHours(0, 0, 0, 0);
        var thatDay = new Date(replied_users[uid].last).setHours(0, 0, 0, 0);
        if(today === thatDay){
          printLog("↩️ "+uid+" 🌡");
          return;
        }else{
          replied_users[uid].count = 0;
        }
      }
    }
    sendReplyMessage(data,-1,function(){
      if(uid in replied_users){
        replied_users[uid].count++;
        replied_users[uid].last = Date.now();
      }else{
        replied_users[uid] = {
          count:1,
          last:Date.now()
        }
      }
      if(uid in user_infos && !("name" in replied_users[uid])){
        replied_users[uid].name = user_infos[uid].name;
      }
      var obj = {};
      obj["replied_users_"+line_id+"_"+line_me.bizId] = replied_users;
      browser.storage.local.set(obj);
    });
  }

  function construct(callback = null){
    document.dispatchEvent(new CustomEvent('onReceiveLangs', {detail:langs}));
    ambilSemuaInfo(function(){
      injectElements();
      fetchAccount();
      //checkAccount();
      if (typeof callback === "function") {
         callback();
      }
    });
  }

  this.connect = function(){
    if(content_port == null){
      
      injectGeneralScripts();
      if(window.location.href.startsWith("https://chat.line.biz")){
        var paths = location.pathname.split("/");
        line_id = paths[1];
        injectChatScripts();
      }else if(window.location.href.startsWith("https://manager.line.biz/")){
        injectManagerScript();
      }
      connectPort();
    }
  }

}

if((window.opener == null || window.opener === window) && (window.location == window.parent.location)){
  if(window.injected == null){
    window.injected = new suntik();
  }
  window.injected.connect();
}

