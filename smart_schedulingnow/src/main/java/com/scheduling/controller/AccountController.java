package com.scheduling.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.scheduling.entity.Staff;
import com.scheduling.entity.addpeople;
import com.scheduling.entity.schedule_time;
import com.scheduling.mapper.AccountMapper;
import com.scheduling.service.AccountService;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.scheduling.service.AccountService_1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Controller
public class AccountController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private AccountService_1 accountService_1;

    //============================by_k_beg======================================================
    @RestController
    public static class UserController {
        @Autowired
        private AccountService accountService;
        private final ObjectMapper objectMapper;

        public UserController(ObjectMapper objectMapper) {
            this.objectMapper = objectMapper;
        }

        @PostMapping(value = "/people_manage/addworker", consumes = MediaType.APPLICATION_JSON_VALUE)
        public ResponseEntity<Boolean> createUser(@RequestBody String json) throws Exception {
            System.out.println(json);
            Staff addworker = objectMapper.readValue(json, Staff.class);
            System.out.println(addworker);
            String workerId=getRandomId(accountService);
            addworker.setId(workerId);
            System.out.println("用户数据：" +addworker.getId()+ addworker.getName() + ", " + addworker.getAge() + "," + addworker.getSex()
            + "," + addworker.getMail() + "," + addworker.getPosition() + "," + addworker.getPhone());
            Boolean flag  = accountService.RegisterAccountInfo(addworker);
            System.out.println(flag);
            return ResponseEntity.ok(flag);
        }
    }

    @RequestMapping("deleteStaff")
    @ResponseBody
    public List<List<Staff>> deleteStaff(HttpServletRequest request) {
        String staffId = request.getParameter("id");
        String shop = request.getParameter("shop");
        System.out.println(staffId);
        System.out.println(shop);
        accountService_1.deleteStaff(staffId);
        List<Staff> staffList = accountService_1.del_selectAllStaff(shop);
        int rows = (int) Math.ceil(staffList.size() / 6.0);
        int cols = 6;

        List<List<Staff>> del_arr = new ArrayList<>(rows);
        int index = 0;
        for (int i = 0; i < rows; i++) {
            List<Staff> row = new ArrayList<>(cols);
            for (int j = 0; j < cols; j++) {
                if (index < staffList.size()) {
                    row.add(staffList.get(index));
                } else {
                    row.add(null);
                }
                index++;
            }
            del_arr.add(row);
        }
        del_arr.forEach(row -> row.removeIf(Objects::isNull));
        return del_arr;
    }

    @RequestMapping("showworker")
    @ResponseBody
    public List<List<Staff>> showaddworker(HttpServletRequest request) {
        String shop = request.getParameter("shop");
        List<Staff> staffList = accountService_1.del_selectAllStaff(shop);
        int rows = (int) Math.ceil(staffList.size() / 6.0);
        int cols = 6;

        List<List<Staff>> del_arr = new ArrayList<>(rows);
        int index = 0;
        for (int i = 0; i < rows; i++) {
            List<Staff> row = new ArrayList<>(cols);
            for (int j = 0; j < cols; j++) {
                if (index < staffList.size()) {
                    row.add(staffList.get(index));
                } else {
                    row.add(null);
                }
                index++;
            }
            del_arr.add(row);
        }
        del_arr.forEach(row -> row.removeIf(Objects::isNull));
        return del_arr;
    }
    @RequestMapping("getworker")
    @ResponseBody
    public List<List<Staff>> getworker(HttpServletRequest request) {
        String shop = request.getParameter("shop");
        List<Staff> staffList = accountService_1.del_selectAllStaff(shop);
        int rows = (int) Math.ceil(staffList.size() / 6.0);
        int cols = 6;

        List<List<Staff>> del_arr = new ArrayList<>(rows);
        int index = 0;
        for (int i = 0; i < rows; i++) {
            List<Staff> row = new ArrayList<>(cols);
            for (int j = 0; j < cols; j++) {
                if (index < staffList.size()) {
                    row.add(staffList.get(index));
                } else {
                    row.add(null);
                }
                index++;
            }
            del_arr.add(row);
        }
        del_arr.forEach(row -> row.removeIf(Objects::isNull));
        return del_arr;
    }
    //============================by_k_end======================================================

    @RequestMapping("show_staff_login")
    public String ShowStaffLogin() {
        return "login";
    }

    @RequestMapping("show_register_web")
    public String ShowRegisterWeb() {
        return "signup";
    }

//    @RequestMapping("returnpeople")
//    public List<Staff> Returnpeople(String shop) {
//        List<Staff> staffs = accountService_1.selectAllStaff(shop);
//        return staffs;
//    }

    @RequestMapping("check_staff_login")
    public String CheckStaffLogin(HttpServletRequest request, Model model) {
        String mail = request.getParameter("mail");
        String pwd = request.getParameter("pwd");
        System.out.println("取到的账号为：" + mail + ",取到的密码为：" + pwd);
        Staff staff = accountService.CheckLoginStatus(mail, pwd);
        System.out.println(staff);
//        System.out.println("登录数据为：" + staff.toString());

        //下面的数据暂时还不知道有什么用处，这里先注释掉了，后面如果发现有用到可以作为一个提示
//        staff.getId();
//        staff.getShop();
//        staff.getName();

        //登录成功或失败的重定向功能
        if (staff != null) {
            //接下来是权限分配功能，如果账号密码正确，则拿到该员工的职位等级，从而后面可以对其可查看信息进行筛选
            model.addAttribute("position", staff.getPosition());
            model.addAttribute("name", staff.getName());
            //查询登录的用户是属于哪一个门店
            String shop = accountService.selectShop_1(mail);
            System.out.println("该用户属于" + shop);
            model.addAttribute("nameShop", shop);
            //============================by_k_beg======================================================
            //根据门店shop查询该门店所有的员工
            List<Staff> staffList = accountService_1.fir_selectAllStaff(shop);
            int rows = (int) Math.ceil(staffList.size() / 6.0);
            int cols = 6;
            List<List<Staff>> fir_arr = new ArrayList<>(rows);
            int index = 0;
            for (int i = 0; i < rows; i++) {
                List<Staff> row = new ArrayList<>(cols);
                for (int j = 0; j < cols; j++) {
                    if (index < staffList.size()) {
                        row.add(staffList.get(index));
                    } else {
                        row.add(null);
                    }
                    index++;
                }
                fir_arr.add(row);
            }
            fir_arr.forEach(row -> row.removeIf(Objects::isNull));
            model.addAttribute("Staff", fir_arr);
            model.addAttribute("workerPage",fir_arr.size());
            //============================by_k_end======================================================


            //登陆成功查询数据库的数据,然后将数据传递给前端,前端将数据展示在页面上
//            List<schedule_time> schedule_times = accountService.selectScheduleInfo01(shop);
//            System.out.println(schedule_times);
//            schedule_times.get

//            model.addAttribute("schedule_times01",accountService.selectScheduleInfo01(shop));
//            model.addAttribute("schedule_times02",accountService.selectScheduleInfo02(shop));
//            model.addAttribute("schedule_times03",accountService.selectScheduleInfo03(shop));
//            model.addAttribute("schedule_times04",accountService.selectScheduleInfo04(shop));
//            model.addAttribute("schedule_times05",accountService.selectScheduleInfo05(shop));
//            model.addAttribute("schedule_times06",accountService.selectScheduleInfo06(shop));
//            model.addAttribute("schedule_times07",accountService.selectScheduleInfo07(shop));
//            int size=0;
//            if (accountService.selectScheduleInfo01(shop).size()>size){
//                size=accountService.selectScheduleInfo01(shop).size();
//
//            }
//            if (accountService.selectScheduleInfo02(shop).size()>size){
//                size=accountService.selectScheduleInfo02(shop).size();
//            }
//            if (accountService.selectScheduleInfo03(shop).size()>size){
//                size=accountService.selectScheduleInfo03(shop).size();
//            }
//            if (accountService.selectScheduleInfo04(shop).size()>size){
//                size=accountService.selectScheduleInfo04(shop).size();
//            }
//            if (accountService.selectScheduleInfo05(shop).size()>size){
//                size=accountService.selectScheduleInfo05(shop).size();
//            }
//            if (accountService.selectScheduleInfo06(shop).size()>size){
//                size=accountService.selectScheduleInfo06(shop).size();
//            }
//            if (accountService.selectScheduleInfo07(shop).size()>size){
//                size=accountService.selectScheduleInfo07(shop).size();
//            }
//
//
//            model.addAttribute("size",new int[size]);
//            model.addAttribute("size1",accountService.selectScheduleInfo01(shop).size());
//            model.addAttribute("size2",accountService.selectScheduleInfo02(shop).size());
//            model.addAttribute("size3",accountService.selectScheduleInfo03(shop).size());
//            model.addAttribute("size4",accountService.selectScheduleInfo04(shop).size());
//            model.addAttribute("size5",accountService.selectScheduleInfo05(shop).size());
//            model.addAttribute("size6",accountService.selectScheduleInfo06(shop).size());
//            model.addAttribute("size7",accountService.selectScheduleInfo07(shop).size());
            return "index";
        } else {
            return "redirect:show_staff_login";
        }

    }

    @RequestMapping("show_register")
    public String showRegister() {
        return "注册";
    }

    @RequestMapping("register_account_info")
    public String RegisterAccountInfo(HttpServletRequest request, Model model) {
        System.out.println("进入注册");
        HttpSession httpSession = request.getSession();
        //对id自动生成后出现递增效果的计算方法，暂时没有找到好的自动生成id的代码段，后期找到可以将这一段替换
//        ---------------------------------------------------------------------------------------------
//        int amount_id = accountService.CheckIdAmount();
//        int total_id = 220000;
//        total_id += (amount_id + 1);

//        String id = Integer.toString(total_id);
//        System.out.println("最终自动生成的id为：" + id);
//        ---------------------------------------------------------------------------------------------
        String id = null;
        int j = 0;
        out:
        for (String flag = null; flag == null; j++) {
            int num = 8;//生成长度为8的随机id
            StringBuffer uuid = new StringBuffer();
            int count = num / 32 + (num % 32 == 0 ? 0 : 1);
            for (int i = 1; i <= count; i++) {
                uuid.append(UUID.randomUUID());
            }
            String tem_id = uuid.toString().replaceAll("-", "").substring(0, num);
            flag = accountService.CheckSameId(tem_id);
            System.out.println("flag的值为：" + flag + "，tem_id的值为：" + tem_id + "，循环生成次数为：" + j);
            if (flag == null) {
                id = tem_id;
                break out;
            } else {
                flag = null;
            }
        }
        System.out.println("最终自动生成的id为：" + id);

        //前端取到的注册数据
        String name = request.getParameter("name");
        String mail = request.getParameter("mail");
        String position = request.getParameter("position");
        String shop = request.getParameter("shop");
        String pwd = request.getParameter("pwd");
        String pwd2 = request.getParameter("pwd2");

        System.out.println("前端取到的数据:" + name + "," + mail + "," + position + "," + shop + "," + pwd + "," + pwd2);

        Staff staff = new Staff();
        staff.setId(id);
        System.out.println("员工id为：" + staff.getId());
        staff.setName(name);
        staff.setMail(mail);
        staff.setPosition(position);
        staff.setShop(shop);
        staff.setPwd(pwd);
        System.out.println("成功存储注册数据：" + staff.toString());
        //分别存储员工基本信息和id的session
        //在重定向到偏好设置页面以后，可以根据员工id来保持设置的是本员工的偏好
        //在用户基本信息填完后并不立刻执行注册，等偏好填完以后再注册所有账号信息存到数据库，这样防止员工注册到一半将网页关闭的bug
        httpSession.setAttribute("staff", staff);

        accountService.RegisterAccount(staff);

        return "set_pre";
    }

    public static String getRandomId(AccountService accountService){
        String id = null;
        int j = 0;
        out:
        for (String flag = null; flag == null; j++) {
            int num = 8;//生成长度为8的随机id
            StringBuffer uuid = new StringBuffer();
            int count = num / 32 + (num % 32 == 0 ? 0 : 1);
            for (int i = 1; i <= count; i++) {
                uuid.append(UUID.randomUUID());
            }
            String tem_id = uuid.toString().replaceAll("-", "").substring(0, num);
            flag = accountService.CheckSameId(tem_id);
            System.out.println("flag的值为：" + flag + "，tem_id的值为：" + tem_id + "，循环生成次数为：" + j);
            if (flag == null) {
                id = tem_id;
                break out;
            } else {
                flag = null;
            }
        }
        System.out.println("最终自动生成的id为：" + id);
        return id;
    }

    @RequestMapping("set_staff_preference")
    public String SetStaffPreference(HttpServletRequest request, Model model) {
        HttpSession httpSession = request.getSession();
        //输出一下看看session成功了没有
        System.out.println(httpSession.getAttribute("staff"));
        Staff session_staff = (Staff) httpSession.getAttribute("staff");

        String type = request.getParameter("type");
        String staff = session_staff.getId();
        //这里可能要用到讨论时说的String.join这段代码，这里先不写了
        String value = request.getParameter("value");

        //判断员工到底有没有成功填写工作偏好
        int flag = 0;
        flag = accountService.SetStaffPreference(type, staff, value);
        if (flag != 0) {
            System.out.println("员工成功填写工作偏好，符合注册成功条件");
            //在这里才执行注册语句
            accountService.RegisterAccount((Staff) httpSession.getAttribute("staff"));
            model.addAttribute("mail", session_staff.getMail());
            return "redirect:staff_login";
        } else {
            System.out.println("员工没有成功填写工作偏好，不符合注册成功条件");
            //这一步感觉还可以添加一些代码，把空留好，有思路接着写判断失败会出现什么效果
            //1空
            //2空
            //这里先空着，因为没有设计好偏好设置失败会出现什么效果（是返回到某个页面，还是另有别的提示方法）
            return "看注释";
        }
    }
}
