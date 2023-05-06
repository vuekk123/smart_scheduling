package com.scheduling.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scheduling.entity.Staff;
import com.scheduling.entity.schedule_time;
import com.scheduling.service.AccountService_1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.lang.reflect.Array;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static com.scheduling.entity.schedule_time.findDates;

@Controller
public class AccountController_1 {

    @Autowired
    private AccountService_1 accountService_1;


    @RequestMapping("selectAllStaff")
    public List<Staff> selectAllStaff(HttpServletRequest request, Model model) {
        String sid = request.getParameter("sid");
        //根据门店的sid查询该门店所有的员工
        List<Staff> staff = accountService_1.selectAllStaff(sid);
        model.addAttribute("Staff", staff);
        return staff;
    }

    //按周查看
    @RequestMapping("ViewByWeek")
    @ResponseBody
    public List ViewByWeek(HttpServletRequest request) throws ParseException {
        String date = request.getParameter("date");
        System.out.println(date);

        String[] split = date.split("--");

        System.out.println("根据空格分隔后得数据");
        for (int i = 0; i < split.length; i++) {
            System.out.println(split[i]);

        }
        String start = split[1];
        String end = split[2];
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        Date dBegin = sdf.parse(start);
        Date dEnd = sdf.parse(end);
        List<Date> lDate = findDates(dBegin, dEnd);
        List<schedule_time> list = null;
        List list1 = new ArrayList();
        System.out.println("推断出的ldate");
        System.out.println(lDate);
        for (Date date0 : lDate) {
//            System.out.println(sdf.format(date0));
            list = accountService_1.ViewByWeek(date0, split[0]);
            list1.add(list);

        }
        System.out.println(list1);
        return list1;


    }


    //按日查看
    @RequestMapping("ViewByDay")
    @ResponseBody
    public List<schedule_time> ViewByDay(HttpServletRequest request) throws Exception {

        String dateinfo = request.getParameter("date");
//            System.out.println(date); //1-1
        System.out.println(dateinfo);
        String[] split = dateinfo.split("--");
//        String date2 = "";
        String shop = split[0];
        String date = split[1];
        System.out.println(shop);
        System.out.println(date);
//        for (int i = 0; i < split.length; i++) {
//            split[i] = "0" + split[i];
////        System.out.println(split[i]);
//            date2 += split[i];
//
//        }
////    System.out.println(date2);//0101
//
//        StringBuilder sb = new StringBuilder(date2);
//        sb.insert(2, "-");
////    System.out.println(sb.toString());//01-01
//
//        String date3 = "2023-" + sb.toString();
////    System.out.println(date3);
////    System.out.println(accountService_1.ViewByDay(date3));
////    System.out.println(date3);//2023-01-01
//

        return accountService_1.ViewByDay(shop,date);


    }


    @RequestMapping("checkmail")
    public void checkMail(HttpServletRequest request, HttpServletResponse response) throws IOException {

        //获取用户名
        String mail = request.getParameter("mail");
        //查询数据库看用户名是否存在

        //期望服务器响应回的格式:{"userExist":true,"msg":"此用户名已经存在,请换一个"}
        //                     {"userExist":false,"msg":"此用户名可用"}
        String checkmail = accountService_1.checkmail(mail);
        System.out.println(checkmail);

        response.setContentType("application/json;charset=utf-8");
        Map<String, Object> map = new HashMap<String, Object>();
        if (mail.equals(checkmail)) {
            //存在
            map.put("userExist", true);
//            map.put("msg", "此用户名已经存在");
        }
//        }else{
//            map.put("userExist",false);
//            map.put("msg","用户名不存在可以注册");
//        }

        //将map转为json,传递给客户端
        ObjectMapper mapper = new ObjectMapper();
        //传递给客户端
        mapper.writeValue(response.getWriter(), map);
    }


}
