package com.cpr.technotogether.controller;

import com.cpr.technotogether.entity.SoloSpaceEntity;
import com.cpr.technotogether.entity.StudentEntity;
import com.cpr.technotogether.service.SoloSpaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/solospace")
public class SoloSpaceController {
    private SoloSpaceService ssserv;

    @Autowired
    public SoloSpaceController(SoloSpaceService ssserv) {
        this.ssserv = ssserv;
    }

    @GetMapping("/getSpace")
    public SoloSpaceEntity findSpace(@RequestParam("id")int id){
        return ssserv.findById(id);
    }

    @PostMapping("/addSpace")
    public void addSpace(@RequestBody()SoloSpaceEntity solospace){
        ssserv.createSoloSpace(solospace);
    }

    @DeleteMapping("/deleteSpace")
    public void deleteSpace(@RequestParam("id")int id){
        ssserv.deleteById(id);
    }

    @PutMapping("/updateSpace")
    public void updateStudent(@RequestBody()SoloSpaceEntity solospace ){
        ssserv.updateSoloSpace(solospace);
    }

}
