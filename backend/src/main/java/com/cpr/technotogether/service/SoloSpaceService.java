package com.cpr.technotogether.service;

import com.cpr.technotogether.entity.SoloSpaceEntity;
import com.cpr.technotogether.repository.SoloSpaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SoloSpaceService {
    private SoloSpaceRepository ssrepo;

    @Autowired
    public SoloSpaceService(SoloSpaceRepository ssrepo) {
        this.ssrepo = ssrepo;
    }

    public SoloSpaceEntity createSoloSpace(SoloSpaceEntity solospace){
        return ssrepo.save(solospace);
    }

    public SoloSpaceEntity findById(int id){
        Optional<SoloSpaceEntity> result = ssrepo.findById(id);

        SoloSpaceEntity soloSpaceEntity = null;

        if(result.isPresent()){
            soloSpaceEntity = result.get();
        }else{
            throw new RuntimeException("Not found");
        }
        return soloSpaceEntity;
    }

    public void deleteById(int id){
        SoloSpaceEntity soloSpaceEntity = findById(id);
        if(soloSpaceEntity != null){
            ssrepo.delete(soloSpaceEntity);
        }
    }

    public void updateSoloSpace(SoloSpaceEntity solospace){
        ssrepo.save(solospace);
    }
}
