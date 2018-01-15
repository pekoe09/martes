package martes.controllers;

import martes.repositories.AssetTypeRepository;
import martes.domain.AssetOptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AssetController {

    @Autowired
    private AssetTypeRepository assetTypeRepository;

    @RequestMapping(value = "/api/assetOptions", method = RequestMethod.GET)
    public AssetOptions getAssetOptionData() {
        AssetOptions assetOptions = new AssetOptions();
        assetOptions.setAssetTypes(assetTypeRepository.findAll());
        return assetOptions;
    }

}